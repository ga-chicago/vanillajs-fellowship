//YOU ARE HERE <-->
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
//#### Part 1
var makeMiddleEarth = function () {
    //make section tag
    var sectionTag = document.createElement('section')
    //attach section tag to body
    body.appendChild(sectionTag)
    //make section tag id='middle-earth'
    sectionTag.setAttribute('id', 'middle-earth')
    //loop for make articles with h1's for all the lands
    for (var i = 0; i < lands.length; i++) {
        //make article element
        var articleTag = document.createElement('article')
        //attach article element to section element
        sectionTag.appendChild(articleTag)
        //make h1 element
        var h1 = document.createElement('h1')
        //place h1's in articles
        articleTag.appendChild(h1)
        //add list strings to h1's
        h1.innerHTML = lands[i]
    }
}
makeMiddleEarth();
//#### Part 2
var makeHobbits = function () {
    //grab article element
    var articleElement2 = document.getElementsByTagName('article')[1]
    //make ul element
    var hobbitUL = document.createElement('ul')
    //attach ul to article element
    articleElement2.appendChild(hobbitUL)
    //make li for each hobbit
    for (var i = 0; i < hobbits.length; i++) {
        //for each hobbit, make an 'li'
        var hobbitPerson = document.createElement('li')
        //append said "li's" to 'ul' element created
        //above, in the variable 'hobbitUL'
        hobbitUL.appendChild(hobbitPerson)
        //place hobbits from list as HTML inside "li's"
        hobbitPerson.innerHTML = hobbits[i]
}}
makeHobbits();
