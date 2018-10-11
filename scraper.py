import re
import requests


hardurl = "https://wiki.p-insurgence.com/Delta_Bulbasaur_(Pokémon)"


def url_to_raw(url):
    return url.split("/")[-1]

def url_from_id(id):
    return "https://wiki.p-insurgence.com/index.php?title={}__(Pokémon)&action=raw".format(id.replace(" ","_"))

def move_from_insurgence(move):
    # this is a mistake and I am sorry.  maybe i'll have it fetch moves in the future or something
    movelist = ["achillesheel","ancientroar","corrode","crystalrush","darkmatter","dracojet","dragonify","drakonvoice","jetstream","livewire","lunarcannon","medusaray","morph","nanorepair","newmoon","permafrost","retrograde","wildfire","wormhole","zombiestrike"]
    return move in movelist

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
        isplit = i.replace(" ","").split("=")
        dex[isplit[0]] = isplit[1]
    regex = "(?i)Basestats==(.*?){{(.*?)Stats(.*?)(?=}})"
    card = re.search(regex,text.replace("\n","").replace("\r","").replace(" ","")).group().split("|")
    card.pop(0)
    for i in card:
        if i == '':
            continue
        isplit = i.replace(" ","").split("=")
        dex[isplit[0]] = isplit[1]
    print(dex['name'])
    return dex

def format_pokemon(i):
    newdex = []
    newentry = {}
    newentry['num'] = i['ndex']
    newentry['species'] = i['name'].replace(" ", "")
    newentry['types'] = [i['type1']]
    if("type2" in i):
        newentry['types'].append(i['type2'])
    newentry['genderRatio'] = {"M": 0.50, "F": 0.50}
    newentry['baseStats'] = {"hp": i['HP'], "atk": i['Attack'], "def": i['Defense'], "spa": i['SpAtk'], "spd": i['SpDef'], "spe": i['Speed']}
    newentry['abilities'] = {0: i['ability1']}
    if("ability2" in i):
        newentry['abilities'][1] = i['ability2']
    if("abilityd" in i):
        newentry['abilities']['H'] = i['abilityd']
    newentry['heightm'] = i['height-m']
    newentry['weightkg'] = i['weight-kg']
    newentry['color'] = "Green"
    newentry['eggGroups'] = ["Undiscovered"]

    return newentry

def format_moveset(moveset):
    learnset = {}
    for i in moveset:
        learnset[i[1]] = [i[0]]
    return learnset

def extract_pokemon_list():
    r = requests.get("https://wiki.p-insurgence.com/index.php?title=Delta_Pokémon&action=raw")
    regex = "{{rdex\|(.*?)(?=}})"
    l = []
    for i in re.findall(regex, r.text):
        l.append(re.search("Delta (.*?)(?=\|)",i).group())
    return l

pokemon = extract_pokemon_list()
out = {}
for i in pokemon:
    url = url_from_id(i)
    # url = "https://wiki.p-insurgence.com/index.php?title=Delta_Torchic__(Pokémon)&action=raw"
    print(url)
    dex = format_pokemon(extract_pokemon(requests.get(url).text))
    out[dex['species'].lower()] = dex
