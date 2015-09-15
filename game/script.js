//JS-RPG - A fighting game written in Javascript
//Made by Thomas Booij
//Handle with extreme precaution
//         _______       ____  ____  ______
//        / / ___/      / __ \/ __ \/ ____/
//   __  / /\__ \______/ /_/ / /_/ / / __  
//  / /_/ /___/ /_____/ _, _/ ____/ /_/ /  
//  \____//____/     /_/ |_/_/    \____/   
//===============================================

//Var-field

var original_health = 20;
var health = 20;
var e_health;
var level = 1;
var section = 0;
var currentEnemy;
var section = 0;
var turn = 0;
var attackStrength = [4, 6, 8];
var attackChance = [4, 6, 8];
var block_parameter = 0;

//Enemies

function Enemy(name, health, a1, a2, a3, section) {
    this.name = name;
    this.health = health;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.section = section;
}

var stijn = new Enemy("Stijn the Barbarian", 20, 3, 4, 5, 1);
var tom = new Enemy("Tom the Mushroom", 25, 3, 4, 5, 1);
var danny = new Enemy("Danny the Ninja", 30, 3, 4, 5, 1);
var dyon = new Enemy("Dyon the Dancer", 25, 3, 4, 6, 2);
var marieke = new Enemy("Marieke the Iron Female", 30, 3, 4, 6, 2);
var kelly = new Enemy("Kelly the Dragon", 35, 3, 4, 6, 2);
var tess = new Enemy("Tess the Happiness", 30, 4, 4, 6, 3);
var sanne = new Enemy("Sanne the ... LET IT GO", 35, 4, 4, 6, 3);
var thomas = new Enemy("Thomas the not-Avenger", 40, 4, 4, 6, 3);
var jeroen = new Enemy("Jeroen the Mighty", 35, 4, 5, 6, 4);
var vincent = new Enemy("Vincent the Assassin", 40, 4, 5, 6, 4);
var leon = new Enemy("Leon the Boss", 45, 4, 5, 6, 4);
var mstijn = new Enemy("MECHA Stijn the Barbarian", 40, 5, 5, 6, 5);
var mtom = new Enemy("MECHA Tom the No", 45, 5, 5, 6, 5);
var mdanny = new Enemy("MECHA Danny the Ninja", 50, 5, 5, 6, 5);
var leonie = new Enemy("Leonie the Great", 45, 5, 6, 6, 6);
var tim = new Enemy("Tim the Person", 50, 5, 6, 6, 6);
var superdanny = new Enemy("SuperDanny", 55, 5, 6, 6, 6);

var enemyList = [[stijn, tom, danny], [dyon, marieke, kelly], [tess, sanne, thomas],[jeroen,vincent,leon],[mstijn,mtom,mdanny],[leonie,tim,superdanny]];

function selectEnemy(list) {
    var randomInt = Math.floor(Math.random() * list.length);
    currentEnemy = list[section][randomInt]; 
    e_health = currentEnemy.health;
    console.log("Enemy has been selected!");
}

//Check for the character

function checkCharacter() {
    if (Cookies.get("name") != null) {
        document.getElementById("statsName").innerHTML = "<h3>" + Cookies.get("name") + "</h3>";
        document.getElementById("statsClass").innerHTML = "<p>[" + Cookies.get("class") + "]</p>";
    }
    else {
        document.getElementById("statsClass").innerHTML = "<p>[No Class]</p>";
    }
}

//Setup Function (reset game/new level)

