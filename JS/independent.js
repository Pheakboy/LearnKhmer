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

var independent = ["ឥ","ឦ","ឧ","ឩ","ឪ","ឫ","ឬ","ឭ","ឮ","ឯ","ឰ","ឱ","ឱ"];
var id          = ["ind1", "ind2", "ind3", "ind4", "ind5", "ind6", "ind7", "ind8","ind9", "ind10", "ind11", "ind12","ind13"];
var fun         = ["play1()", "play2()", "play3()", "play4()", "play5()", "play6()", "play7()", "play8()", "play9()",
                  "play10()", "play11()", "play12()", "play13()"];
var sound       = ["in1", "in2", "in3", "in4", "in5", "in6", "in7", "in8", "in9", "in10", "in11", "in12",
                  "in13"];
var data = "";
var letter = "";
for (let i in id){
    data += `<audio id="${id[i]}" controls><source src="/special/${sound[i]}.mp3" type="audio/mpeg"></audio>`;
    letter += `<div class="col-3"><button type="button" class="btn btn-secondary py-3 mt-4 fs-5" onclick="${fun[i]}">${independent[i]}</button></div>`
}
document.getElementById("audio").innerHTML = data;
document.querySelector(".bb").innerHTML=letter;
function play1(){document.getElementById("ind1").play();}
function play2(){document.getElementById("ind2").play();}
function play3(){document.getElementById("ind3").play();}
function play4(){document.getElementById("ind4").play();}
function play5(){document.getElementById("ind5").play();}
function play6(){document.getElementById("ind6").play();}
function play7(){document.getElementById("ind7").play();}
function play8(){document.getElementById("ind8").play();}
function play9(){document.getElementById("ind9").play();}
function play10(){document.getElementById("ind10").play();}
function play11(){document.getElementById("ind11").play();}
function play12(){document.getElementById("ind12").play();}
function play13(){document.getElementById("ind13").play();}
