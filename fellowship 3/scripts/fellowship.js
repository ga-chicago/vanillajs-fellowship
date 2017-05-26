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



// Part 1

   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`

var makeMiddleEarth = function () {
	middleEarth = document.createElement("section");
	middleEarth.id = "middle-earth";

	for (i = 0; i < lands.length; i++) {
		newLand = document.createElement("article");
		h1 = document.createElement("h1");
		h1.textContent = lands[i];
		newLand.appendChild(h1);
		middleEarth.appendChild(newLand);
	};
	body.appendChild(middleEarth);
};

makeMiddleEarth();



// Part 2

   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

var theShire = document.getElementsByTagName("article")[0];
var listOfHobbits = document.createElement("ul");
var makeHobbits = function () {

	for (i = 0; i < hobbits.length; i++) {
		var eachHobbit = document.createElement("li");
		eachHobbit.className = "hobbit";
		eachHobbit.textContent = hobbits[i];
		listOfHobbits.appendChild(eachHobbit);
	}
	theShire.appendChild(listOfHobbits);
};

makeHobbits();



// Part 3

   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`

var Frodo = document.getElementsByClassName("hobbit")[0];
var theRing = document.createElement("div");

var keepItSecretKeepItSafe = function () {
	theRing.id = "the-ring";
	theRing.className = "magic-imbued-jewelry";
	Frodo.appendChild(theRing);
};

keepItSecretKeepItSafe();



// Part 4

   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

var Rivendell = document.getElementsByTagName("article")[1];

var makeBuddies = function () {
	var aside = document.createElement("aside");
	var listOfBuddies = document.createElement("ul");

	for (i = 0; i < buddies.length; i++) {
		var eachBuddy = document.createElement("li");
		eachBuddy.textContent = buddies[i];
		listOfBuddies.appendChild(eachBuddy);
	};
	aside.appendChild(listOfBuddies);
	Rivendell.appendChild(aside);
};

makeBuddies();



// Part 5

   // change the `'Strider'` text to `'Aragorn'`

var beautifulStranger = function () {
	document.querySelectorAll("aside ul li")[3].textContent = "Aragorn";
};

beautifulStranger();



// Part 6

   // assemble the `hobbits` and move them to `rivendell`

var leaveTheShire = function () {
	Rivendell.appendChild(listOfHobbits);
};

leaveTheShire();



// Part 7

   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they have joined your party

var buddiesAndFriends = document.querySelectorAll("li");
var theFellowship = document.createElement("div");
var ulForTheFellowship = document.createElement("ul");

var forgeTheFellowShip = function () {
	theFellowship.id = "the-fellowship";
	for (i = 0; i < buddiesAndFriends.length; i++) {
		ulForTheFellowship.appendChild(buddiesAndFriends[i]);
		alert(buddiesAndFriends[i].innerText + " has joined the party");
	};
	theFellowship.appendChild(ulForTheFellowship);
	Rivendell.appendChild(theFellowship);
};

forgeTheFellowShip();



// Part 8

   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the background 'white', add a grey border

var theBalrog = function () {
	var gandalf = buddiesAndFriends[0];
	gandalf.textContent = "Gandalf the White";
	gandalf.style.backgroundColor = "white";
	gandalf.style.border = "5px solid grey"
};

theBalrog();



// Part 9

   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship

var hornOfGondor = function () {
	alert("The horn of Gondor has been blown! :(");
	var boromir = buddiesAndFriends[4];
	ulForTheFellowship.removeChild(boromir);
};

hornOfGondor();



// Part 10

   // take `Frodo` and `Sam` out of the fellowship and move them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`

var ulForMordor = document.createElement("ul");
var sam = document.getElementsByClassName("hobbit")[1];
var Mordor = document.getElementsByTagName("article")[2];
var mountDoom = document.createElement("div");

var itsDangerousToGoAlone = function () {
	ulForMordor.appendChild(Frodo);
	ulForMordor.appendChild(sam);
	Mordor.appendChild(ulForMordor);
	mountDoom.id = "mount-doom";
	Mordor.appendChild(mountDoom);
};

itsDangerousToGoAlone();



// Part 11

   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom

var gollum = document.createElement("div");

var weWantsIt = function () {
	gollum.id = "gollum";
	gollum.appendChild(theRing);
	mountDoom.appendChild(gollum);
};

weWantsIt();



// Part 12

   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`

var thereAndBackAgain = function () {
	gollum.removeChild(theRing);
	mountDoom.removeChild(gollum);
	var hobbitsGoHome = document.createElement("ul");
	var allHobbits = document.querySelectorAll(".hobbit");
	for (i = 0; i < allHobbits.length; i++) {
		hobbitsGoHome.appendChild(allHobbits[i]);
	};
	theShire.appendChild(hobbitsGoHome);
};

thereAndBackAgain();


