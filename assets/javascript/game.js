$(document).ready(function () {

    var gamestate = "start";


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
    var player="";

    //start game code

    $(".alert-field").html("Choose Your Character")

    //set player character
    $(".character").on("click", function () {
        player=$(this).attr("name");
        console.log("character is: ", player)

        //set the player character
        $(".alert-field").html("You are the " + player + "!");

        //hide the player character to choose enemy
        // $(".wizard").fadeOut();
        $(this).hide()
    });














});