function setup(i) {
    window.setTimeout(function(){checkCharacter();},0);
    health = original_health;
    turn = 0;
    block_parameter = 0;
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameTable").style.display = "inline-table";
    document.getElementById("bonusHealth").style.display = "none";
    document.getElementById("bonusStrength").style.display = "none";
    document.getElementById("message").innerHTML = "---";
    document.getElementById("attackButtons").style.display = "none";
    if (i === 0) {
        document.getElementById("healthDisplay").innerHTML = "HP: " + health;
        //document.getElementById("ehealthDisplay").innerHTML = "Enemy HP: " + e_health;
        //document.getElementById("enemyNameDisplay").innerHTML = currentEnemy.name;
        document.getElementById("levelDisplay").innerHTML = "Level " + level;
        document.getElementById("statsHealth").innerHTML = "Health: " + health;
        document.getElementById("statsAttack1").innerHTML = "Simple Attack: " + attackStrength[0];
        document.getElementById("statsAttack2").innerHTML = "Intermediate Attack: " + attackStrength[1];
        document.getElementById("statsAttack3").innerHTML = "Advanced Attack: " + attackStrength[2];
        //document.getElementById("enemystatsName").innerHTML = "<h3>" + currentEnemy.name + "</h3>";
        //document.getElementById("enemystatsHealth").innerHTML = "Health: " + health;
        //document.getElementById("enemystatsAttack1").innerHTML = "Simple Attack: " + currentEnemy.a1;
        //document.getElementById("enemystatsAttack2").innerHTML = "Intermediate Attack: " + currentEnemy.a2;
        //document.getElementById("enemystatsAttack3").innerHTML = "Advanced Attack: " + currentEnemy.a3;                 
    }
    else if (i === 1) {
        health = parseInt(Cookies.get("health"));
        original_health = parseInt(Cookies.get("original_health"));
        e_health = parseInt(Cookies.get("e_health"));
        level = parseInt(Cookies.get("level"));
        section = parseInt(Cookies.get("section"));
        turn = parseInt(Cookies.get("turn"));
        block_parameter = parseInt(Cookies.get("block_parameter"));
        attackChance0 = parseInt(Cookies.get("attackChance0"));
        attackChance1 = parseInt(Cookies.get("attackChance1"));
        attackChance2 = parseInt(Cookies.get("attackChance2")); 
        attackStrength0 = parseInt(Cookies.get("attackStrength0"));
        attackStrength1 = parseInt(Cookies.get("attackStrength1"));
        attackStrength2 = parseInt(Cookies.get("attackStrength2"));
        currentEnemy.name = Cookies.get("currentEnemy_name");
        currentEnemy.health = parseInt(Cookies.get("currentEnemy_health"));
        currentEnemy.a1 = parseInt(Cookies.get("currentEnemy_a1"));
        currentEnemy.a2 = parseInt(Cookies.get("currentEnemy_a2"));
        currentEnemy.a3 = parseInt(Cookies.get("currentEnemy_a3"));
        currentEnemy.section = parseInt(Cookies.get("currentEnemy_section")); 
    }
}

function startGame() {
    selectEnemy(enemyList);
    
    turn = 0;
    //document.getElementById("header-cell").style.display = "none";
    document.getElementById("attackButtons").style.display = "inline";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("healthDisplay").innerHTML = "HP: " + health;
    document.getElementById("ehealthDisplay").innerHTML = "Enemy HP: " + currentEnemy.health;
    document.getElementById("enemyNameDisplay").innerHTML = currentEnemy.name;
    document.getElementById("levelDisplay").innerHTML = "Level " + level;
    document.getElementById("statsHealth").innerHTML = "Health: " + health;
    document.getElementById("statsAttack1").innerHTML = "Simple Attack: " + attackStrength[0];
    document.getElementById("statsAttack2").innerHTML = "Intermediate Attack: " + attackStrength[1];
    document.getElementById("statsAttack3").innerHTML = "Advanced Attack: " + attackStrength[2];
    document.getElementById("enemystatsName").innerHTML = "<h3>" + currentEnemy.name + "</h3>";
    document.getElementById("enemystatsHealth").innerHTML = "Health: " + health;
    document.getElementById("enemystatsAttack1").innerHTML = "Simple Attack: " + currentEnemy.a1;
    document.getElementById("enemystatsAttack2").innerHTML = "Intermediate Attack: " + currentEnemy.a2;
    document.getElementById("enemystatsAttack3").innerHTML = "Advanced Attack: " + currentEnemy.a3;
}

//Attack function

function attack(aChance, aStrength) {
    if (turn === 0) {
        if ((Math.floor(Math.random() * 10 + 1)) < aChance) {
            document.getElementById("message").innerHTML = "You missed!";
            turn = 1;
            console.log("The attack resulted in a failure.");
        } else {
            document.getElementById("message").innerHTML = "You've successfully hit " + currentEnemy.name + "! [-" + aStrength + " " + currentEnemy.name + "'s HP]";
            e_health = e_health - aStrength;
            document.getElementById("ehealthDisplay").innerHTML = "Enemy HP: " + e_health;
            turn = 1;
            console.log("The attack resulted in a success.");    
        }
        connectActions();
        
    } else if (turn === 1) {
            alert("It's " + currentEnemy.name + "'s turn!");
    } else if (turn === 2) {
            alert("Refresh to start over!");
    } else {
            alert("Press the assigned button to advance.");    
    }
}

//Counter Attack

