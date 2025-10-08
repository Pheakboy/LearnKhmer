
// category 1
var id = ["con1", "con2", "con3", "con4", "con5", "con6", "con7", "con8", "con9", "con10", "con11", "con12",
        "con13", "con14", "con15", "con16", "con17", "con18", "con19", "con20", "con21", "con22", "con23",
        "con24", "con25", "con26", "con27", "con28", "con29", "con30", "con31", "con32", "con33"];
var sound = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8","c9", "c10", "c11", "c12","c13"
            ,"c14", "c15", "c16", "c17", "c18", "c19", "c20", "c21", "c22", "c23", "c24","c25",
            "c26", "c27", "c28", "c29", "c30", "c31", "c32", "c33"];
var letter =["ក្ក","ខ្ខ","គ្គ","ឃ្ឃ","ង្ង","ច្ច","ឆ្ឆ","ជ្ជ","ឈ្ឈ","ញ្ញ","ដ្ដ","ឋ្ឋ","ឌ្ឌ","ឍ្ឍ","ណ្ណ","ត្ត","ថ្ថ","ទ្ទ","ធ្ធ","ន្ន",
            "ប្ប","ផ្ផ","ព្ព","ភ្ភ","ម្ម","យ្យ","រ្រ","ល្ល","វ្វ","ស្ស","ហ្ហ","ឡ","អ្អ"];
var fun = ["play1()", "play2()", "play3()", "play4()", "play5()", "play6()", "play7()", "play8()", "play9()",
            "play10()", "play11()", "play12()", "play13()", "play14()", "play15()","paly16()",
            "play17()", "play18()", "play19()", "play20()", "play21()", "play22()", "play23()","play24()",
            "play25()", "play26()", "play27()", "play28()", "play29()", "play30()", "play31()","play32()","play33()"];
var data ="";
var alphabet ="";
for (let i in id){
    data += `<audio id="${id[i]}" controls><source src="/constant/${sound[i]}.mp3" type="audio/mpeg"></audio>`;
    alphabet += `<div class="col-3"><button type="button" class="btn btn-secondary py-3 mt-5 fs-5" onclick="${fun[i]}">${letter[i]}</button></div>`
}
document.getElementById("audio").innerHTML = data;
document.querySelector(".bb").innerHTML=alphabet;

// function for play sound when click
function play1(){document.getElementById("con1").play();}
function play2(){document.getElementById("con2").play();}
function play3(){document.getElementById("con3").play();}
function play4(){document.getElementById("con4").play();}
function play5(){document.getElementById("con5").play();}
function play6(){document.getElementById("con6").play();}
function play7(){document.getElementById("con7").play();}
function play8(){document.getElementById("con8").play();}
function play9(){document.getElementById("con9").play();}
function play10(){document.getElementById("con10").play();}
function play11(){document.getElementById("con11").play();}
function play12(){document.getElementById("con12").play();}
function play13(){document.getElementById("con13").play();}
function play14(){document.getElementById("con14").play();}
function play15(){document.getElementById("con15").play();}
function paly16(){document.getElementById("con16").play();}
function play17(){document.getElementById("con17").play();}
function play18(){document.getElementById("con18").play();}
function play19(){document.getElementById("con19").play();}
function play20(){document.getElementById("con20").play();}
function play21(){document.getElementById("con21").play();}
function play22(){document.getElementById("con22").play();}
function play23(){document.getElementById("con23").play();}
function play24(){document.getElementById("con24").play();}
function play25(){document.getElementById("con25").play();}
function play26(){document.getElementById("con26").play();}
function play27(){document.getElementById("con27").play();}
function play28(){document.getElementById("con28").play();}
function play29(){document.getElementById("con29").play();}
function play30(){document.getElementById("con30").play();}
function play31(){document.getElementById("con31").play();}
function play32(){document.getElementById("con32").play();}
function play33(){document.getElementById("con33").play();}


// category 2
var con_cat2 = ["ក្ក","ខ្ខ","ច្ច","ឆ្ឆ","ដ្ដ","ឋ្ឋ","ណ្ណ","ត្ត","ថ្ថ","ប្ប","ផ្ផ","ស្ស","ហ្ហ","ឡ","អ្អ"];
var fun_cat2 = ["playC1();", "playC2();", "playC3();", "playC4();", "playC5()", "playC6()", "playC7()", "playC8()",
                "playC9()", "playC10()", "playC11()", "playC12()", "playC13()", "playC14()", "playC15()"];
var source_cat2 = ["cc1", "cc2", "cc3", "cc4", "cc5", "cc6", "cc7", "cc8", "cc9", "cc10", "cc11", "cc12", "cc13",
                "cc14", "cc15"];
