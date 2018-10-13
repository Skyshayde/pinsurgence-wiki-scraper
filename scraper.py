import re
import requests
import json
import os
from PIL import Image
import glob
import pathlib

hardurl = "https://wiki.p-insurgence.com/Delta_Bulbasaur_(Pokémon)"


def url_to_raw(url):
    return url.split("/")[-1]

def url_from_id(id):
    return "https://wiki.p-insurgence.com/index.php?title={}__(Pokémon)&action=raw".format(id.replace(" ","_"))

def move_from_insurgence(move):
    # this is a mistake and I am sorry.  maybe i'll have it fetch moves in the future or something
    movelist = ["achillesheel","ancientroar","corrode","crystalrush","darkmatter","dracojet","dragonify","drakonvoice","jetstream","livewire","lunarcannon","medusaray","morph","nanorepair","newmoon","permafrost","retrograde","wildfire","wormhole","zombiestrike"]
    return move in movelist

def ability_from_insurgence(ability):
    abilitylist = ["absolution","amplifier","ancientpresence","athenian","blazeboost","castlemoat", "chlorofury","etherealshroud","eventhorizon","foundry","glitch","heliophobia","hubris","intoxicate","irrelephant","learnean","noctem","omnitype","pendulum","periodicorbit","phototroph","prismguard","proteanmaxima","regurgitation","shadowdance","sleet","spectraljaws","speedswap","supercell","syntheticalloy","unleafed","vaporization","venomous","windforce","winterjoy"]
    return ability.lower().replace(" ","") in abilitylist

def extract_moveset(text):
    regex = "(?i){{Learnlist/(.*)}}"
    match = re.findall(regex,text)
    moves = []
    for i in match:
        moveset = str(i)
        if(re.match("(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)", moveset)):
            move = []
            moveset = moveset.split("|")
            learnmethod = moveset[0]
            if(learnmethod == "level6"):
                move.append("6L" + moveset[1].replace("Start","1"))
                movename = moveset[2].lower().replace(" ","").replace("-","")
                move.append(movename)
            elif(learnmethod == "tm6"):
                move.append("6M")
                movename = moveset[2].lower().replace(" ","").replace("-","")
                move.append(movename)
            elif(learnmethod == "tutor6"):
                move.append("6T")
                movename = moveset[1].lower().replace(" ","").replace("-","")
                move.append(movename)
            if(not(move_from_insurgence(movename))):
                moves.append(move)
    return moves

def extract_pokemon(text):
    regex = "}}{{(.*?)PokémonInfobox(.*?)}}"
    card = re.search(regex,text.replace("\n","").replace("\r","").replace("\t","").replace(" ","")).group().split("|")
    card.pop()
    card.pop(0)
    dex = {}
    for i in card:
        if i == '':
            continue
        isplit = i.split("=")
        dex[isplit[0].strip()] = isplit[1].strip()
        if "ability" in isplit[0]:
            dex[isplit[0].strip()] = re.sub('([A-Z])', r' \1', isplit[1].strip()).strip()
    regex = "(?i)Basestats==(.*?){{(.*?)Stats(.*?)(?=}})"
    card = re.search(regex,text.replace("\n","").replace("\r","").replace(" ","")).group().split("|")
    card.pop(0)
    for i in card:
        if i == '':
            continue
        isplit = i.split("=")
        dex[isplit[0].strip()] = isplit[1].strip()
    return dex