function counter_attack(aChance) {
        if ((Math.floor(Math.random() * 10 + 1)) < aChance) {
            document.getElementById("message").innerHTML = currentEnemy.name + " missed!";
            turn = 0;
            console.log("The counterattack resulted in a failure.");
            connectActions();
        } else {
            if ((Math.floor(Math.random() * 10 + 1)) <= 6) {
                document.getElementById("message").innerHTML = currentEnemy.name + " successfully hit you! [-" + currentEnemy.a1 + " HP]";
                health = health - currentEnemy.a1;
                document.getElementById("healthDisplay").innerHTML = "HP: " + health;
                turn = 0;
                console.log("The counterattack resulted in a success (size 1).");
                connectActions();
            }
            else if (6 < (Math.floor(Math.random() * 10 + 1)) < 10) {
                document.getElementById("message").innerHTML = currentEnemy.name + " successfully hit you! [-" + currentEnemy.a2 + " HP]";
                health = health - currentEnemy.a2;
                document.getElementById("healthDisplay").innerHTML = "HP: " + health;
                turn = 0;
                console.log("The counterattack resulted in a success (size 2)."); 
                connectActions();
            }
            else {
                document.getElementById("message").innerHTML = currentEnemy.name + " successfully hit you! [-" + currentEnemy.a3 + " HP]";
                health = health - currentEnemy.a3;
                document.getElementById("healthDisplay").innerHTML = "HP: " + health;
                turn = 0;
                console.log("The counterattack resulted in a success (size 3).");
                connectActions();
            } 
        }
    saveGame();
}

//Functions which connect other functions and check for the end of the game

function connectActions() {
    check_hp();
    if (block_parameter === 0) {
        if (turn === 0) {
            console.log("Attack has been permitted.");
        } 
        else if (turn === 1) {
            window.setTimeout(function(){counter_attack(7)}, 2000);    
        }
    }
}

function check_hp() {
    if (health <= 0) {
        block_parameter = 1;
        health = 0;
        document.getElementById("healthDisplay").innerHTML = "HP: 0";
        document.getElementById("message").innerHTML = "You've lost to " + currentEnemy.name + "! Refresh to start again.";
        turn = 2;
    }
    else if (e_health <= 0) {
        block_parameter = 1;
        //e_health = 0;
        document.getElementById("ehealthDisplay").innerHTML = "HP: 0";
        document.getElementById("message").innerHTML = "You've successfully defeated " + currentEnemy.name + "!";
        turn = 3;
        window.setTimeout(function(){nextLevel()}, 2500);
    } 
}

//Next Level

function nextLevel() {
    level += 1;
    section += 1;
    if (section < enemyList.length) {
        document.getElementById("message").innerHTML = "Choose a bonus!";
        document.getElementById("bonusHealth").style.display = "inline-table";
        document.getElementById("bonusStrength").style.display = "inline-table";    
    }
    else {
        document.getElementById("message").innerHTML = "This is the end for now. I'm out of enemies. Thanks for playing!"
    }
}

//Bonus Butttons

function bonusHealth() {
    original_health += 7;
    document.getElementById("bonusHealth").style.display = "none";
    document.getElementById("bonusStrength").style.display = "none";
    //selectEnemy(enemyList);
    document.getElementById("attackButtons").style.display = "none";
    document.getElementById("startButton").style.display = "inline";
    turn = 0;
    setup(0);
}

function bonusStrength() {
    for (var i = 0; i < attackStrength.length; i++) {
        attackStrength[i] += 2;
    }
    document.getElementById("bonusHealth").style.display = "none";
    document.getElementById("bonusStrength").style.display = "none";
    //selectEnemy(enemyList);
    document.getElementById("attackButtons").style.display = "none";
    document.getElementById("startButton").style.display = "inline";
    turn = 0;
    setup(0);
}

//Show the stats
var statsParam = 0;

function showStats() {
    if (statsParam === 0) {
        document.getElementById("statsDisplay1").style.visibility = "hidden";
        document.getElementById("statsDisplay2").style.visibility = "hidden";
        document.getElementById("left-column1").style.width = "100%";
        document.getElementById("left-column2").style.width = "100%";
        document.getElementById("left-column3").style.width = "100%";
        statsParam = 1;
    }
    else if (statsParam === 1) {
        document.getElementById("statsDisplay1").style.visibility = "visible";
        document.getElementById("statsDisplay2").style.visibility = "visible";
        document.getElementById("left-column1").style.width = "60%";
        document.getElementById("left-column2").style.width = "60%";
        document.getElementById("left-column3").style.width = "60%";
        statsParam = 0;
    }
}
    

//Devtools

var devID = 0;

function toggleDevtools() {
    if (devID === 0) {
        document.getElementById("devTools").style.display = "none";
        devID = 1;
    }
    else if (devID === 1) {
        document.getElementById("devTools").style.display = "block";
        devID = 0;
    }
}