var id_cat2 = [ "id_cc1", "id_cc2","id_cc3", "id_cc4", "id_cc5", "id_cc6", "id_cc7", "id_cc8", "id_cc9",
                "id_cc10", "id_cc11", "id_cc12", "id_cc13", "id_cc14", "id_cc15"]; 
var data_cat2 = "";
var sound_cat2 = "";
for(let key in con_cat2){
    sound_cat2 += `<audio id="${id_cat2[key]}" controls><source src="/category2/${source_cat2[key]}.mp3" type="audio/mpeg"></audio>`;
    data_cat2 += `<div class="col-3"><button type="button" class="btn btn-secondary py-3 mt-4 fs-5" onclick="${fun_cat2[key]}">${con_cat2[key]}</button></div>`
}
document.getElementById("audio_cat2").innerHTML = sound_cat2;

// function for play sound when click
function playC1(){document.getElementById("id_cc1").play();}
function playC2(){document.getElementById("id_cc2").play();}
function playC3(){document.getElementById("id_cc3").play();}
function playC4(){document.getElementById("id_cc4").play();}
function playC5(){document.getElementById("id_cc5").play();}
function playC6(){document.getElementById("id_cc6").play();}
function playC7(){document.getElementById("id_cc7").play();}
function playC8(){document.getElementById("id_cc8").play();}
function playC9(){document.getElementById("id_cc9").play();}
function playC10(){document.getElementById("id_cc10").play();}
function playC11(){document.getElementById("id_cc11").play();}
function playC12(){document.getElementById("id_cc12").play();}
function playC13(){document.getElementById("id_cc13").play();}
function playC14(){document.getElementById("id_cc14").play();}
function playC15(){document.getElementById("id_cc15").play();}



// category 3
var con_cat3 = ["គ្គ","ឃ្ឃ","ង្ង","ជ្ជ","ឈ្ឈ","ញ្ញ","ឌ្ឌ","ឍ្ឍ","ទ្ទ","ធ្ធ","ន្ន","ព្ព","ភ្ភ","ម្ម","យ្យ","រ្រ","ល្ល","វ្វ"];
var fun_cat3 = ["playCC1()", "playCC2()", "playCC3()", "playCC4()", "playCC5()", "playCC6()",
                "playCC7();", "playCC8();", "playCC9()","playCC10()", "playCC11()", "playCC12()",
                "playCC13()", "playCC14()","playCC15()", "playCC16()", "playCC17()","playCC18()"];
var source_cat3 = ["ccc1","ccc2", "ccc3", "ccc4", "ccc5", "ccc6", "ccc7","ccc8", "ccc9","ccc11","ccc12",
                "ccc13", "ccc14", "ccc15", "ccc16","ccc17", "ccc18","ccc19"];
var id_cat3    = ["id_ccc1", "id_ccc2", "id_ccc3", "id_ccc4", "id_ccc5", "id_ccc6", "id_ccc7", "id_ccc8", "id_ccc9",
                "id_ccc10","id_ccc11","id_ccc12","id_ccc13","id_ccc14","id_ccc15","id_ccc16","id_ccc17","id_ccc18"];


var data_cat3="";
var sound_cat3="";
for(let key in con_cat3){
    sound_cat3 += `<audio id="${id_cat3[key]}" controls><source src="/category3/${source_cat3[key]}.mp3" type="audio/mpeg"></audio>`;
    data_cat3 += `<div class="col-3"><button type="button" class="btn btn-secondary py-3 mt-4 fs-5" onclick="${fun_cat3[key]}">${con_cat3[key]}</button></div>`
}
document.getElementById("audio_cat3").innerHTML = sound_cat3;


// function for play sound when click
function playCC1(){document.getElementById("id_ccc1").play();}
function playCC2(){document.getElementById("id_ccc2").play();}
function playCC3(){document.getElementById("id_ccc3").play();}
function playCC4(){document.getElementById("id_ccc4").play();}
function playCC5(){document.getElementById("id_ccc5").play();}
function playCC6(){document.getElementById("id_ccc6").play();}
function playCC7(){document.getElementById("id_ccc7").play();}
function playCC8(){document.getElementById("id_ccc8").play();}
function playCC9(){document.getElementById("id_ccc9").play();}
function playCC10(){document.getElementById("id_ccc10").play();}
function playCC11(){document.getElementById("id_ccc11").play();}
function playCC12(){document.getElementById("id_ccc12").play();}
function playCC13(){document.getElementById("id_ccc13").play();}
function playCC14(){document.getElementById("id_ccc14").play();}
function playCC15(){document.getElementById("id_ccc15").play();}
function playCC16(){document.getElementById("id_ccc16").play();}
function playCC17(){document.getElementById("id_ccc17").play();}
function playCC18(){document.getElementById("id_ccc18").play();}
