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



//1
var makeMiddleEarth = function() {
	var midE = document.createElement('section');
	midE.id = 'middle-earth';
	body.appendChild(midE);
	function createLands(){
		for(i = 0; i < lands.length; i++){
			var landName = document.createElement('article');
			var h1 = document.createElement('h1');
			h1.innerHTML = lands[i];
			landName.appendChild(h1);
			midE.appendChild(landName);
		}
	}
	createLands()
}
makeMiddleEarth()



//2
var makeHobbits = function(){
	var halflings = document.createElement('ul');
	body.getElementsByTagName('article')[0].appendChild(halflings);
	halflings.id = "halflings";
		function hobbitBirth(){
			for(i = 0; i < hobbits.length; i++){
				var hobs = document.createElement('li')
				hobs.id = "hobbit";
				hobs.setAttribute('class', 'hobbitses')
				hobs.innerHTML = hobbits[i];
				halflings.appendChild(hobs);
			}

		}
		hobbitBirth();
}
makeHobbits();

//3
var keepItSecretKeepItSafe = function(){
	var ring = document.createElement('div');
	ring.id = 'the-ring';
	ring.setAttribute('class', 'magic-imbued-jewelry')
	body.getElementsByTagName('li')[0].appendChild(ring);
}
keepItSecretKeepItSafe();

//4
 var makeBuddies = function(){
 	var budsAside = document.createElement('aside');
 	var buds = document.createElement('ul');
 	buds.id = "buds"
 	budsAside.appendChild(buds);
 	body.getElementsByTagName('article')[1].appendChild(budsAside);
 		function buddyBirth(){
			for(i = 0; i < buddies.length; i++){
				var tallFolk = document.createElement('li')
				tallFolk.id = "buddy"
				tallFolk.innerHTML = buddies[i];
				buds.appendChild(tallFolk);
			}
		}
		buddyBirth();
 }
makeBuddies();

//5
var beautifulStranger = function(){
	document.getElementById('buds').getElementsByTagName('li')[3].innerHTML = "Aragorn";
}
beautifulStranger();

//6
var leaveTheShire = function(){
	body.getElementsByTagName('article')[1].appendChild(document.getElementById('halflings'));
}
leaveTheShire()

//7
var forgeTheFellowship = function(){
	var fellows = document.createElement('div');
	fellows.id = "the-fellowship";
	var fellowList = document.createElement('ul');
	fellows.appendChild(fellowList);
	body.getElementsByTagName('article')[1].appendChild(fellows);
	for(i = 0; i < body.getElementsByTagName('li').length; i++){
		fellowList.appendChild(body.getElementsByTagName('li')[i])
		alert(body.getElementsByTagName('li')[i].innerText + " has joined the Fellowship")
	}
}
forgeTheFellowship();

//8
var theBalrog = function(){
	var gandalf = body.getElementsByTagName('li')[4];
	gandalf.innerHTML = "Gandalf The White";
	gandalf.style.backgroundColor = 'white';
	gandalf.style.border = " thick solid gray"
}
theBalrog();

//9
var hornOfGondor = function(){
	alert('The Horn Of Gondor has been blown!');
	body.getElementsByTagName('ul')[2].removeChild(body.getElementsByTagName('li')[5])
}
hornOfGondor();

//10
var itsDangerousToGoAlone = function(){
	var doom = document.createElement('div');
	doom.id = 'mount-doom';
	body.getElementsByTagName('article')[2].appendChild(doom);
	body.getElementsByTagName('article')[2].appendChild(body.getElementsByTagName('li')[2]);
	body.getElementsByTagName('article')[2].appendChild(body.getElementsByTagName('li')[5]);
}
itsDangerousToGoAlone();

//11
var weWantsIt = function(){
	var smeagol = document.createElement('div');
	body.getElementsByTagName('article')[2].appendChild(smeagol);
	smeagol.id = 'gollum'
	smeagol.appendChild(document.getElementById('the-ring'));
	document.getElementById('mount-doom').appendChild(smeagol)
}
weWantsIt();

//12
var thereAndBackAgain = function(){
	document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));
	for(i = 0; i < hobbits.length; i++){
		document.getElementsByTagName('article')[0].appendChild(document.getElementsByClassName('hobbitses')[i]);
	}

}
thereAndBackAgain();






















