import re
import requests


hardurl = "https://wiki.p-insurgence.com/Delta_Bulbasaur_(Pokémon)"


def url_to_raw(url):
    return url.split("/")[-1]

def url_from_id(id):
    return "https://wiki.p-insurgence.com/index.php?title={}&action=raw".format(id)

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
                move.append(moveset[2].lower().replace(" ",""))
            elif(learnmethod == "tm6"):
                move.append("6M")
                move.append(moveset[2].lower().replace(" ",""))
            elif(learnmethod == "tutor6"):
                move.append("6T")
                move.append(moveset[1].lower().replace(" ",""))
            print(move)
            moves.append(move)



pokemon_url = url_from_id(url_to_raw(hardurl))

r = requests.get(pokemon_url)

extract_moveset(r.text)

