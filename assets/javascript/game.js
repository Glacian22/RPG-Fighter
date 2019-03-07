$(document).ready(function () {

    var gameState = "start";
    var characters = [];
    var victories;
    var player;
    var enemy;

    //attack button starts off hidden
    $(".btn").hide();

    //function to build character objects
    function character(name, HP, ATK, restImg) {
        this.name = name;
        this.HP = HP;
        this.ATK = ATK;
        this.restImg = restImg;
    }



    restartGame();

    //sets character stats onscreen
    function refreshStats() {
        for (var i = 0; i < characters.length; i++) {
            $("." + characters[i].name + "-stats").html("Name: " + characters[i].name + "<br> HP: " + characters[i].HP + "<br> ATK: " + characters[i].ATK)
        }
    }

    //resets everything
    function restartGame() {

        //create character objects
        characters[0] = new character("Wizard", 14, 30, "images/wizard.jpg");
        characters[1] = new character("Knight", 40, 2, "images/knight.jpg");
        characters[2] = new character("Priest", 6, 5, "images/priest.jpg");
        characters[3] = new character("Thief", 15, 8, "images/thief.jpg");

        gameState = "start";
        victories = 0;

        //initialize character stats and bios
        refreshStats();

        $(".btn").hide();
        $(".btn").html("Attack!");

        $(".character").attr("status", "inactive");
        $(".character").show();
        $(".character").fadeIn();
        $(".alert-field").html("Choose Your Character")
    }

    //start game code


    //game is driven by click events
    $(".character").on("click", function () {
        console.log("character clicked, gameState: " + gameState)

        //set player character
        if (gameState === "start") {
            console.log("gamestate: start")

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
            console.log("gamestate: selectEnemy")

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
            }, 3000);
            gameState = "battle";
            setTimeout(function () {
                $(".alert-field").html("You will do more damage every time you attack!");
            }, 2000)
        }
    });

    //battle mode ENGAGE
    $(".btn").on("click", function () {

        if (gameState === "done") {
            restartGame();
        }

        if (gameState === "battle") {

            $(".alert-field").html(characters[enemy].name + " takes damage!");

            //deduct HP from enemy, and display it
            characters[enemy].HP -= characters[player].ATK;
            characters[player].ATK += 5;

            //play the "took damage" animation
            $("." + characters[enemy].name + "-img").css("animation", "shake 0.5s");
            setTimeout(function () {
                $("." + characters[enemy].name + "-img").css("animation", "");
            }, 500);

            //redraw stats onscreen
            if (characters[enemy].HP < 0) {
                characters[enemy].HP = 0;
            }
            refreshStats();

            //kill enemy if their HP drops to 0
            if (characters[enemy].HP === 0) {

                $("." + characters[enemy].name).attr("status", "dead");
                $("." + characters[enemy].name).fadeOut(3000);

                victories++;

                $(".alert-field").html("The " + characters[enemy].name + " has been defeated!");

                if (victories === (characters.length - 1)) {
                    gameState = "done";
                    $(".btn").html("Play Again?")

                    setTimeout(function () {
                        $(".alert-field").html("You are the ultimate champion");
                    }, 2000);
                } else {
                    //go select another enemy to fight
                    $(".btn").hide();
                    setTimeout(function () {
                        $("." + characters[player].name).hide();
                        $("[status=inactive]").fadeIn(1000);
                        $(".alert-field").html("Choose another opponent!");
                        gameState = "selectEnemy";
                    }, 2500);
                }
            }

            //ENEMY COUNTER ATTACK
            if (characters[enemy].HP !== 0) {
                setTimeout(function () {
                    $(".alert-field").html(characters[enemy].name + " is counter-attacking!");
                    characters[player].HP -= characters[enemy].ATK;

                    $("." + characters[player].name + "-img").css("animation", "shake 0.5s");
                    setTimeout(function () {
                        $("." + characters[player].name + "-img").css("animation", "");
                    }, 500);

                    if (characters[player].HP < 0) {
                        characters[player].HP = 0;
                        console.log("Player health zero");
                    }
                    refreshStats();
                }, 1500);


                //Game Over if player died
                setTimeout(function () {
                    if (characters[player].HP === 0) {
                        $(".alert-field").html("YOU DEAD");
                        $(".btn").html("Play Again?")
                        gameState = "done";
                    }
                }, 2500);
            }


        }



    });












});