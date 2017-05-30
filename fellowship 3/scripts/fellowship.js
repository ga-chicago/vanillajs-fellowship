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


// PART ONE

// create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`

var makeMiddleEarth = function () {
	var section = document.createElement("section");
	section.id = 'middle-earth';
	for (var i = 0; i < lands.length; i++) {
		var art = document.createElement("article");
		var h1 = document.createElement("h1")
		var t = document.createTextNode(lands[i]);
		h1.appendChild(t);
		art.appendChild(h1);
		section.appendChild(art);
	}
	body.appendChild(section);
};

makeMiddleEarth();


// PART TWO

// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`

var makeHobbits = function () {
	var shire = document.getElementsByTagName("article")[0];
	var ul = document.createElement("ul");
	for (var i = 0; i < hobbits.length; i++) {
		var li = document.createElement("li");
		var t = document.createTextNode(hobbits[i]);
		li.appendChild(t);
		ul.appendChild(li);
		shire.appendChild(ul);
	}
};

makeHobbits();


// PART THREE

// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`

var keepItSecretKeepItSafe = function () {
	var frodo = document.getElementsByTagName("li")[0];
	var div = document.createElement("div");
	div.id = "the-ring";
	div.setAttribute("class", "magic-imbued-jewelry");
	frodo.appendChild(div);
};

keepItSecretKeepItSafe();


// PART FOUR

// create an `aside` tag
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`

var makeBuddies = function () {
	var rivendell = document.getElementsByTagName("article")[1];
	var aside = document.createElement("aside");
	var ul = document.createElement("ul");

	for (i = 0; i < buddies.length; i++) {
		var li = document.createElement("li");
		var t = document.createTextNode(buddies[i]);
		li.appendChild(t);
		ul.appendChild(li);
	}

	aside.appendChild(ul);
	rivendell.appendChild(aside);
};

makeBuddies();


// PART FIVE

// change the `'Strider'` text to `'Aragorn'`

var beautifulStranger = function () {
	var buddiesUL = document.getElementsByTagName("ul")[1];
	buddiesUL.getElementsByTagName("li")[3].innerHTML ="Aragorn";
};

beautifulStranger();


// PART SIX

// assemble the `hobbits` and move them to `rivendell`

var leaveTheShire = function () {
	var buddiesUL = document.getElementsByTagName("ul")[1];
	for (var i = 0; i < hobbits.length; i++) {
		li = document.getElementsByTagName("li")[0]
		buddiesUL.appendChild(li);
	}
};

leaveTheShire();


// PART SEVEN

// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party

var forgeTheFellowShip = function () {
	var theFellowship = document.createElement("div");
	var rivendell = document.getElementsByTagName("article")[1]
	rivendell.appendChild(theFellowship);
	var totalLength = buddies.length + hobbits.length;
	for (var i = 0; i < totalLength; i++) {
		li = document.getElementsByTagName("li")[0];
		theFellowship.appendChild(li);
	}
};

forgeTheFellowShip();


// PART EIGHT

// change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the // background 'white', add a grey border

var theBalrog = function () {
	var gandalf = document.getElementsByTagName("li")[0];
	gandalf.innerHTML = "Gandalf the White";
};

theBalrog();


// PART NINE

// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// Remove `Boromir` from the Fellowship

var hornOfGondor = function () {
	alert("The horn of gondor has been blown. Boromir's been killed by the Uruk-hai!");
	var div = document.getElementsByTagName("div")[1];
	var boromir = document.getElementsByTagName("li")[4];
	div.removeChild(boromir);
};

hornOfGondor();


// PART TEN

// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`

var itsDangerousToGoAlone = function (){
	var article = document.getElementsByTagName("article")[2];	
	var frodo = document.getElementsByTagName("li")[4];
	var sam = document.getElementsByTagName("li")[5];
	article.appendChild(frodo);
	article.appendChild(sam);
	var div = document.createElement("div");
	div.id = "mount-doom";
	article.appendChild(div);
};

itsDangerousToGoAlone();


// PART ELEVEN

// Create a div with an id of `'gollum'` and add it to Mordor
// Remove `the ring` from `Frodo` and give it to `Gollum`
// Move Gollum into Mount Doom

 var weWantsIt = function () {
 	var article = document.getElementsByTagName("article")[2];
 	var div = document.createElement("div");
 	div.id = "gollum";
	article.appendChild(div);
	var frodo = document.getElementsByTagName("div")[2];
	theRing = document.getElementById("the-ring");
	gollum = document.getElementById("mount-doom");
	gollum.appendChild(theRing);
	mountDoom = document.getElementById("mount-doom");
	mountDoom.appendChild(gollum);
};

weWantsIt();



// remove `Gollum` and `the Ring` from the document
// Move all the `hobbits` back to `the shire`

var thereAndBackAgain = function () {
	gollum = document.getElementById("gollum");
	mountDoom = document.getElementById("mount-doom");
	mountDoom.removeChild(gollum);
	theRing = document.getElementById("the-ring");
	hobbits1 = document.getElementsByTagName("li")[4];
	hobbits2 = document.getElementsByTagName("li")[5];
	hobbits3 = document.getELementsByTagName("li")[6];
	hobbits4 = document.getElementsByTagName("li")[7];
	theShire = document.getElementsByTagName("h1")[0];
	theShire.appendChild(hobbits1);
	theShire.appendChild(hobbits2);
	theShire.appendChild(hobbits3);
	theShire.appendChild(hobbits4);

};

thereAndBackAgain();



