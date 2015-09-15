//Cookies and Stuff

function saveGame() {
    if(Cookies.enabled) {
        Cookies.set("health",health, { expires: Infinity });
        Cookies.set("original_health",original_health, { expires: Infinity });
        Cookies.set("e_health",e_health, { expires: Infinity });
        Cookies.set("level",level, { expires: Infinity });
        Cookies.set("section",section, { expires: Infinity });
        Cookies.set("currentEnemy_name",currentEnemy, { expires: Infinity });
        Cookies.set("turn",turn, { expires: Infinity });
        Cookies.set("block_parameter",block_parameter, { expires: Infinity });
        Cookies.set("attackChance0",attackChance[0], { expires: Infinity });
        Cookies.set("attackChance1",attackChance[1], { expires: Infinity });
        Cookies.set("attackChance2",attackChance[2], { expires: Infinity });
        Cookies.set("attackStrength0",attackStrength[0], { expires: Infinity });
        Cookies.set("attackStrength1",attackStrength[1], { expires: Infinity });
        Cookies.set("attackStrength2",attackStrength[2], { expires: Infinity });
        Cookies.set("currentEnemy_name",currentEnemy.name, { expires: Infinity });
        Cookies.set("currentEnemy_health",currentEnemy.health, { expires: Infinity });
        Cookies.set("currentEnemy_a1",currentEnemy.a1, { expires: Infinity });
        Cookies.set("currentEnemy_a2",currentEnemy.a2, { expires: Infinity });
        Cookies.set("currentEnemy_a3",currentEnemy.a3, { expires: Infinity });
        Cookies.set("currentEnemy_section",currentEnemy.section, { expires: Infinity });
    }
    else {
        document.getElementById("cookieMessage").innerHTML = "JSFight uses cookies to save the game. Enable cookies in order to save the game.";                    
    }
}

function loadGame() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameTable").style.display = "inline";
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
    document.getElementById("bonusHealth").style.display = "none";
    document.getElementById("bonusStrength").style.display = "none";
    document.getElementById("message").innerHTML = "---";
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
    console.log("Setup has run");
    console.log("Enemy: " + currentEnemy.name);
}