var displayType = "inline-table";
var name;
var characteristic;
var gender;
var chosenClass;

function setup() {
    document.getElementById("infoCell").style.display = displayType; 
    document.getElementById("genderCell").style.display = "none";
    document.getElementById("nameCell").style.display = "none";
    document.getElementById("classCell").style.display = "none";
    document.getElementById("endCell").style.display = "none";
}

function moveToGender() {
    document.getElementById("infoCell").style.display = "none";    
    document.getElementById("genderCell").style.display = displayType;
    document.getElementById("nameCell").style.display = "none";
    document.getElementById("classCell").style.display = "none";
    document.getElementById("endCell").style.display = "none";
}

function moveToName_male() {
    gender = "Male";
    document.getElementById("infoCell").style.display = "none";    
    document.getElementById("genderCell").style.display = "none";
    document.getElementById("nameCell").style.display = displayType;
    document.getElementById("classCell").style.display = "none";
    document.getElementById("endCell").style.display = "none";
}

function moveToName_female() {
    gender = "Female";
    document.getElementById("infoCell").style.display = "none";    
    document.getElementById("genderCell").style.display = "none";
    document.getElementById("nameCell").style.display = displayType;
    document.getElementById("classCell").style.display = "none";
    document.getElementById("endCell").style.display = "none";
}

function moveToClass() {
    name = document.getElementById("name").value;
    characteristic = document.getElementById("characteristic").value;
    document.getElementById("infoCell").style.display = "none";    
    document.getElementById("genderCell").style.display = "none";
    document.getElementById("nameCell").style.display = "none";
    document.getElementById("classCell").style.display = displayType;
    document.getElementById("endCell").style.display = "none";
}

function moveToEnd(i) {
    if (i === 0) {
        chosenClass = "Warrior";  
    }
    else if (i === 1) {
        chosenClass = "Mage";   
    }
    else if (i === 2) {
        chosenClass = "Cleric";    
    }
    else if (i === 3) {
        chosenClass = "Thief";    
    }
    document.getElementById("infoCell").style.display = "none";    
    document.getElementById("genderCell").style.display = "none";
    document.getElementById("nameCell").style.display = "none";
    document.getElementById("classCell").style.display = "none";
    document.getElementById("endCell").style.display = displayType;
    
    document.getElementById("nameDisplay").innerHTML = "<p>Name: " + name + " the " + characteristic + "</p>";
    document.getElementById("genderDisplay").innerHTML = "<p>Gender: " + gender + "</p>";
    document.getElementById("classDisplay").innerHTML = "<p>Class: " + chosenClass + "</p>";
}

function saveCharacter() {
    Cookies.defaults = {
        path: '/',
    };
    Cookies.set("name",name + " the " + characteristic, { expires: Infinity });
    Cookies.set("gender",gender, { expires: Infinity });
    Cookies.set("class",chosenClass, { expires: Infinity });
    location.href = "../index.html";
}