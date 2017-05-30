console.log("Linked.");

// Dramatis Personae //
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


// Part 1 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var makeMiddleEarth = function () {
	// create a section tag with an id of `middle-earth`
	var sect = document.createElement('section');
	sect.id = "middle-earth";

	body.appendChild(sect);
	// add each land as an `article` tag
	// inside each `article` tag include an `h1` with the name of the land
	function createLands(){
		for(i = 0; i < lands.length; i++){
			var art = document.createElement('article');
			var h1 = document.createElement('h1');

			h1.innerHTML = lands[i];
			// append `middle-earth` to your document `body`
			art.appendChild(h1);
			sect.appendChild(art);
		}

	}
	createLands();
};

makeMiddleEarth();


// Part 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   		// display an `unordered list` of hobbits in the shire
      	// (which is the second article tag on the page)
   		// give each hobbit a class of `hobbit`var shire = document.getElementsByTagName('article')[0];

var shire = document.getElementsByTagName('article')[0];
var unorderedList = document.createElement('ul');

var makeHobbits = function () {

	shire.appendChild(unorderedList);

		for(i = 0; i < hobbits.length; i++){
			var li = document.createElement('li')

			li.innerHTML = hobbits[i]

			unorderedList.appendChild(li)
		}
};

makeHobbits();


// Part 3 //

var keepItSecretKeepItSafe = function () {
	// create a div with an id of `'the-ring'`
	var div = document.createElement('div');

	div.id = "the-ring";
	div.class = "magic-imbued-jewelry"

   // add the ring as a child of `Frodo`
};


// Part 4 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rivendell = document.getElementsByTagName('article')[1];

var makeBuddies = function () {
   // create an `aside` tag
   var aside = document.createElement('aside');
   // attach an `unordered list` of the `'buddies'` in the aside
   var unorderedList = document.createElement('ul');
   // insert your aside as a child element of `rivendell`
   for(i = 0; i < buddies.length; i++){
			var li = document.createElement('li');

			li.innerHTML = buddies[i];

			unorderedList.appendChild(li);
		}

   aside.appendChild(unorderedList);
   rivendell.appendChild(aside);

};

makeBuddies();


// Part 5 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   document.querySelectorAll('aside ul li')[3].innerHTML = 'Aragon';
};

beautifulStranger();


// Part 6 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var move = document.getElementsByTagName('ul')[0];
   var rivendell = document.getElementsByTagName('article')[1];

   rivendell.appendChild(move);
};

leaveTheShire();


// Part 7 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var div = document.createElement('div');

   div.setAttribute('class', 'thefellowship');
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   var rivendell = document.getElementsByTagName('article')[1];

   rivendell.appendChild(div);

   var thefellowship = document.getElementsByClassName('thefellowship')[0];
   var buddyName = document.getElementsByTagName('ul')[0];
 	
 
 	for(var i = 0; i < buddies.length; i++){
 	
 		thefellowship.appendChild(buddyName.getElementsByTagName('li')[0]);
 		// after each character is added make an alert that they // have joined your party
 		alert(buddies[i] + " has joined the party!")
	}
 
};

forgeTheFellowShip ();


// Part 8 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   document.querySelectorAll('div li')[0].innerHTML = 'Gandalf the White';
   // apply the following style to the element, make the // background 'white', add a grey border
   document.querySelectorAll('div li')[0].style.backgroundColor = 'white';
   document.querySelectorAll('div li')[0].style.border = "1px grey solid";
};

theBalrog();



// Part 9 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   alert('The horn of Gandor has been blown! Boromir has been killed by the Uruk-hai!');
   // Remove `Boromir` from the Fellowship
   var bor = getElementsByTagName('li')[8];

   bor.remove();

};

hornOfGondor();


// Part 10 //

var itsDangerousToGoAlone = function (){
	var frodo = document.getElementsByClassName('hobbit')[3];
 	var sam = document.getElementsByClassName('hobbit')[2];
 
 	var mordor = document.getElementsByTagName('article')[2];
 
 	mordor.appendChild(frodo);
 	mordor.appendChild(sam);
 
 	var div = document.createElement('div');
 	div.setAttribute('id', 'mount-doom');
 	mordor.appendChild(mountDoom);
 
 }

itsDangerousToGoAlone();


// Part 11 //

var weWantsIt = function(){
 	// Create a div with an id of `'gollum'` and add it to Mordor
 	var div = document.createElement('div');
 	div.setAttribute('id', 'gollum');
 	var mordor = document.getElementsByTagName('article')[2];
 
 	mordor.appendChild(div);

 	// Remove `the ring` from `Frodo` and give it to `Gollum`
 	var ring = document.getElementById('the-ring');
 	var gollum = document.getElementById('gollum');
 	gollum.removeChild(ring);
 	
 	// Move Gollum into Mount Doom
 	document.getElementById("mount-doom").appendChild(gollum);
 
 }

 weWantsIt();
 

 // Part 12 //

 var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   var remove = document.getElementById('gollum');
   remove.parentNode.removeChild(remove);
   // Move all the `hobbits` back to `the shire`
   var Shire = document.createElement('ul');

   for (var i = 0; i < hobbits.length; i++){
   	var returnHobbit = document.getElementsByClassName('hobbits')[i];
   	shire.appendChild(returnHobbit);
   }
};

thereAndBackAgain();



