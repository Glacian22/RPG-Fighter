$(document).ready(function () {

    var gameState = "start";
    var playerHP;
    var enemyHP;

    //function to build character objects
    function character(name, HP, ATK, restImg) {
        this.name = name;
        this.HP = HP;
        this.ATK = ATK;
        this.restImg = restImg;
    }

    //create character objects
    var wizard = new character("Wizard", 20, 60, "images/wizard.jpg");
    var knight = new character("Knight", 40, 2, "images/knight.jpg");
    var priest = new character("Priest", 6, 5, "images/priest.jpg");
    var thief = new character("Knight", 15, 8, "images/thief.jpg");
    var player = "";
    var enemy = "";

    //start game code

    $(".alert-field").html("Choose Your Character")

    //set player character
    $(".character").on("click", function () {
        if (gameState === "start") {
            player = $(this).attr("name");
            console.log("character is: ", player)

            //set the player character
            $(".alert-field").html("You are the " + player + "! <br> Select your first opponent!");

            //hide the player character to choose enemy
            $(this).hide()

            //set gamestate for enemy selection
            gameState = "selectEnemy";

        }
        else if (gameState === "selectEnemy"){
            enemy = $(this).attr("name");
            $(".alert-field").html("Time to fight the " + enemy + "!");
            

        }
    });














});