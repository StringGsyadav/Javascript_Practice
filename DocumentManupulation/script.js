// const main=document.querySelector('main');
// console.log(main);

let heading=document.querySelector('h1');

heading.setAttribute('id','event');

let selHead=document.getElementById('event');

function OnHeading(){
    selHead.style.color="Red";
    selHead.style.fontSize="32px";
}

let inputValue=document.querySelector('input');

let inValue=inputValue.value;


function checkEven(){
    if(inValue%2==0){
        document.querySelector('h3').textContent=`Result : ${inValue} is even`;
    }
    else{
        document.querySelector('h3').textContent=`Result : ${inValue} is odd`; 
    }

    console.log(inValue);
}
