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




var makeMiddleEarth = function () {
	var section = document.createElement("section");
	body.appendChild(section);

	section.setAttribute("id", "middle-earth");
	for (i = 0; i < lands.length; i++) {
		newLand = document.createElement("article");
		newLandName = document.createElement("h1");
		newLandName.innerText = lands[i];
		newLand.appendChild(newLandName);
		section.appendChild(newLand);
	}
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
};

makeMiddleEarth();

var shire = document.getElementsByTagName("article")[0];
var	hobbitList = document.createElement("ul");

var makeHobbits = function () {
	shire.appendChild(hobbitList);


	for (i = 0; i < hobbits.length; i++) {
		hobbitName = document.createElement("li");
		hobbitName.setAttribute("class", "hobbit");
		hobbitName.innerText = hobbits[i];
		hobbitList.appendChild(hobbitName);
	}
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};

makeHobbits();

	var theRing = document.createElement("div");
	theRing.setAttribute("id", "the-ring");
	theRing.setAttribute("class", "magic-imbued-jewelry");

var keepItSecretKeepItSafe = function () {
	frodo = document.getElementsByClassName("hobbit")[0];
	frodo.appendChild(theRing);
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();

	var rivendell = document.getElementsByTagName("article")[1];

var makeBuddies = function () {
	buddiesAside = document.createElement("aside");
	buddiesList = document.createElement("ul");
	buddiesAside.appendChild(buddiesList);
	rivendell.appendChild(buddiesAside);

	for (i = 0; i < buddies.length; i++) {
		buddyName = document.createElement("li");
		buddyName.setAttribute("class", "buddy");
		buddyName.innerText = buddies[i];
		buddiesList.appendChild(buddyName);

	}
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

makeBuddies();



var beautifulStranger = function () {
	var aragorn = document.getElementsByClassName("buddy")[3];
	aragorn.innerText = "Aragorn";
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();


var leaveTheShire = function () {
	rivendell.appendChild(hobbitList);
};

leaveTheShire();

	var theFellowship = document.createElement("div");
	var fellowShipList = document.createElement("ul");

var forgeTheFellowShip = function () {

	var futureFellow = document.querySelectorAll("li");
	theFellowship.appendChild(fellowShipList);
	rivendell.appendChild(theFellowship);
	for (i = 0; i < futureFellow.length; i++) {
		fellowShipList.appendChild(futureFellow[i])
		alert(futureFellow[i].innerText + " has joined the Fellowship.")

   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
	};
};

forgeTheFellowShip();

var theBalrog = function () {
	var gandalf = document.getElementsByClassName("buddy")[0];
	gandalf.innerText = "Gandalf the White";
	gandalf.style.backgroundColor = "white";
	gandalf.style.border = "thick solid grey";

   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();


var hornOfGondor = function () {
	window.alert("Oh shit. The horn of gondor has been blown. It's about to go down.")
	var boromir = fellowShipList.getElementsByClassName("buddy")[4];
	fellowShipList.removeChild(boromir);
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

hornOfGondor();

var mordor = document.getElementsByTagName("article")[2];
	var mountDoom = document.createElement("div");
		mordor.setAttribute("id", "Mordor")


var itsDangerousToGoAlone = function (){
	var frodo = fellowShipList.getElementsByClassName("hobbit")[0];
	var sam = fellowShipList.getElementsByClassName("hobbit")[1];
	mordor.appendChild(frodo);
	mordor.appendChild(sam);
	mordor.appendChild(mountDoom);



   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

 var weWantsIt = function () {

	var golumn = document.createElement("div");
	golumn.setAttribute("id", "gollum");
	golumn.appendChild(theRing);
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   mountDoom.appendChild(golumn);
};

weWantsIt();

var allThoseHobbits = document.getElementsByClassName("hobbit");


var thereAndBackAgain = function () {
	var gollum = document.getElementById("gollum");
	mountDoom.removeChild(gollum);
	for(i = 0; i < allThoseHobbits.length; i++)
		{
			hobbitList.appendChild(allThoseHobbits[i])
		};
	shire.appendChild(hobbitList)
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};

thereAndBackAgain();