def format_pokemon(i):
    newdex = []
    newentry = {}
    newentry['num'] = i['ndex']

    if "formeLetter" in i:
        newentry['species'] = i['name'] + "-Mega"
        newentry['baseSpecies'] = i['name']
        newentry['formeLetter'] = "M"
    else
        newentry['species'] = i['name']
    newentry['types'] = [i['type1']]
    if("type2" in i):
        newentry['types'].append(i['type2'])
    newentry['genderRatio'] = {"M": 0.50, "F": 0.50}
    newentry['baseStats'] = {"hp": i['HP'], "atk": i['Attack'], "def": i['Defense'], "spa": i['SpAtk'], "spd": i['SpDef'], "spe": i['Speed']}
    newentry['abilities'] = {0: "Pickup" if ability_from_insurgence(i['ability1']) else i['ability1']}
    if("ability2" in i):
        newentry['abilities'][1] = "Pickup" if ability_from_insurgence(i['ability2']) else i['ability2']
    if("abilityd" in i):
        newentry['abilities']['H'] = "Pickup" if ability_from_insurgence(i['abilityd']) else i['abilityd']
    if "height-m" in i:
        newentry['heightm'] = i['height-m']
    if "weight-kg" in i:
        newentry['weightkg'] = i['weight-kg']
    newentry['color'] = "Green"
    newentry['eggGroups'] = ["Undiscovered"]

    return newentry

def format_moveset(moveset):
    learnset = {}
    for i in moveset:
        if i == []:
            continue
        learnset[i[1]] = [i[0]]
    return learnset

def convert_int_if_possible(input):
    try:
        return str(float(input))
    except ValueError:
        return "\"{}\"".format(input)

def convert_pokemon_js_source(out):
    jsonout = "\'use strict\';\n\n"
    jsonout += "/**@type {{[k: string]: ModdedTemplateData}} */\n"
    jsonout += "let BattlePokedex = {\n"
    for k, v in out.items():
        jsonout += "\t" + k + ": {\n"
        for ki, vi in v.items():
            jsonout += "\t\t" + ki + ": "
            if type(vi) is dict:
                jsonout += "{"
                for index, (kj, vj) in enumerate(vi.items()):
                    jsonout += kj + ": " + convert_int_if_possible(vj) + ("" if index == len(vi.items())-1 else ", ")
                jsonout += "}"
            elif type(vi) is list:
                jsonout += str(vi)
            else:
                jsonout += convert_int_if_possible(vi)
            jsonout += ",\n"
        jsonout += "\t},\n"
    jsonout += "};\n\n"
    jsonout += "exports.BattlePokedex = BattlePokedex;"
    return jsonout

def convert_moveset_js_source(out):
    jsonout = "\'use strict\';\n\n"
    jsonout += "/**@type {{[k: string]: {learnset: {[k: string]: MoveSource[]}}}} */\n"
    jsonout += "let BattleLearnsets = {\n"
    for k, v in out.items():
        jsonout += "\t" + k + ": {"
        for ki, vi in v.items():
            jsonout += ki + ": " + "{"
            for kj, vj in vi.items():
                jsonout += "\n\t\t" + kj + ": " + str(vj) + ", "
            jsonout += "\n\t}"
        jsonout += "},\n"
    jsonout += "};\t\t"
    jsonout += "exports.BattleLearnsets = BattleLearnsets;"
    return jsonout

def convert_format_js_source(out):
    jsonout = "\'use strict\';\n\n"
    jsonout += "/**@type {{[k: string]: ModdedTemplateFormatsData}} */\n"
    jsonout += "let BattleFormatsData = {\n"    
    for i in out:
        jsonout += "\t" + i + ": {\n"
        jsonout += "\t\ttier: \"OU\",\n"
        jsonout += "\t},\n"
    jsonout += "};\n\n"
    jsonout += "exports.BattleFormatsData = BattleFormatsData;"
    return jsonout

def extract_delta_list():
    r = requests.get("https://wiki.p-insurgence.com/index.php?title=Delta_Pokémon&action=raw")
    regex = "{{rdex\|(.*?)(?=}})"
    l = []
    for i in re.findall(regex, r.text):
        l.append(re.search("Delta (.*?)(?=\|)",i).group())
    return l

def extract_mega_list():
    r = requests.get("https://wiki.p-insurgence.com/index.php?title=Mega_Evolution&action=raw")
    regex = "===Unofficial===(.*)"
    data = re.search(regex,r.text.replace("",""),re.DOTALL).group().replace("\n","")
    pkm = re.findall("IP\|(.*?)}(.*?)Mega( +)Stone\|(.*?)}", data)
    out = []
    for i in range(len(pkm)):
        out.append((pkm[i][0], pkm[i][3]))
    return out

