
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute ('src','images/chrome-logo.png');
    } else {
        myImage.setAttribute ('src','images/firefox-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var userName = prompt('chawere ra dagarkva mamikom.');
    localStorage.setItem('name', userName);
    myHeading.textContent = 'kargi gemovneba konia mamashens,' + " " + userName; 
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "va dabrundi she kleo? ra gkvia shen, " + storedName + " xom?";
}

myButton.onclick = function() {
    setUserName();
}