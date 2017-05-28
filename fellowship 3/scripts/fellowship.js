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
var makeMiddleEarth = function(el1, el2){

var middleEarth = document.createElement("section");
middleEarth.id = "middle-earth";

for (var i = 0; i < lands.length; i++) {
	var articleElem = document.createElement(el1);
	var h1Elem = document.createElement(el2);
	var text = lands[i];
	var h1Text = document.createTextNode(text);
	h1Elem.appendChild(h1Text);
	articleElem.appendChild(h1Elem);
	middleEarth.appendChild(articleElem);
	}

	body.appendChild(middleEarth);

};

makeMiddleEarth("article", "h1");


//Part 2

var makeHobbits = function(elName){

    var hobbitsList = document.createElement("ul");

        for (var i = 0; i < hobbits.length; i++) {
            var el = document.createElement(elName);
            el.className = "hobbit";
            var text = hobbits[i];
            var elText = document.createTextNode(text);
            el.appendChild(elText);
            hobbitsList.appendChild(el);
            }

        var list = document.getElementsByTagName("article")[0];
        list.append(hobbitsList);
}
makeHobbits("li");


//Part 3
// var keepItSecretKeepItSafe = function (){

// 	var ring = document.createElement("div");
// 	ring.id = "the-ring";
// 	ring.className = "magic-imbued-jewelry";
// 	var frodo = document.getElementsByTagName("li")[0];
// 	frodo.appendChild(ring);
// }

// keepItSecretKeepItSafe();

// //Part 4
// var makeBuddies = function (){

// 	var buddiesAside = document.createElement("aside");
// 	var buddiesList = document.createElement("ul");

// 	var gandalf = document.createElement("li");
// 	var gandalfText = document.createTextNode(buddies[0]);
// 	gandalf.appendChild(gandalfText);
// 	buddiesList.appendChild(gandalf);

// 	var legolas = document.createElement("li");
// 	var legolasText = document.createTextNode(buddies[1]);
// 	legolas.appendChild(legolasText);
// 	buddiesList.appendChild(legolas);

// 	var gimli = document.createElement("li");
// 	var gimliText = document.createTextNode(buddies[2]);
// 	gimli.appendChild(gimliText);
// 	buddiesList.appendChild(gimli);
	
// 	var strider = document.createElement("li");
// 	var striderText = document.createTextNode(buddies[3]);
// 	strider.appendChild(striderText);
// 	buddiesList.appendChild(strider);	

// 	var boromir = document.createElement("li");
// 	var boromirText = document.createTextNode(buddies[4]);
// 	boromir.appendChild(boromirText);
// 	buddiesList.appendChild(boromir);

// 	buddiesAside.appendChild(buddiesList);

// 	var riven = document.getElementsByTagName("article")[1];
// 	riven.appendChild(buddiesAside);
// }
// makeBuddies();

// //Part 5
// var beautifulStranger = function () {
// 	buddies[3] = "Aragorn";
// 	var getStrider = document.querySelectorAll("aside ul li")[3];
// 	getStrider.remove();
// 	getBuddiesList = document.getElementsByTagName("ul")[1];
// 	var Aragorn = document.createElement("li");
// 	var Aragorntext = document.createTextNode(buddies[3]);
// 	Aragorn.appendChild(Aragorntext);
// 	getBuddiesList.appendChild(Aragorn);

// }
// beautifulStranger();

// // Part 6
// var leaveTheShire = function (){

// // //document.getElementById('wrapperA').appendChild(document.getElementById('superWidget'));
// // //deleting the list from The Shire	
// var removeFromShire = document.getElementsByTagName("ul")[0];
// removeFromShire.remove();	

// var makeHobbits = function(){

// 	var hobbitsList = document.createElement("ul");

// 	var frodo = document.createElement('li');
// 	frodo.className= "hobbit";
// 	var frodotext = document.createTextNode(hobbits[0]);
// 	frodo.appendChild(frodotext);
// 	hobbitsList.appendChild(frodo);
// 	var riven = document.getElementsByTagName("article")[1];
// 	riven.appendChild(hobbitsList);


// 	var sam = document.createElement("li");
// 	sam.className = "hobbit";
// 	var samtext = document.createTextNode(hobbits[1]);
// 	sam.appendChild(samtext);
// 	hobbitsList.appendChild(sam);
// 	var riven = document.getElementsByTagName("article")[1];
// 	riven.appendChild(hobbitsList);

// 	var merry = document.createElement("li");
// 	merry.className = "hobbit";
// 	var merrytext = document.createTextNode(hobbits[2]);
// 	merry.appendChild(merrytext);
// 	hobbitsList.appendChild(merry);
// 	var riven = document.getElementsByTagName("article")[1];
// 	riven.appendChild(hobbitsList);

// 	var pip = document.createElement("li");
// 	pip.className= "hobbit";
// 	var piptext = document.createTextNode(hobbits[3]);
// 	pip.appendChild(piptext);
// 	hobbitsList.appendChild(pip);
// 	var riven = document.getElementsByTagName("article")[1];
// 	riven.appendChild(hobbitsList);	
// 	}

// 		makeHobbits();

// 	var keepItSecretKeepItSafe = function (){

// 	var ring = document.createElement("div");
// 	ring.id = "the-ring";
// 	ring.className = "magic-imbued-jewelry";
// 	var frodo = document.getElementsByTagName("li")[5];
// 	frodo.appendChild(ring);
// }

// keepItSecretKeepItSafe();

// }
// leaveTheShire();

//Part 7

// var forgeTheFellowship = function(){

// 	var riven = document.getElementsByTagName("article")[1];
// 	var fellow = document.createElement("div");
// 	riven.appendChild(fellow);


// 	var getEverybody = document.querySelectorAll("ul");
// 	var fellowDiv = document.querySelectorAll("div")[2];
// 	fellowDiv.appendChild(getEverybody);
// }
// forgeTheFellowship();





















