import re
import requests


hardurl = "https://wiki.p-insurgence.com/Delta_Bulbasaur_(Pokémon)"


def url_to_raw(url):
    return url.split("/")[-1]

def url_from_id(id):
    return "https://wiki.p-insurgence.com/index.php?title={}&action=raw".format(id)

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
                movename = moveset[2].lower().replace(" ","")
                move.append(movename)
            elif(learnmethod == "tm6"):
                move.append("6M")
                movename = moveset[2].lower().replace(" ","")
                move.append(movename)
            elif(learnmethod == "tutor6"):
                move.append("6T")
                movename = moveset[1].lower().replace(" ","")
                move.append(movename)
            if(not(move_from_insurgence(movename))):
                print(move)
                moves.append(move)




pokemon_url = url_from_id(url_to_raw(hardurl))

r = requests.get(pokemon_url)

extract_moveset(r.text)

