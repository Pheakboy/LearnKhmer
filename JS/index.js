$(document).ready(function () {
    var n = 0;
    $("#bar_show").click(function () {
        if (n == 0) {
            n = 1;
            $(".ver-menu").css({ "display": "block", "transition": "all 0.5s" });
        } else {
            n = 0;
            $(".ver-menu").css({ "display": "none" });
        }
    });

});