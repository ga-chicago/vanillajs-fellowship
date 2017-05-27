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

//#### Part 1
var makeMiddleEarth = function () {
	var lands = ['The Shire', 'Rivendell', 'Mordor'];
	var body = document.body;

	// create a section tag with an id of `middle-earth`
	var middleEarthSection = document.createElement('section');
	middleEarthSection.id = "middle earth";

	// append `middle-earth` to your document `body
	body.appendChild(middleEarthSection);

	// inside each `article` tag include an `h1` with the name of the land
	for (var i = 0; i < lands.length; i++) {
		// add each land as an `article` tag
		var articleName = document.createElement('article');
		middleEarthSection.appendChild(articleName);
		var h1 = document.createElement('h1');
		h1.innerText = lands[i];
		articleName.appendChild(h1);
	}
}

makeMiddleEarth();

//#### Part 2
var hobbitList = document.createElement("ul");
var makeHobbits = function () {
	for (var i = 0; i < hobbits.length; i++) {
		var hobbit = document.createElement("li");
		// display an `unordered list` of hobbits in the shire
		hobbit.innerText = hobbits[i];
		// give each hobbit a class of `hobbit`
		hobbit.className = "hobbit";
		hobbitList.appendChild(hobbit);
	}
	document.getElementsByTagName('article')[0].appendChild(hobbitList);
}

makeHobbits();

//#### Part 3
var keepItSecretKeepItSafe = function () {
	// create a div with an id of `'the-ring'`
	var ringDiv = document.createElement("div");
	ringDiv.id = "the-ring";
	// give the div a class of `'magic-imbued-jewelry'
	ringDiv.className = "magic-imbued-jewelry"
	// add the ring as a child of `Frodo`
	document.getElementsByTagName('li')[0].appendChild(ringDiv);
};

keepItSecretKeepItSafe()

//#### Part 4
var makeBuddies = function () {
	// create an `aside` tag
	var buddiesAside = document.createElement("aside");
	var buddyList = document.createElement("ul");
	for (var i = 0; i < buddies.length; i++) {
		// attach an `unordered list` of the `'buddies'` in the aside
		var buddy = document.createElement("li");
		buddy.innerText = buddies[i];
		buddy.className = "buddy";
		buddyList.appendChild(buddy);
	}
	buddiesAside.appendChild(buddyList);
	// insert your aside as a child element of `rivendell`
	document.getElementsByTagName('article')[1].appendChild(buddiesAside);
};

makeBuddies ();

//#### Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to 'Aragorn'
   document.querySelectorAll('aside ul li')[3].innerText = "Aragon";
};

beautifulStranger();

//#### Part 6
var leaveTheShire = function () {
	// assemble the `hobbits` and move them to rivendell
	hobbitList.className = "hobbitList";
	document.getElementsByTagName('article')[1].appendChild(hobbitList);
};

leaveTheShire();

//#### Part 7
var forgeTheFellowShip = function () {
	// create a new div called 'the-fellowship' within 'rivendell'
	var thefellowship = document.createElement("div");
	var fellowshipList = document.createElement("ul")
	document.getElementsByTagName('article')[1].appendChild(thefellowship);
	thefellowship.appendChild(fellowshipList)
   // add each `hobbit` and `buddy` one at a time to 'the-fellowship'
   for (var i = 0; i < hobbits.length; i++) {
   	var movingHobbit = document.getElementsByClassName("hobbit")[i];
   	fellowshipList.appendChild(movingHobbit);
   	alert(hobbits[i] + " has joined the party!")
   }
   for (var i = 0; i < buddies.length; i++) {
   	var movingBuddy = document.getElementsByClassName("buddy")[i];
   	fellowshipList.appendChild(movingBuddy);
   	alert(buddies[i] + " has joined the party!")
   }
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();

//#### Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'
   document.querySelectorAll('aside ul li')[0].innerText = "Gandalf the White";
   // apply the following style to the element, make the // background 'white', add a grey border
   document.querySelectorAll('aside ul li')[0].style.backgroundColor = "white";
   document.querySelectorAll('aside ul li')[0].style.border = "2px grey solid";
};

theBalrog();

//#### Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   alert("The horn of gondor has been blown! Boromir's been killed by the Uruk-hai!")
   // Remove `Boromir` from the Fellowship
   var remove = document.getElementsByClassName('buddy')[3]
   remove.parentNode.removeChild(remove)
};

hornOfGondor();

//#### Part 10
var itsDangerousToGoAlone = function () {
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var mordorList = document.createElement("ul");
	document.getElementsByTagName('article')[2].appendChild(mordorList);
	mordorList.appendChild(document.getElementsByClassName("hobbit")[0])
	mordorList.appendChild(document.getElementsByClassName("hobbit")[2])
	// add a div with an id of `'mount-doom'` to `Mordor`
	var mountDoom = document.createElement("div");
	mountDoom.id = "mount-doom"
	document.getElementsByTagName('article')[2].appendChild(mountDoom);
};

itsDangerousToGoAlone();

//#### Part 11
 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   var gollum = document.createElement("div");
   gollum.id = "gollum";
   document.getElementsByTagName('article')[2].appendChild(gollum);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   gollum.appendChild(document.getElementById('the-ring'));
   // Move Gollum into Mount Doom
   document.getElementById("mount-doom").appendChild(gollum);
};

weWantsIt();

//#### Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   var remove = document.getElementById('gollum');
   remove.parentNode.removeChild(remove);
   // Move all the `hobbits` back to `the shire`
   var shireList = document.createElement("ul");
	document.getElementsByTagName('article')[0].appendChild(shireList);
	for (var i = 0; i < hobbits.length; i++) {
   		var returnHobbit = document.getElementsByClassName("hobbit")[i];
   		shireList.appendChild(returnHobbit);
   }
};

thereAndBackAgain();