def get_mega_info(pkm):
    abilityregex = "abilitym( |)=( |)(.*?)(\n|\|)"
    r = requests.get(url_from_id(pkm[0]))
    print(pkm[0])
    ability = re.findall(abilityregex,r.text)[0][2]
    statsdata = re.findall("===Mega(.*?)===(.*?)}", r.text, re.DOTALL)[0][1].replace("\n","").replace(" ","").split("|")[1:]
    data = {'ability1':ability, 'baseStats':{},"name": pkm[0],"formeLetter": "M"}
    for i in statsdata:
        if i == "":
            continue
        split = i.split("=")
        if "type" in split[0]:
            data["type1"] = split[1]
            continue
        data[split[0]] = split[1]
    data["ndex"] = int(re.findall("ndex( |)=( |)(.*?)( |\||\n)", r.text)[0][2])
    return data
delta_pokemon = extract_delta_list()
mega_pokemon = extract_mega_list()

out_pokemon = {}
out_moveset = {}
dex_name_map = {}
out_pkmlist = []

for i in mega_pokemon:
    dex = format_pokemon(get_mega_info(i))
    name = dex['species'].lower().replace("(","").replace(")","")
    out_pokemon[name] = dex
    dex_name_map[dex['num']] = dex['species'].lower().replace(" ", "")
for i in delta_pokemon:
    url = url_from_id(i)
    print(url)
    text = requests.get(url).text
    dex = format_pokemon(extract_pokemon(text))
    learnset = format_moveset(extract_moveset(text))
    name = dex['species'].lower().replace("(","").replace(")","")
    out_pokemon[name] = dex
    out_moveset[name] = {"learnset":learnset}
    dex_name_map[dex['num']] = dex['species'].lower().replace(" ", "")
open("pokemon.json","w").write(json.dumps(out_pokemon))
out_pokemon = json.loads(open("pokemon.json","r").read())
open("learnset.json","w").write(json.dumps(out_moveset))
out_moveset = json.loads(open("learnset.json","r").read())
open("dex_name_map.json","w").write(json.dumps(dex_name_map))
dex_name_map = json.loads(open("dex_name_map.json","r").read())

for k in out_pokemon:
    out_pkmlist.append(k)

pathlib.Path("insurgence").mkdir(parents=True, exist_ok=True)

pathlib.Path("spritesout").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/bw").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/bw-shiny").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/bw-back").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/bw-back-shiny").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/xydex").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/xydex-shiny").mkdir(parents=True, exist_ok=True)
pathlib.Path("spritesout/deltaicons").mkdir(parents=True, exist_ok=True)

file = open("insurgence/pokedex.js","w").write(convert_pokemon_js_source(out_pokemon))
file = open("insurgence/learnsets.js","w").write(convert_moveset_js_source(out_moveset))
file = open("insurgence/formats-data.js","w").write(convert_format_js_source(out_pkmlist))


for f in glob.glob("sprites/*.png"):
    img = Image.open(f)
    filename = f.split("\\")[1]
    species = dex_name_map[filename[0:3]].replace("(","").replace(")","")
    # BW
    imgbw = img.resize((96,96))
    folder = "bw/"
    if "s" in filename:
        folder = "bw-shiny/"
    if "b" in filename:
        folder = "bw-back/"
    if "b" in filename and "s" in filename:
        folder = "bw-back-shiny/"
    if "f" in filename:
        species += "-f"
    if "_1" in filename:
        species += "-mega"
    imgbw.save("spritesout/" + folder + species + ".png", "PNG")
    # XY
    imgxy = img.resize((120,120))
    folder = "xydex/"
    if "s" in filename:
        folder = "xydex-shiny/"
    if "f" in filename:
        species += "-f"
    if "b" in filename:
        continue
    if "_1" in filename:
        species += "-mega"
    imgxy.save("spritesout/" + folder + species + ".png", "PNG")
    # Icons
    imgicon = img.resize((40,40))
    folder = "deltaicons/"
    if "s" in filename or "b" in filename or "f" in filename:
        continue
    imgicon.save("spritesout/" + folder + species + ".png", "PNG")