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

var makeMiddleEarth = function(){

	var section = document.createElement('section');
	section.setAttribute('id', "middle-earth");
	

	for(var i = 0; i < lands.length; i++){

		var article = document.createElement('article');
		section.appendChild(article);
		var h1 = document.createElement('h1');
		var text = document.createTextNode(lands[i]);
		h1.appendChild(text);
		article.appendChild(h1);
		

	}

	body.appendChild(section);

}

makeMiddleEarth();

var MakeHobbits =  function(){

	var ul = document.createElement('ul');
	

	for(var i = 0; i < hobbits.length; i ++){

			
			var li = document.createElement('li');
			li.setAttribute('class', "hobbit");
			var text = document.createTextNode(hobbits[i]);
			li.appendChild(text);
			ul.appendChild(li);

	}
		
		var shire = document.getElementsByTagName('article')[0];
		shire.appendChild(ul);


}

MakeHobbits();



var keepItSecretKeepItSafe = function(){

	var div = document.createElement('div');
	div.setAttribute('id', 'the-ring');
	div.setAttribute('class', 'magic-imbued-jewelry');

	var frodo = document.getElementsByClassName('hobbit')[0];

	frodo.appendChild(div);

}

keepItSecretKeepItSafe();

var makeBuddies = function(){

	var aside = document.createElement('aside');
	var ul = document.createElement('ul');

	for(var i =0; i < buddies.length; i++){

		var li = document.createElement('li');
		var text = document.createTextNode(buddies[i]);
		li.appendChild(text);
		ul.appendChild(li);

	}

	aside.appendChild(ul);

	var rivendell = document.getElementsByTagName('article')[1];

	rivendell.appendChild(aside);

}

makeBuddies();

var beautifulStranger = function(){

	var strider = document.getElementsByTagName('li')[7];
	strider.innerHTML= "Aragorn";


}

beautifulStranger();

var leaveTheShire = function(){

	
		var move = document.getElementsByTagName('ul')[0];
		
		var rivendell = document.getElementsByTagName('article')[1];
		rivendell.appendChild(move);

	
}

leaveTheShire();

var forgeTheFellowShip = function(){

	var div = document.createElement('div');
	div.setAttribute('class', "thefellowship")

	var rivendell = document.getElementsByTagName('article')[1];
		rivendell.appendChild(div);
		var thefellowship = document.getElementsByClassName('thefellowship')[0];

	
	
		
	

	

	thefellowship.appendChild(document.getElementsByClassName('hobbit')[3]);
	thefellowship.appendChild(document.getElementsByClassName('hobbit')[2]);
	thefellowship.appendChild(document.getElementsByClassName('hobbit')[1]);
	thefellowship.appendChild(document.getElementsByClassName('hobbit')[0]);

	var bud = document.getElementsByTagName('ul')[0];
	

	for(var i = 0; i < buddies.length; i++){
	
		thefellowship.appendChild(bud.getElementsByTagName('li')[0]);
	}
	



}


forgeTheFellowShip();

var theBalrog = function(){

	var Gandalf = document.getElementsByTagName('li')[4];
	Gandalf.innerHTML= "Gandalf the White";
	Gandalf.style.backgroundColor = "white";
	Gandalf.style.border = "thick solid grey";
	
}

theBalrog();

var hornOfGondor = function(){

	window.alert("The horn of gondor has been blown, Boromir's been killed by the Uruk-hai!");

	var el = document.getElementsByTagName('li')[8];
	
	el.remove();
}

hornOfGondor();

var itsDangeroustoGoAlone = function(){

	var frodo = document.getElementsByClassName('hobbit')[3];
	var sam = document.getElementsByClassName('hobbit')[2];

	var mordor = document.getElementsByTagName('article')[2];

	mordor.appendChild(frodo);
	mordor.appendChild(sam);

	var div = document.createElement('div');
	div.setAttribute('id', 'mount-doom');
	mordor.appendChild(div);

}

itsDangeroustoGoAlone();

var weWantsIt = function(){

	var div = document.createElement('div');
	div.setAttribute('id', 'gollum');
	var mordor = document.getElementsByTagName('article')[2];

	mordor.appendChild(div);

	var remove = document.getElementById('the-ring');
	var gol = document.getElementById('gollum');
	gol.appendChild(remove);

	var mount = document.getElementById('mount-doom');
	mount.appendChild(gol);

}

weWantsIt();

var thereAndBackAgain = function(){

	var remove1 = document.getElementById('the-ring');
	remove1.remove();

	var remove2 = document.getElementById('gollum');
	remove2.remove();


	var shire = document.getElementsByTagName('article')[0];

	shire.appendChild(document.getElementsByClassName('hobbit')[0]);
	shire.appendChild(document.getElementsByClassName('hobbit')[1]);
	shire.appendChild(document.getElementsByClassName('hobbit')[2]);
	shire.appendChild(document.getElementsByClassName('hobbit')[3]);

}

thereAndBackAgain();

