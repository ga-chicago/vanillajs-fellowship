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
    var sectionTag = document.createElement('section')
    body.appendChild(sectionTag)
    sectionTag.setAttribute('id', 'middle-earth')
    for (var i = 0; i < lands.length; i++) {
        var articleTag = document.createElement('article')
        sectionTag.appendChild(articleTag)
        var h1 = document.createElement('h1')
        articleTag.appendChild(h1)
        h1.innerHTML = lands[i]
    }
};
makeMiddleEarth();
//#### Part 2
var makeHobbits = function () {
    var articleElement2 = document.getElementsByTagName('article')[1]
    var hobbitUl = document.createElement('ul')
    articleElement2.appendChild(hobbitUl)
    for (var i = 0; i < hobbits.length; i++) {
        var hobbitPerson = document.createElement('li')
        hobbitUl.appendChild(hobbitPerson)
        hobbitPerson.innerHTML = hobbits[i]
}};
makeHobbits();
//#### Part 3
var keepItSecretKeepItSafe = function () {
    var ringDiv = document.createElement('div')
    document.getElementsByTagName('div')[1]
    body.appendChild(ringDiv)
    ringDiv.setAttribute('id', 'the-ring')
    ringDiv.setAttribute('class', 'magic-imbued-jewelry')
    var grabFrodo = document.getElementsByTagName('li')[0]
    ringDiv.appendChild(grabFrodo)
};
keepItSecretKeepItSafe();
//global function test
//for addition once the whole product is working
var addCrew = function (home, group, tag) {
    for (var i = 0; i < group.length; i++) {
        var makeTag = document.createElement(tag)
        home.appendChild(tag)
        tag.innerHTML = group[i]
    }
};
//#### Part 4
var makeBuddies = function () {
    var makeAside = document.createElement('aside')
    var grabArticleRiven = document.getElementsByTagName('article')[1]
    grabArticleRiven.appendChild(makeAside)
    var buddiesUl = document.createElement('ul')
    var grabAside = document.getElementsByTagName('aside')[0]
    document.getElementsByTagName('ul')[1]
    grabAside.appendChild(buddiesUl)
    for (var i = 0; i < buddies.length; i++) {
        var buddyLi = document.createElement('li')
        buddiesUl.appendChild(buddyLi)
        buddyLi.innerHTML = buddies[i]
    }
};
makeBuddies();
//#### Part 5
var beautifulStranger = function () {
    //buddies[3] = "Aragorn" (why doesn't this work?)
    var aliasStrider = document.getElementsByTagName('li')[6]
    aliasStrider.innerHTML = "Aragorn"
}
beautifulStranger();
//#### Part 6
var leaveTheShire = function () {
    var assembleHobbits = document.getElementsByTagName('article')[1].appendChild(document.getElementsByTagName('ul')[0])
};
leaveTheShire();
//#### Part 7
var forgeTheFellowship = function () {
    var fellowshipDiv = document.createElement('div')
    var rivenArticle = document.getElementsByTagName('article')[1]
    rivenArticle.appendChild(fellowshipDiv)
    fellowshipDiv.setAttribute('id', 'the-fellowship')
    var fellowshipUl = document.createElement('ul')
    fellowshipDiv.appendChild(fellowshipUl)
    for (var i = 0; i < hobbits.length; i++) {
        var fellowshipLi = document.createElement('li')
        fellowshipUl.appendChild(fellowshipLi)
        fellowshipLi.innerHTML = hobbits[i]
        console.log(hobbits[i] + " has joined your party.")
    }
    for (var i = 0; i < buddies.length; i++) {
        var fellowshipLi = document.createElement('li')
        fellowshipUl.appendChild(fellowshipLi)
        fellowshipLi.innerHTML = buddies[i]
        console.log(buddies[i] + " has joined your party.")
    }
};
forgeTheFellowship();
//#### Part 8
var theBalrog = function () {
    var gandalf = document.getElementsByTagName('li')[12]
    gandalf.innerHTML = "Gandalf the White"
    //stil have to make white background, grey border
};
theBalrog();
//#### Part 9
var hornOfGondor = function () {
    console.log("The horn of Gondor has been blown. Boromir's been killed by the Urak-hai!")
    var fellowshipUl = document.getElementsByTagName('ul')[2]
    // var boromirLi = document.getElementsByTagName('li')[16]
    fellowshipUl.removeChild(document.getElementsByTagName('li')[16])
};
hornOfGondor();
//#### Part 10
var itsDangerousToGoAlone = function () {
    var fellowshipUl = document.getElementsByTagName('ul')[2]
    var mordorArticle = document.getElementsByTagName('article')[2]
    var pickSam = fellowshipUl.getElementsByTagName('li')[1]
    var pickFrodo = fellowshipUl.getElementsByTagName('li')[0]
    fellowshipUl.removeChild(pickSam)
    fellowshipUl.removeChild(pickFrodo)
    var mordorUl = document.createElement('ul')
    mordorArticle.appendChild(mordorUl)
    mordorUl.appendChild(pickSam)
    mordorUl.appendChild(pickFrodo)

    var mountDoom = document.createElement('div')
    mordorArticle.appendChild(mountDoom)
    mountDoom.setAttribute('id', 'mount-doom')
};
itsDangerousToGoAlone();
//#### Part 11
var weWantsIt = function () {
    var mordorArticle = document.getElementsByTagName('article')[2]
    var gollumDiv = document.createElement('div')
    //imprecise?
    gollumDiv.setAttribute('id', 'gollum')
    mordorArticle.appendChild(gollumDiv)
    var ring = document.getElementsByTagName('div')[4]
    var mordorUl = document.getElementsByTagName('ul')[3]
    var pickRingFrodo = document.getElementsByTagName('li')[16]
    ring.removeChild(pickRingFrodo)
    ring.appendChild(gollumDiv)
};
weWantsIt();
