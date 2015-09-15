
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

//ENEMY-SCRIPT

function Enemy(name, health, a1, a2, a3, section) {
    this.name = name;
    this.health = health;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.section = section;
}

var stijn = new Enemy("Stijn the Barbarian", 20, 3, 4, 5, 1);
var tom = new Enemy("Tom the No", 25, 3, 4, 5, 1);
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
var mstijn = new Enemy("Mecha Stijn the Barbarian", 40, 5, 5, 6, 5);
var mtom = new Enemy("Mecha Tom the No", 45, 5, 5, 6, 5);
var mdanny = new Enemy("Mecha Danny the Ninja", 50, 5, 5, 6, 5);
var enemyList = [[stijn, tom, danny], [dyon, marieke, kelly], [tess, sanne, thomas],[jeroen,vincent,leon],[mstijn,mtom,mdanny]];


function selectEnemy(list) {
    var randomInt = Math.floor(Math.random() * list.length);
    currentEnemy = list[section][randomInt]; 
    e_health = currentEnemy.health;
    console.log("Enemy has been selected!");
}


function setup() {
    turn = 0;
    block_parameter = 0;
    health = original_health;
    document.getElementById("attackButton1").style.display = "inline-table";
    document.getElementById("attackButton2").style.display = "inline-table";
    document.getElementById("attackButton3").style.display = "inline-table";
    document.getElementById("bonusHealth").style.display = "none";
    document.getElementById("bonusStrength").style.display = "none";
    selectEnemy(enemyList);
    document.getElementById("message").innerHTML = "---";
    document.getElementById("healthDisplay").innerHTML = "<p>HP: " + health + "</p>";
    document.getElementById("ehealthDisplay").innerHTML = "<p>Enemy HP: " + currentEnemy.health + "</p>";
    document.getElementById("enemyNameDisplay").innerHTML = "<p>" + currentEnemy.name + "</p>";
    document.getElementById("levelDisplay").innerHTML = "<p>Level " + level + "</p>";
    console.log("Setup has run");
    console.log("Enemy: " + currentEnemy.name);
}


//Attack function

function attack(aChance, aStrength) {
    if (turn === 0) {
        if ((Math.floor(Math.random() * 10 + 1)) < aChance) {
            document.getElementById("message").innerHTML = "<p>You missed!</p>";
            turn = 1;
            console.log("The attack resulted in a failure.");
        } else {
            document.getElementById("message").innerHTML = "<p>You've succesfully hit " + currentEnemy.name + "! [-" + aStrength + " " + currentEnemy.name + "'s HP]</p>";
            e_health = e_health - aStrength;
            document.getElementById("ehealthDisplay").innerHTML = "<p>Enemy HP: " + e_health + "</p>";
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

function counter_attack(aChance) {
        if ((Math.floor(Math.random() * 10 + 1)) < aChance) {
            document.getElementById("message").innerHTML = "<p>" + currentEnemy.name + " missed!</p>";
            turn = 0;
            console.log("The counterattack resulted in a failure.");
            connectActions();
        } else {
            if ((Math.floor(Math.random() * 10 + 1)) <= 6) {
                document.getElementById("message").innerHTML = "<p>" + currentEnemy.name + " succesfully hit you! [-" + currentEnemy.a1 + " HP]</p>";
                health = health - currentEnemy.a1;
                document.getElementById("healthDisplay").innerHTML = "<p>HP: " + health + "</p>";
                turn = 0;
                console.log("The counterattack resulted in a success.");
                connectActions();
            }
            else if (6 < (Math.floor(Math.random() * 10 + 1)) < 10) {
                document.getElementById("message").innerHTML = "<p>" + currentEnemy.name + " succesfully hit you! [-" + currentEnemy.a2 + " HP]</p>";
                health = health - currentEnemy.a2;
                document.getElementById("healthDisplay").innerHTML = "<p>HP: " + health + "</p>";
                turn = 0;
                console.log("The counterattack resulted in a success."); 
                connectActions();
            }
            else {
                document.getElementById("message").innerHTML = "<p>" + currentEnemy.name + " succesfully hit you! [-" + currentEnemy.a3 + " HP]</p>";
                health = health - currentEnemy.a3;
                document.getElementById("healthDisplay").innerHTML = "<p>HP: " + health + "</p>";
                turn = 0;
                console.log("The counterattack resulted in a success.");
                connectActions();
            } 
        }
}

function connectActions() {
    check_hp();
    if (block_parameter === 0) {
        if (turn === 0) {
            console.log("Attack has been permitted.");
        } 
        else if (turn === 1) {
            window.setTimeout(function(){counter_attack(6)}, 2000);    
        }
    }
}

function check_hp() {
    if (health <= 0) {
        block_parameter = 1;
        health = 0;
        document.getElementById("healthDisplay").innerHTML = "<p>HP: 0</p>";
        document.getElementById("message").innerHTML = "<p>You've lost to " + currentEnemy.name + "! Refresh to start again.</p>";
        turn = 2;
    }
    else if (e_health <= 0) {
        block_parameter = 1;
        ehealth = 0;
        document.getElementById("ehealthDisplay").innerHTML = "<p>HP: 0</p>";
        document.getElementById("message").innerHTML = "<p>You've succesfully defeated " + currentEnemy.name + "!</p>";
        turn = 3;
        window.setTimeout(function(){nextLevel()}, 2500);
    } 
}

function nextLevel() {
    level += 1;
    section += 1;
    if (section < enemyList.length) {
        document.getElementById("message").innerHTML = "<p>Choose a bonus!</p>";
        document.getElementById("bonusHealth").style.display = "inline-table";
        document.getElementById("bonusStrength").style.display = "inline-table"
        document.getElementById("attackButton1").style.display = "none";
        document.getElementById("attackButton2").style.display = "none";
        document.getElementById("attackButton3").style.display = "none";
    }
    else {
        document.getElementById("message").innerHTML = "This is the end for now. I'm out of enemies. Thanks for playing!"
    }
}

function bonusHealth() {
    original_health += 5;
    setup();
}

function bonusStrength() {
    for (var i = 0; i < attackStrength.length; i++) {
        attackStrength[i] += 2;
    }
    setup();
}