

var vowel = ["ា","ិ","ី","ឹ","ឺ","ុ","ូ","ួ","ើ","ឿ","ៀ","េ","ែ","ៃ","ោ","ៅ","ុំ","ំ","ាំ","ះ","ុះ","េះ",
            "ោះ"];

var sound = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8","v9", "v10", "v11", "v12","v13"
            ,"v14", "v15", "v16", "v17", "v18", "v19", "v20", "v21", "v22", "v23"];

var id = ["vo1", "vo2", "vo3", "vo4", "vo5", "vo6", "vo7", "vo8", "vo9", "vo10", "vo11", "vo12",
        "vo13", "vo14", "vo15", "vo16", "vo17", "vo18", "vo19", "vo20", "vo21", "vo22", "vo23"];

var fun = ["play1()", "play2()", "play3()", "play4()", "play5()", "play6()", "play7()", "play8()", "play9()",
            "play10()", "play11()", "play12()", "play13()", "play14()", "play15()","paly16()",
            "play17()", "play18()", "play19()", "play20()", "play21()", "play22()", "play23()"];
            
var source_vowel = "";
var data_vowel =" ";
for (let i in id){
    source_vowel += `<audio  id="${id[i]}" controls><source src="/vowel/${sound[i]}.mp3"></audio>`;
    data_vowel += `<div class="col-3"><button type="button" class="btn btn-secondary py-3 mt-4 fs-5" onclick="${fun[i]}">${vowel[i]}</button></div>`;
}

document.getElementById("audio").innerHTML = source_vowel;
document.querySelector(".bb").innerHTML = data_vowel;

function play1(){document.getElementById("vo1").play();}
function play2(){document.getElementById("vo2").play();}
function play3(){document.getElementById("vo3").play();}
function play4(){document.getElementById("vo4").play();}
function play5(){document.getElementById("vo5").play();}
function play6(){document.getElementById("vo6").play();}
function play7(){document.getElementById("vo7").play();}
function play8(){document.getElementById("vo8").play();}
function play9(){document.getElementById("vo9").play();}
function play10(){document.getElementById("vo10").play();}
function play11(){document.getElementById("vo11").play();}
function play12(){document.getElementById("vo12").play();}
function play13(){document.getElementById("vo13").play();}
function play14(){document.getElementById("vo14").play();}
function play15(){document.getElementById("vo15").play();}
function paly16(){document.getElementById("vo16").play();}
function play17(){document.getElementById("vo17").play();}
function play18(){document.getElementById("vo18").play();}
function play19(){document.getElementById("vo19").play();}
function play20(){document.getElementById("vo20").play();}
function play21(){document.getElementById("vo21").play();}
function play22(){document.getElementById("vo22").play();}
function play23(){document.getElementById("vo23").play();}
