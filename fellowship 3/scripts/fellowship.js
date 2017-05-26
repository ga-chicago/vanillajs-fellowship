console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


//Part 1
var makeMiddleEarth = function(){

var middleEarth = document.createElement("section");
middleEarth.id = "middle-earth";

var theShire = document.createElement("article");
var shireh1 = document.createElement("h1");
var shiretext = document.createTextNode(lands[0]);
shireh1.appendChild(shiretext);
theShire.appendChild(shireh1);
middleEarth.appendChild(theShire);


var rivendell = document.createElement("article");
var rivendellh1 = document.createElement("h1");
var rivendelltext = document.createTextNode(lands[1]);
rivendellh1.appendChild(rivendelltext);
rivendell.appendChild(rivendellh1);
middleEarth.appendChild(rivendell);


var mordor = document.createElement("article");
var mordorh1 = document.createElement("h1");
var mordortext = document.createTextNode(lands[2]);
mordorh1.appendChild(mordortext);
mordor.appendChild(mordorh1);
middleEarth.appendChild(mordor);

body.appendChild(middleEarth);

};

makeMiddleEarth();

//Part 2
var makeHobbits = function(){

	var hobbitsList = document.createElement("ul");

	var frodo = document.createElement('li');
	frodo.className= "hobbit";
	var frodotext = document.createTextNode(hobbits[0]);
	frodo.appendChild(frodotext);
	hobbitsList.appendChild(frodo);

	var sam = document.createElement("li");
	sam.className = "hobbit";
	var samtext = document.createTextNode(hobbits[1]);
	sam.appendChild(samtext);
	hobbitsList.appendChild(sam);

	var merry = document.createElement("li");
	merry.className = "hobbit";
	var merrytext = document.createTextNode(hobbits[2]);
	merry.appendChild(merrytext);
	hobbitsList.appendChild(merry);

	var pip = document.createElement("li");
	pip.className= "hobbit";
	var piptext = document.createTextNode(hobbits[3]);
	pip.appendChild(piptext);
	hobbitsList.appendChild(pip);

	var list = document.getElementsByTagName("article")[0];
	list.appendChild(hobbitsList);
}

makeHobbits();

//Part 3
var keepItSecretKeepItSafe = function (){

	var ring = document.createElement("div");
	ring.id = "the-ring";
	ring.className = "magic-imbued-jewelry";
	var frodo = document.getElementsByTagName("li")[0];
	frodo.appendChild(ring);
}

keepItSecretKeepItSafe();

//Part 4
var makeBuddies = function (){

	var buddiesAside = document.createElement("aside");
	var buddiesList = document.createElement("ul");

	var gandalf = document.createElement("li");
	var gandalfText = document.createTextNode(buddies[0]);
	gandalf.appendChild(gandalfText);
	buddiesList.appendChild(gandalf);

	var legolas = document.createElement("li");
	var legolasText = document.createTextNode(buddies[1]);
	legolas.appendChild(legolasText);
	buddiesList.appendChild(legolas);

	var gimli = document.createElement("li");
	var gimliText = document.createTextNode(buddies[2]);
	gimli.appendChild(gimliText);
	buddiesList.appendChild(gimli);
	
	var strider = document.createElement("li");
	var striderText = document.createTextNode(buddies[3]);
	strider.appendChild(striderText);
	buddiesList.appendChild(strider);	

	var boromir = document.createElement("li");
	var boromirText = document.createTextNode(buddies[4]);
	boromir.appendChild(boromirText);
	buddiesList.appendChild(boromir);

	buddiesAside.appendChild(buddiesList);

	var riven = document.getElementsByTagName("article")[1];
	riven.appendChild(buddiesAside);
}
makeBuddies();

//Part 5







