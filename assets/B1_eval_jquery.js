/* --------------------------------------------------------------------------

Votre code ici

-------------------------------------------------------------------------- */

let checkboxStatus = 0;
let sizeActual = 50;


// Fonction pour Partie 1
function part1_q1() {
    $(document).on("click", "#toggleRedSquare", function () {
        if (checkboxStatus == 0) {
            checkboxStatus = 1;
            $(".redsquare-app").addClass("is-active");
            $(".redsquare-controls button").removeAttr("disabled");
        }
        else {
            checkboxStatus = 0;
            $(".redsquare-app").removeClass("is-active");
            $(".redsquare-controls button").attr("disabled", "");
        }
        console.log(checkboxStatus)
    });
}

function part1_q3() {
    $(document).on("click", "#scaleUp", function () {
        if (checkboxStatus == 1) {
            $(".square").css("width", "+=20");
            $(".square").css("height", "+=20");
            sizeActual += 20;
        }
    });
}

function part1_q4() {
    $(document).on("click", "#scaleDown", function () {
        if ((checkboxStatus == 1) && (sizeActual > 50)) {
            $(".square").css("width", "-=20");
            $(".square").css("height", "-=20");
            sizeActual -= 20;
        }
    });
}

function part1_q5() {
    $(document).on("click", "#shapeCircle", function () {
        if (checkboxStatus == 1) {
            $(".square").css("border-radius", "50%");
        }
    });
}

function part1_q6() {
    $(document).on("click", "#shapeSquare", function () {
        if (checkboxStatus == 1) {
            $(".square").css("border-radius", "0%");
        }
    });
}

function jumbotron() {
    // Question 1


    // Question 2

    $(".jumbotron ul").addClass("list-group");
    $(".jumbotron li").addClass("list-group-item");

    // Question 3
    
    $("ul").siblings("a").prepend('<i class="fa fa-plus-circle"></i> ')

    // Question 4

    $(".jumbotron p i").text($(".jumbotron").data("source"))
    
    // Question 5

    $(".team").parent(".jumbotron").css("color", "red")

}







$(function() {
    console.log("Chargement JS - OK");
    part1_q1();
    part1_q3();
    part1_q4();
    part1_q5();
    part1_q6();
    jumbotron();

});