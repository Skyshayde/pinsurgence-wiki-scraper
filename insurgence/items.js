'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	poliwrathite: {
		id: "poliwrathite",
		name: "Poliwrathite ",
		spritenum: "575",
		megaStone: "Poliwrath-Mega",
		megaEvolves: "Poliwrath",
		number: "1111",
		gen: "6",
		desc: "If held by an Poliwrath, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	marowite: {
		id: "marowite",
		name: "Marowite",
		spritenum: "575",
		megaStone: "Marowak-Mega",
		megaEvolves: "Marowak",
		number: "1112",
		gen: "6",
		desc: "If held by an Marowak, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	eevite: {
		id: "eevite",
		name: "Eevite",
		spritenum: "575",
		megaStone: "Eevee-Mega",
		megaEvolves: "Eevee",
		number: "1113",
		gen: "6",
		desc: "If held by an Eevee, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	meganiumite: {
		id: "meganiumite",
		name: "Meganiumite",
		spritenum: "575",
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		number: "1114",
		gen: "6",
		desc: "If held by an Meganium, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	typhlosionite: {
		id: "typhlosionite",
		name: "Typhlosionite",
		spritenum: "575",
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		number: "1115",
		gen: "6",
		desc: "If held by an Typhlosion, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	feraligatite: {
		id: "feraligatite",
		name: "Feraligatite",
		spritenum: "575",
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		number: "1116",
		gen: "6",
		desc: "If held by an Feraligatr, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	sudowoodite: {
		id: "sudowoodite",
		name: "Sudowoodite ",
		spritenum: "575",
		megaStone: "Sudowoodo-Mega",
		megaEvolves: "Sudowoodo",
		number: "1117",
		gen: "6",
		desc: "If held by an Sudowoodo, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	politoedite: {
		id: "politoedite",
		name: "Politoedite",
		spritenum: "575",
		megaStone: "Politoed-Mega",
		megaEvolves: "Politoed",
		number: "1118",
		gen: "6",
		desc: "If held by an Politoed, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	sunflorite: {
		id: "sunflorite",
		name: "Sunflorite ",
		spritenum: "575",
		megaStone: "Sunflora-Mega",
		megaEvolves: "Sunflora",
		number: "1119",
		gen: "6",
		desc: "If held by an Sunflora, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	etigirafarigite: {
		id: "etigirafarigite",
		name: "Etigirafarigite",
		spritenum: "575",
		megaStone: "Girafarig-Mega",
		megaEvolves: "Girafarig",
		number: "1120",
		gen: "6",
		desc: "If held by an Girafarig, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	steelixitefire: {
		id: "steelixitefire",
		name: "Steelixite (Fire)",
		spritenum: "575",
		megaStone: "Steelix-Mega",
		megaEvolves: "Steelix",
		number: "1121",
		gen: "6",
		desc: "If held by an Steelix, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	magcargonite: {
		id: "magcargonite",
		name: "Magcargonite",
		spritenum: "575",
		megaStone: "Magcargo-Mega",
		megaEvolves: "Magcargo",
		number: "1122",
		gen: "6",
		desc: "If held by an Magcargo, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	donphanite: {
		id: "donphanite",
		name: "Donphanite",
		spritenum: "575",
		megaStone: "Donphan-Mega",
		megaEvolves: "Donphan",
		number: "1123",
		gen: "6",
		desc: "If held by an Donphan, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	miltankite: {
		id: "miltankite",
		name: "Miltankite",
		spritenum: "575",
		megaStone: "Miltank-Mega",
		megaEvolves: "Miltank",
		number: "1124",
		gen: "6",
		desc: "If held by an Miltank, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	shiftrite: {
		id: "shiftrite",
		name: "Shiftrite",
		spritenum: "575",
		megaStone: "Shiftry-Mega",
		megaEvolves: "Shiftry",
		number: "1125",
		gen: "6",
		desc: "If held by an Shiftry, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	flygonite: {
		id: "flygonite",
		name: "Flygonite",
		spritenum: "575",
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		number: "1126",
		gen: "6",
		desc: "If held by an Flygon, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	cacturnite: {
		id: "cacturnite",
		name: "Cacturnite",
		spritenum: "575",
		megaStone: "Cacturne-Mega",
		megaEvolves: "Cacturne",
		number: "1127",
		gen: "6",
		desc: "If held by an Cacturne, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	crawdite: {
		id: "crawdite",
		name: "Crawdite",
		spritenum: "575",
		megaStone: "Crawdaunt-Mega",
		megaEvolves: "Crawdaunt",
		number: "1128",
		gen: "6",
		desc: "If held by an Crawdaunt, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	milotite: {
		id: "milotite",
		name: "Milotite",
		spritenum: "575",
		megaStone: "Milotic-Mega",
		megaEvolves: "Milotic",
		number: "1129",
		gen: "6",
		desc: "If held by an Milotic, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	jirachite: {
		id: "jirachite",
		name: "Jirachite ",
		spritenum: "575",
		megaStone: "Jirachi-Mega",
		megaEvolves: "Jirachi",
		number: "1130",
		gen: "6",
		desc: "If held by an Jirachi, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	chatotite: {
		id: "chatotite",
		name: "Chatotite ",
		spritenum: "575",
		megaStone: "Chatot-Mega",
		megaEvolves: "Chatot",
		number: "1131",
		gen: "6",
		desc: "If held by an Chatot, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	zebstrikite: {
		id: "zebstrikite",
		name: "Zebstrikite",
		spritenum: "575",
		megaStone: "Zebstrika-Mega",
		megaEvolves: "Zebstrika",
		number: "1132",
		gen: "6",
		desc: "If held by an Zebstrika, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	zoronite: {
		id: "zoronite",
		name: "Zoronite",
		spritenum: "575",
		megaStone: "Zoroark-Mega",
		megaEvolves: "Zoroark",
		number: "1133",
		gen: "6",
		desc: "If held by an Zoroark, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	gothitite: {
		id: "gothitite",
		name: "Gothitite",
		spritenum: "575",
		megaStone: "Gothitelle-Mega",
		megaEvolves: "Gothitelle",
		number: "1134",
		gen: "6",
		desc: "If held by an Gothitelle, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	reuniclite: {
		id: "reuniclite",
		name: "Reuniclite",
		spritenum: "575",
		megaStone: "Reuniclus-Mega",
		megaEvolves: "Reuniclus",
		number: "1135",
		gen: "6",
		desc: "If held by an Reuniclus, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	cryogonite: {
		id: "cryogonite",
		name: "Cryogonite",
		spritenum: "575",
		megaStone: "Cryogonal-Mega",
		megaEvolves: "Cryogonal",
		number: "1136",
		gen: "6",
		desc: "If held by an Cryogonal, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	haxorite: {
		id: "haxorite",
		name: "Haxorite ",
		spritenum: "575",
		megaStone: "Haxorus-Mega",
		megaEvolves: "Haxorus",
		number: "1137",
		gen: "6",
		desc: "If held by an Haxorus, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	stunfiskite: {
		id: "stunfiskite",
		name: "Stunfiskite",
		spritenum: "575",
		megaStone: "Stunfisk-Mega",
		megaEvolves: "Stunfisk",
		number: "1138",
		gen: "6",
		desc: "If held by an Stunfisk, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	bisharpite: {
		id: "bisharpite",
		name: "Bisharpite",
		spritenum: "575",
		megaStone: "Bisharp-Mega",
		megaEvolves: "Bisharp",
		number: "1139",
		gen: "6",
		desc: "If held by an Bisharp, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	hydreigonite: {
		id: "hydreigonite",
		name: "Hydreigonite",
		spritenum: "575",
		megaStone: "Hydreigon-Mega",
		megaEvolves: "Hydreigon",
		number: "1140",
		gen: "6",
		desc: "If held by an Hydreigon, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltavenusaurite: {
		id: "deltavenusaurite",
		name: "Delta Venusaurite",
		spritenum: "575",
		megaStone: "Delta Venusaur-Mega",
		megaEvolves: "Delta Venusaur",
		number: "1141",
		gen: "6",
		desc: "If held by an Delta Venusaur, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltacharizardite: {
		id: "deltacharizardite",
		name: "Delta Charizardite",
		spritenum: "575",
		megaStone: "Delta Charizard-Mega",
		megaEvolves: "Delta Charizard",
		number: "1142",
		gen: "6",
		desc: "If held by an Delta Charizard, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltablastoisinite: {
		id: "deltablastoisinite",
		name: "Delta Blastoisinite",
		spritenum: "575",
		megaStone: "Delta Blastoise-Mega",
		megaEvolves: "Delta Blastoise",
		number: "1143",
		gen: "6",
		desc: "If held by an Delta Blastoise, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltabisharpite: {
		id: "deltabisharpite",
		name: "Delta Bisharpite",
		spritenum: "575",
		megaStone: "Delta Bisharp-Mega",
		megaEvolves: "Delta Bisharp",
		number: "1144",
		gen: "6",
		desc: "If held by an Delta Bisharp, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltagardevoirite: {
		id: "deltagardevoirite",
		name: "Delta Gardevoirite",
		spritenum: "575",
		megaStone: "Delta Gardevoir-Mega",
		megaEvolves: "Delta Gardevoir",
		number: "1145",
		gen: "6",
		desc: "If held by an Delta Gardevoir, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltagalladite: {
		id: "deltagalladite",
		name: "Delta Galladite",
		spritenum: "575",
		megaStone: "Delta Gallade-Mega",
		megaEvolves: "Delta Gallade",
		number: "1146",
		gen: "6",
		desc: "If held by an Delta Gallade, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltasunflorite: {
		id: "deltasunflorite",
		name: "Delta Sunflorite",
		spritenum: "575",
		megaStone: "Delta Sunflora-Mega",
		megaEvolves: "Delta Sunflora",
		number: "1147",
		gen: "6",
		desc: "If held by an Delta Sunflora, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltascizorite: {
		id: "deltascizorite",
		name: "Delta Scizorite",
		spritenum: "575",
		megaStone: "Delta Scizor-Mega",
		megaEvolves: "Delta Scizor",
		number: "1148",
		gen: "6",
		desc: "If held by an Delta Scizor, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltaglalitite: {
		id: "deltaglalitite",
		name: "Delta Glalitite ",
		spritenum: "575",
		megaStone: "Delta Glalie-Mega",
		megaEvolves: "Delta Glalie",
		number: "1149",
		gen: "6",
		desc: "If held by an Delta Glalie, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltafroslassite: {
		id: "deltafroslassite",
		name: "Delta Froslassite",
		spritenum: "575",
		megaStone: "Delta Froslass-Mega",
		megaEvolves: "Delta Froslass",
		number: "1150",
		gen: "6",
		desc: "If held by an Delta Froslass, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltatyphlosionite: {
		id: "deltatyphlosionite",
		name: "Delta Typhlosionite",
		spritenum: "575",
		megaStone: "Delta Typhlosion-Mega",
		megaEvolves: "Delta Typhlosion",
		number: "1151",
		gen: "6",
		desc: "If held by an Delta Typhlosion, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltapidgeotite: {
		id: "deltapidgeotite",
		name: "Delta Pidgeotite",
		spritenum: "575",
		megaStone: "Delta Pidgeot-Mega",
		megaEvolves: "Delta Pidgeot",
		number: "1152",
		gen: "6",
		desc: "If held by an Delta Pidgeot, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltaetigirafarigite: {
		id: "deltaetigirafarigite",
		name: "Delta Etigirafarigite",
		spritenum: "575",
		megaStone: "Delta Girafarig-Mega",
		megaEvolves: "Delta Girafarig",
		number: "1153",
		gen: "6",
		desc: "If held by an Delta Girafarig, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltasablenite: {
		id: "deltasablenite",
		name: "Delta Sablenite",
		spritenum: "575",
		megaStone: "Delta Sableye-Mega",
		megaEvolves: "Delta Sableye",
		number: "1154",
		gen: "6",
		desc: "If held by an Delta Sableye, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltamawilite: {
		id: "deltamawilite",
		name: "Delta Mawilite",
		spritenum: "575",
		megaStone: "Delta Mawile-Mega",
		megaEvolves: "Delta Mawile",
		number: "1155",
		gen: "6",
		desc: "If held by an Delta Mawile, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltamedichamite: {
		id: "deltamedichamite",
		name: "Delta Medichamite",
		spritenum: "575",
		megaStone: "Delta Medicham-Mega",
		megaEvolves: "Delta Medicham",
		number: "1156",
		gen: "6",
		desc: "If held by an Delta Medicham, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltacameruptite: {
		id: "deltacameruptite",
		name: "Delta Cameruptite",
		spritenum: "575",
		megaStone: "Delta Camerupt-Mega",
		megaEvolves: "Delta Camerupt",
		number: "1157",
		gen: "6",
		desc: "If held by an Delta Camerupt, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltamilotite: {
		id: "deltamilotite",
		name: "Delta Milotite",
		spritenum: "575",
		megaStone: "Delta Milotic-Mega",
		megaEvolves: "Delta Milotic",
		number: "1158",
		gen: "6",
		desc: "If held by an Delta Milotic, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltametagrossitespider: {
		id: "deltametagrossitespider",
		name: "Delta Metagrossite (Spider) ",
		spritenum: "575",
		megaStone: "Delta Metagross (Spider)-Mega",
		megaEvolves: "Delta Metagross (Spider)",
		number: "1159",
		gen: "6",
		desc: "If held by an Delta Metagross (Spider), this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltametagrossiteruin: {
		id: "deltametagrossiteruin",
		name: "Delta Metagrossite (Ruin) ",
		spritenum: "575",
		megaStone: "Delta Metagross (Ruin)-Mega",
		megaEvolves: "Delta Metagross (Ruin)",
		number: "1160",
		gen: "6",
		desc: "If held by an Delta Metagross (Ruin), this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltalopunnite: {
		id: "deltalopunnite",
		name: "Delta Lopunnite ",
		spritenum: "575",
		megaStone: "Delta Lopunny-Mega",
		megaEvolves: "Delta Lopunny",
		number: "1161",
		gen: "6",
		desc: "If held by an Delta Lopunny, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	deltalucarionite: {
		id: "deltalucarionite",
		name: "Delta Lucarionite ",
		spritenum: "575",
		megaStone: "Delta Lucario-Mega",
		megaEvolves: "Delta Lucario",
		number: "1162",
		gen: "6",
		desc: "If held by an Delta Lucario, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
};

exports.BattleItems = BattleItems;