'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	"poliwrathite ": {
		id: "poliwrathite ",
		name: "Poliwrathite ",
		spritenum: "575",
		megaStone: "Poliwrath",
		megaEvolves: "Poliwrath",
		number: "1111",
		gen: "6",
		desc: "If held by an Poliwrath, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"marowite": {
		id: "marowite",
		name: "Marowite",
		spritenum: "575",
		megaStone: "Marowak",
		megaEvolves: "Marowak",
		number: "1111",
		gen: "6",
		desc: "If held by an Marowak, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"eevite": {
		id: "eevite",
		name: "Eevite",
		spritenum: "575",
		megaStone: "Eevee",
		megaEvolves: "Eevee",
		number: "1111",
		gen: "6",
		desc: "If held by an Eevee, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"meganiumite": {
		id: "meganiumite",
		name: "Meganiumite",
		spritenum: "575",
		megaStone: "Meganium",
		megaEvolves: "Meganium",
		number: "1111",
		gen: "6",
		desc: "If held by an Meganium, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"typhlosionite": {
		id: "typhlosionite",
		name: "Typhlosionite",
		spritenum: "575",
		megaStone: "Typhlosion",
		megaEvolves: "Typhlosion",
		number: "1111",
		gen: "6",
		desc: "If held by an Typhlosion, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"feraligatite": {
		id: "feraligatite",
		name: "Feraligatite",
		spritenum: "575",
		megaStone: "Feraligatr",
		megaEvolves: "Feraligatr",
		number: "1111",
		gen: "6",
		desc: "If held by an Feraligatr, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"sudowoodite ": {
		id: "sudowoodite ",
		name: "Sudowoodite ",
		spritenum: "575",
		megaStone: "Sudowoodo",
		megaEvolves: "Sudowoodo",
		number: "1111",
		gen: "6",
		desc: "If held by an Sudowoodo, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"politoedite": {
		id: "politoedite",
		name: "Politoedite",
		spritenum: "575",
		megaStone: "Politoed",
		megaEvolves: "Politoed",
		number: "1111",
		gen: "6",
		desc: "If held by an Politoed, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"sunflorite ": {
		id: "sunflorite ",
		name: "Sunflorite ",
		spritenum: "575",
		megaStone: "Sunflora",
		megaEvolves: "Sunflora",
		number: "1111",
		gen: "6",
		desc: "If held by an Sunflora, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"etigirafarigite": {
		id: "etigirafarigite",
		name: "Etigirafarigite",
		spritenum: "575",
		megaStone: "Girafarig",
		megaEvolves: "Girafarig",
		number: "1111",
		gen: "6",
		desc: "If held by an Girafarig, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"steelixite (fire)": {
		id: "steelixite (fire)",
		name: "Steelixite (Fire)",
		spritenum: "575",
		megaStone: "Steelix",
		megaEvolves: "Steelix",
		number: "1111",
		gen: "6",
		desc: "If held by an Steelix, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"magcargonite": {
		id: "magcargonite",
		name: "Magcargonite",
		spritenum: "575",
		megaStone: "Magcargo",
		megaEvolves: "Magcargo",
		number: "1111",
		gen: "6",
		desc: "If held by an Magcargo, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"donphanite": {
		id: "donphanite",
		name: "Donphanite",
		spritenum: "575",
		megaStone: "Donphan",
		megaEvolves: "Donphan",
		number: "1111",
		gen: "6",
		desc: "If held by an Donphan, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"miltankite": {
		id: "miltankite",
		name: "Miltankite",
		spritenum: "575",
		megaStone: "Miltank",
		megaEvolves: "Miltank",
		number: "1111",
		gen: "6",
		desc: "If held by an Miltank, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"shiftrite": {
		id: "shiftrite",
		name: "Shiftrite",
		spritenum: "575",
		megaStone: "Shiftry",
		megaEvolves: "Shiftry",
		number: "1111",
		gen: "6",
		desc: "If held by an Shiftry, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"flygonite": {
		id: "flygonite",
		name: "Flygonite",
		spritenum: "575",
		megaStone: "Flygon",
		megaEvolves: "Flygon",
		number: "1111",
		gen: "6",
		desc: "If held by an Flygon, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"cacturnite": {
		id: "cacturnite",
		name: "Cacturnite",
		spritenum: "575",
		megaStone: "Cacturne",
		megaEvolves: "Cacturne",
		number: "1111",
		gen: "6",
		desc: "If held by an Cacturne, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"crawdite": {
		id: "crawdite",
		name: "Crawdite",
		spritenum: "575",
		megaStone: "Crawdaunt",
		megaEvolves: "Crawdaunt",
		number: "1111",
		gen: "6",
		desc: "If held by an Crawdaunt, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"milotite": {
		id: "milotite",
		name: "Milotite",
		spritenum: "575",
		megaStone: "Milotic",
		megaEvolves: "Milotic",
		number: "1111",
		gen: "6",
		desc: "If held by an Milotic, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"jirachite ": {
		id: "jirachite ",
		name: "Jirachite ",
		spritenum: "575",
		megaStone: "Jirachi",
		megaEvolves: "Jirachi",
		number: "1111",
		gen: "6",
		desc: "If held by an Jirachi, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"chatotite ": {
		id: "chatotite ",
		name: "Chatotite ",
		spritenum: "575",
		megaStone: "Chatot",
		megaEvolves: "Chatot",
		number: "1111",
		gen: "6",
		desc: "If held by an Chatot, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"zebstrikite": {
		id: "zebstrikite",
		name: "Zebstrikite",
		spritenum: "575",
		megaStone: "Zebstrika",
		megaEvolves: "Zebstrika",
		number: "1111",
		gen: "6",
		desc: "If held by an Zebstrika, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"zoronite": {
		id: "zoronite",
		name: "Zoronite",
		spritenum: "575",
		megaStone: "Zoroark",
		megaEvolves: "Zoroark",
		number: "1111",
		gen: "6",
		desc: "If held by an Zoroark, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"gothitite": {
		id: "gothitite",
		name: "Gothitite",
		spritenum: "575",
		megaStone: "Gothitelle",
		megaEvolves: "Gothitelle",
		number: "1111",
		gen: "6",
		desc: "If held by an Gothitelle, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"reuniclite": {
		id: "reuniclite",
		name: "Reuniclite",
		spritenum: "575",
		megaStone: "Reuniclus",
		megaEvolves: "Reuniclus",
		number: "1111",
		gen: "6",
		desc: "If held by an Reuniclus, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"cryogonite": {
		id: "cryogonite",
		name: "Cryogonite",
		spritenum: "575",
		megaStone: "Cryogonal",
		megaEvolves: "Cryogonal",
		number: "1111",
		gen: "6",
		desc: "If held by an Cryogonal, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"haxorite ": {
		id: "haxorite ",
		name: "Haxorite ",
		spritenum: "575",
		megaStone: "Haxorus",
		megaEvolves: "Haxorus",
		number: "1111",
		gen: "6",
		desc: "If held by an Haxorus, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"stunfiskite": {
		id: "stunfiskite",
		name: "Stunfiskite",
		spritenum: "575",
		megaStone: "Stunfisk",
		megaEvolves: "Stunfisk",
		number: "1111",
		gen: "6",
		desc: "If held by an Stunfisk, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"bisharpite": {
		id: "bisharpite",
		name: "Bisharpite",
		spritenum: "575",
		megaStone: "Bisharp",
		megaEvolves: "Bisharp",
		number: "1111",
		gen: "6",
		desc: "If held by an Bisharp, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"hydreigonite": {
		id: "hydreigonite",
		name: "Hydreigonite",
		spritenum: "575",
		megaStone: "Hydreigon",
		megaEvolves: "Hydreigon",
		number: "1111",
		gen: "6",
		desc: "If held by an Hydreigon, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta venusaurite": {
		id: "delta venusaurite",
		name: "Delta Venusaurite",
		spritenum: "575",
		megaStone: "Delta Venusaur",
		megaEvolves: "Delta Venusaur",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Venusaur, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta charizardite": {
		id: "delta charizardite",
		name: "Delta Charizardite",
		spritenum: "575",
		megaStone: "Delta Charizard",
		megaEvolves: "Delta Charizard",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Charizard, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta blastoisinite": {
		id: "delta blastoisinite",
		name: "Delta Blastoisinite",
		spritenum: "575",
		megaStone: "Delta Blastoise",
		megaEvolves: "Delta Blastoise",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Blastoise, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta bisharpite": {
		id: "delta bisharpite",
		name: "Delta Bisharpite",
		spritenum: "575",
		megaStone: "Delta Bisharp",
		megaEvolves: "Delta Bisharp",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Bisharp, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta gardevoirite": {
		id: "delta gardevoirite",
		name: "Delta Gardevoirite",
		spritenum: "575",
		megaStone: "Delta Gardevoir",
		megaEvolves: "Delta Gardevoir",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Gardevoir, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta galladite": {
		id: "delta galladite",
		name: "Delta Galladite",
		spritenum: "575",
		megaStone: "Delta Gallade",
		megaEvolves: "Delta Gallade",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Gallade, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta sunflorite": {
		id: "delta sunflorite",
		name: "Delta Sunflorite",
		spritenum: "575",
		megaStone: "Delta Sunflora",
		megaEvolves: "Delta Sunflora",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Sunflora, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta scizorite": {
		id: "delta scizorite",
		name: "Delta Scizorite",
		spritenum: "575",
		megaStone: "Delta Scizor",
		megaEvolves: "Delta Scizor",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Scizor, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta glalitite ": {
		id: "delta glalitite ",
		name: "Delta Glalitite ",
		spritenum: "575",
		megaStone: "Delta Glalie",
		megaEvolves: "Delta Glalie",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Glalie, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta froslassite": {
		id: "delta froslassite",
		name: "Delta Froslassite",
		spritenum: "575",
		megaStone: "Delta Froslass",
		megaEvolves: "Delta Froslass",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Froslass, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta typhlosionite": {
		id: "delta typhlosionite",
		name: "Delta Typhlosionite",
		spritenum: "575",
		megaStone: "Delta Typhlosion",
		megaEvolves: "Delta Typhlosion",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Typhlosion, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta pidgeotite": {
		id: "delta pidgeotite",
		name: "Delta Pidgeotite",
		spritenum: "575",
		megaStone: "Delta Pidgeot",
		megaEvolves: "Delta Pidgeot",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Pidgeot, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta etigirafarigite": {
		id: "delta etigirafarigite",
		name: "Delta Etigirafarigite",
		spritenum: "575",
		megaStone: "Delta Girafarig",
		megaEvolves: "Delta Girafarig",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Girafarig, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta sablenite": {
		id: "delta sablenite",
		name: "Delta Sablenite",
		spritenum: "575",
		megaStone: "Delta Sableye",
		megaEvolves: "Delta Sableye",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Sableye, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta mawilite": {
		id: "delta mawilite",
		name: "Delta Mawilite",
		spritenum: "575",
		megaStone: "Delta Mawile",
		megaEvolves: "Delta Mawile",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Mawile, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta medichamite": {
		id: "delta medichamite",
		name: "Delta Medichamite",
		spritenum: "575",
		megaStone: "Delta Medicham",
		megaEvolves: "Delta Medicham",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Medicham, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta cameruptite": {
		id: "delta cameruptite",
		name: "Delta Cameruptite",
		spritenum: "575",
		megaStone: "Delta Camerupt",
		megaEvolves: "Delta Camerupt",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Camerupt, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta milotite": {
		id: "delta milotite",
		name: "Delta Milotite",
		spritenum: "575",
		megaStone: "Delta Milotic",
		megaEvolves: "Delta Milotic",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Milotic, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta metagrossite (spider) ": {
		id: "delta metagrossite (spider) ",
		name: "Delta Metagrossite (Spider) ",
		spritenum: "575",
		megaStone: "Delta Metagross (Spider)",
		megaEvolves: "Delta Metagross (Spider)",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Metagross (Spider), this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta metagrossite (ruin) ": {
		id: "delta metagrossite (ruin) ",
		name: "Delta Metagrossite (Ruin) ",
		spritenum: "575",
		megaStone: "Delta Metagross (Ruin)",
		megaEvolves: "Delta Metagross (Ruin)",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Metagross (Ruin), this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta lopunnite ": {
		id: "delta lopunnite ",
		name: "Delta Lopunnite ",
		spritenum: "575",
		megaStone: "Delta Lopunny",
		megaEvolves: "Delta Lopunny",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Lopunny, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
	"delta lucarionite ": {
		id: "delta lucarionite ",
		name: "Delta Lucarionite ",
		spritenum: "575",
		megaStone: "Delta Lucario",
		megaEvolves: "Delta Lucario",
		number: "1111",
		gen: "6",
		desc: "If held by an Delta Lucario, this item allows it to Mega Evolve in battle.",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
	},
};

exports.BattleItems = BattleItems;