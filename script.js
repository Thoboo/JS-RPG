/*
$(function(){
    $("#header").typed({
        strings: ["JS-RPG^2000", "THE GREATEST EPIC ERRHH^2000", "My attempt at creating a game."],
        typeSpeed: 10
    });
});


$(document).ready(function() {
    $('#contentTable').fadeIn(500);
})
*/

var code = "heydanny";

function easter_egg() {
    var input = prompt("Please enter the password to proceed.");
    if (input === code) {
        document.location = "egg/index.html";            
    }
}

function characterDisplay() {
        if (Cookies.get("name") === undefined) {
            document.getElementById("characterDisplay").style.display = "none";
        }
        else {
            document.getElementById("charName").innerHTML = "<p>Name: " + Cookies.get("name") + "</p>";
            document.getElementById("charClass").innerHTML = "<p>Class: " + Cookies.get("class") + "</p>";
            document.getElementById("charGender").innerHTML = "<p>Gender: " + Cookies.get("gender") + "</p>";
        }
}

function goToGame() {
    document.location = "game/index.html";    
}

function goToChar() {
    document.location = "character_creation/index.html";
}

function removeCharacter() {
    Cookies.set('name', '', { expires: '01/01/2012' });
    Cookies.set('gender', '', { expires: '01/01/2012' });
    Cookies.set('class', '', { expires: '01/01/2012' });
    window.setTimeout(function(){ location.reload() },0);
}