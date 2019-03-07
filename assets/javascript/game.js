$(document).ready(function () {

    var gameState = "start";
    var playerHP;
    var enemyHP;
    var characters = [];

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
    characters[0] = new character("Wizard", 20, 60, "images/wizard.jpg");
    characters[1] = new character("Knight", 40, 2, "images/knight.jpg");
    characters[2] = new character("Priest", 6, 5, "images/priest.jpg");
    characters[3] = new character("Thief", 15, 8, "images/thief.jpg");

    var player;
    var enemy;

    restartGame();

    //sets character stats onscreen
    // function refreshStats(){

    // }

    //resets everything
    function restartGame() {
        gameState = "start";

        //initialize character stats and bios


        for (var i = 0; i < characters.length; i++) {
            $("." + characters[i].name + "-stats").html("Name: " + characters[i].name + "<br> HP: " + characters[i].HP + "<br> ATK: " + characters[i].ATK)
        }
    }

    //start game code

    $(".alert-field").html("Choose Your Character")

    //game is driven by click events
    $(".character").on("click", function () {

        //set player character
        if (gameState === "start") {

            //match player name to character index
            for (var i = 0; i < characters.length; i++) {
                if (characters[i].name === $(this).attr("name")) {
                    player = i;
                }
            }

            console.log("character is: ", characters[player].name);
            $(this).attr("status", "active");

            //prevent multiple choices
            gameState = "none"

            //set the player character
            $(".alert-field").html("You are the " + characters[player].name + "! <br> Select your first opponent!");

            //hide the player character to choose enemy
            $(this).fadeOut(1000)

            //set gamestate for enemy selection, delay to allow for fadeout
            setTimeout(function () {
                gameState = "selectEnemy";
            }, 1000);
        }
        //if player is already selected, choose enemy to fight
        else if (gameState === "selectEnemy") {
            // enemy = $(this).attr("name");

            //match selected enemy to characters array
            for (var i = 0; i < characters.length; i++) {
                if (characters[i].name === $(this).attr("name")) {
                    enemy = i;
                }
            }


            $(".alert-field").html("Time to fight the " + characters[enemy].name + "!");
            $(this).attr("status", "active");

            //hide other characters
            $("[status=inactive]").fadeOut(1000);
            setTimeout(function () {
                $("." + characters[player].name).fadeIn(1000);
            }, 1000);
            setTimeout(function () {
                $(".btn").show();
            }, 2000);
            gameState = "battle";
        }
    });

    //battle mode ENGAGE
    $(".btn").on("click", function () {
        if (gameState === "battle") {
            //deduct HP from enemy, and display it
            // playableCharacters[playableCharacters.indexOf(enemy)]
            // $("." + enemy + "-stat")
        }


    });













});