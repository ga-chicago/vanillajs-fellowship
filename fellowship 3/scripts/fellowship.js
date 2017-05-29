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

var middleEarth = document.createElement("section");//creates a section
middleEarth.id = "middle-earth";//gives the section an id

for (var i = 0; i < lands.length; i++) {//iterates through land object
	var articleElem = document.createElement(el1); //creates article
	var h1Elem = document.createElement(el2); //creates h1 tag
	var text = lands[i];//grabs land nams
	var h1Text = document.createTextNode(text);// creates a text node with land name as content
	h1Elem.appendChild(h1Text);//puts the text node in the h1 element
	articleElem.appendChild(h1Elem);//puts the h1 element in the article element
	middleEarth.appendChild(articleElem);//puts the article element in the section
	}

	body.appendChild(middleEarth);//puts the section in the body

};

makeMiddleEarth("article", "h1");//pass article and h1 into the function arguments


//Part 2

var makeHobbits = function(elName){

    var hobbitsList = document.createElement("ul");//creates a unordered list

        for (var i = 0; i < hobbits.length; i++) {//iterates through the hobbit object
            var el = document.createElement(elName);//creates the list element
            el.className = "hobbit";//give a class name to each element
            var text = hobbits[i];//gets the names from the hobbit object
            var elText = document.createTextNode(text);//creates a text node with the hobbit name inside
            el.appendChild(elText);//puts the text node in the list element
            hobbitsList.appendChild(el);//puts the list element in the UL tag
            }

        var list = document.getElementsByTagName("article")[0];// gets The Shire article
        list.append(hobbitsList);//but the hobbit list in the The Shire article
}
makeHobbits("li");//passes list into the function argument


// Part 3
var keepItSecretKeepItSafe = function (){

	var ring = document.createElement("div");//creates a div
	ring.id = "the-ring";//gives the dic and id
	ring.className = "magic-imbued-jewelry";//gives the div a class
	var frodo = document.getElementsByTagName("li")[0];//gets the Frodo li element
	frodo.appendChild(ring);//puts the ring div into the Frodo li element
}

keepItSecretKeepItSafe();

// //Part 4
var makeBuddies = function (elName){

	var buddiesAside = document.createElement("aside");//creates an aside
	var buddiesList = document.createElement("ul");//creates an unordered list

	for (var i = 0; i < buddies.length; i++) {//itereates through the buddies object

		var el = document.createElement(elName);//creates a li element
		var text = buddies[i];//gets the names of each buddy
		var elText = document.createTextNode(text);//creates a text node with the buddy name
		el.appendChild(elText);//put the text node into the li element
		buddiesList.appendChild(el);//puts the li element into the ul element
	}

	buddiesAside.appendChild(buddiesList);//puts the ul element into the aside element

	var riven = document.getElementsByTagName("article")[1];//gets the Rivendell article element
	riven.appendChild(buddiesAside);//buts the aside element into the Rivendell article element
}
makeBuddies("li");//calls the function and passes li into the arguement

//Part 5
var beautifulStranger = function () {
	buddies[3] = "Aragorn";  //Changes Striders name in the array to Aragorn
	document.querySelectorAll("aside ul li")[3].textContent=buddies[3];//changes the text content for the 4th property to Aragorn
}
beautifulStranger();

// // Part 6
var leaveTheShire = function (){

	var newParent = document.getElementsByTagName("ul")[1];//gets the Rivendell list of characters
	var oldParent = document.getElementsByTagName("ul")[0];//gets the hobbit list

	while (oldParent.childNodes.length > 0) {//iterates throught the hobbit list
	newParent.appendChild(oldParent.childNodes[0]);//appends each li to the Rivendell list
	}

}
leaveTheShire();

//Part 7

var forgeTheFellowship = function(){

	var riven = document.getElementsByTagName("article")[1];//gets the rivendell article element
	var fellow = document.createElement("div");//creates a new div
	var h2 = document.createElement("h2");
	var text = "The-Fellowship";
	var textNode = document.createTextNode(text);
	h2.appendChild(textNode)
	fellow.appendChild(h2);
	riven.appendChild(fellow);//appends the div to Rivendell  article

	var oldParent = document.getElementsByTagName("ul")[1];//gets the element where all the characters are currently


	for (var i = 0; i < oldParent.childNodes.length;) { //loops through the ul where the characters are.  you don't do "i++" because you are removing something from the array everytime, so you always just want the first one.


		var names = document.getElementsByTagName("li")[0].textContent; // holds the text of the names for each character

		fellow.appendChild(oldParent.childNodes[i]);//add each element to the new div created above

		alert(names + " has joined the fellowship!");// shows an alert that each character has joined.
	}
}
forgeTheFellowship();

//Part 8

var theBalrog = function (){
var gandalf = "Gandalf the White"//set variable with text I want to update to
document.querySelectorAll("li")[0].innerHTML = gandalf;//selects the Gandalf li and sets the text equal to the variable

document.querySelectorAll("li")[0].style.cssText = "background-color: white; border: 40px grey";//border isn't working

}
theBalrog ();

//Part 9

var hornOfGondor = function() {

alert("The horn of Gondor has been blown!")//creats alert

var boromir = document.getElementsByTagName("li")[4];//variable to get boromir element
boromir.remove();//removes boromir

}
hornOfGondor();

// Part 10
var itsDangerousToGoAlone = function (){

	var newParent = document.getElementsByTagName("article")[2];//gets the Mordor element
	var getFrodo = document.getElementsByTagName("li")[4];//gets frodo element
	var getSam = document.getElementsByTagName("li")[5];//gets sam element

	newParent.appendChild(getFrodo);//appends frodo to mordor
	newParent.appendChild(getSam);//appends sam to mordor
	
	var doomDiv = document.createElement("div");//creates doom div
	doomDiv.id = "mount-doom"//gives id to doom div
	newParent.appendChild(doomDiv);//appends doom div to mordor
}
itsDangerousToGoAlone ();

//Part 11
var weWantsIt = function () {

	var gollum = document.createElement("div");
	gollum.id = "gollum";
	var newParent = document.getElementsByTagName("article")[2];
	newParent.appendChild(gollum);

	var getRing = document.getElementById("the-ring");
	gollum.appendChild(getRing);

	var mountDoom = document.getElementById("mount-doom");
	mountDoom.appendChild(gollum);

}
weWantsIt ();




























