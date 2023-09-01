function myfunction_1() {
    document.getElementById('heading').style.color='red';
    

}

function myfunction_2() {
    let box = document.getElementById('box');

    box.style.backgroundColor='blue';
    box.style.width="600px"

}

function outputtext(){
    let textvalue = document.getElementById('textinput').value;
    let para = document.getElementById('PVALUE');
    para.innerHTML= textvalue;
}


function fontchoice1() {
    let f1  = document.getElementById('font1').value;
    let changingtext1 = document.getElementById('PVALUE');
    changingtext1.style.color= f1;    
}


function fontchoice2() {
    let f1  = document.getElementById('font2').value;
    let changingtext1 = document.getElementById('PVALUE');
    changingtext1.style.color= f1;    
}



function fontchoice3() {
    let f1  = document.getElementById('font3').value;
    let changingtext1 = document.getElementById('PVALUE');
    changingtext1.style.color= f1;    
}



function adjustboxsize() {
    size = document.getElementById('boxwidth').value;
    box = document.getElementById('box');
    box.style.width = size + "px";
}

function chooseimage() {
    let choice = document.getElementById('choice').value;
    let displayimgcon = document.getElementById('imag');
    displayimgcon.src= choice;

    
    
}