// Your JavaScript goes here
function chooseimage() {
    let choice = document.getElementById('imgchoice').value;
    let displayimgcon = document.getElementById('imah');
    displayimgcon.src= choice;

    
    
}




function outputtext(){
    let textvalue = document.getElementById('textinput').value;
    let para = document.getElementById('text-1');
    para.innerHTML= textvalue;
}



function outputtext2(){
    let textvalue = document.getElementById('textinput2').value;
    let para = document.getElementById('text-2');
    para.innerHTML= textvalue;
}



function fontchoice1() {
    let f1  = document.getElementById('font1').value;
    let changingtext1 = document.getElementById('text-1');
    changingtext1.style.fontFamily= f1;
    document.getElementById('text-2').style.fontFamily=f1;    
}


function fontchoice2() {
    let f1  = document.getElementById('font2').value;
    let changingtext1 = document.getElementById('text-1');
    changingtext1.style.fontFamily= f1;
    
    document.getElementById('text-2').style.fontFamily=f1;    
}



function fontchoice3() {
    let f1  = document.getElementById('font3').value;
    let changingtext1 = document.getElementById('text-1');
    changingtext1.style.fontFamily= f1;  
    
    document.getElementById('text-2').style.fontFamily=f1;  
}



function choosecolor() {
    let choice = document.getElementById('colorchoice').value;
    let displayimgcon = document.getElementById('text-1');
    displayimgcon.style.color= choice;

}



function choosecolor2() {
    let choice = document.getElementById('colorchoice2').value;
    let displayimgcon = document.getElementById('text-2');
    displayimgcon.style.color= choice;

}


function adjustfontsize() {
    size = document.getElementById('fontssize').value;
    box = document.getElementById('text-1');
    box.style.fontSize = size + "px";
}



function adjustfontsize2() {
    size = document.getElementById('fontssize2').value;
    box = document.getElementById('text-2');
    box.style.fontSize = size + "px";
}


function adjuststroke(){
    textsin = document.getElementById('stroker').value;
    tostroke = document.getElementById('text-1');
    tostroke.style.webkitTextStrokeWidth = textsin + "px";
    document.getElementById('text-2').style.webkitTextStrokeWidth = textsin + "px";

}