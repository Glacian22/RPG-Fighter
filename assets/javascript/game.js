$(document).ready(function () {

    var gameState = "start";
    var playerHP;
    var enemyHP;

    //attack button starts off hidden
    $(".btn").hide();

    //function to build character objects
    function character(name, HP, ATK, restImg) {
        this.name = name;
        this.HP = HP;
        this.ATK = ATK;
        this.restImg = restImg;
    }

    //create character objects
    var playableCharacters = [];
    playableCharacters[0] = new character("wizard", 20, 60, "images/wizard.jpg");
    playableCharacters[1] = new character("knight", 40, 2, "images/knight.jpg");
    playableCharacters[2] = new character("priest", 6, 5, "images/priest.jpg");
    playableCharacters[3] = new character("thief", 15, 8, "images/thief.jpg");
    var player = "";
    var enemy = "";

    restartGame();

    //resets everything
    function restartGame() {
        gameState = "start";

        //initialize character bios
        for (var i = 0; i < playableCharacters.length; i++) {
            $("." + playableCharacters[i].name + "-stats").html("Name: " + playableCharacters[i].name + "<br> HP: " + playableCharacters[i].HP + "<br> ATK: " + playableCharacters[i].ATK)
        }
    }

    //start game code

    $(".alert-field").html("Choose Your Character")

    //game is driven by click events
    $(".character").on("click", function () {

        //set player character
        if (gameState === "start") {
            player = $(this).attr("name");
            console.log("character is: ", player);
            $(this).attr("status", "active");

            //set the player character
            $(".alert-field").html("You are the " + player + "! <br> Select your first opponent!");

            //hide the player character to choose enemy
            $(this).fadeOut(1000)

            //set gamestate for enemy selection
            gameState = "selectEnemy";

        }
        //if player is already selected, choose enemy to fight
        else if (gameState === "selectEnemy") {
            enemy = $(this).attr("name");
            $(".alert-field").html("Time to fight the " + enemy + "!");
            $(this).attr("status", "active");

            //hide other characters
            $("[status=inactive]").fadeOut(1000);
            setTimeout(function () {
                $("." + player).fadeIn(1000);
            }, 1000);
            $(".btn").show();
            gameState = "battle";
        }
    });

    //battle mode ENGAGE
    $(".btn").on("click", function () {
        if (gameState === "battle") {
        }


    });













});