// const a=document.createElement('h1');
// console.log(a);
// a.textContent="Hello ! World";
// const b=document.getElementsByTagName('h1');


const head=document.createElement('h1');
const para=document.createElement('p');
const span=document.createElement('span');
head.textContent="Learning Dom";
para.textContent="Like Share And Subscribe";
span.textContent="2nd Child Element";


const div=document.querySelector('#div');
div.insertAdjacentElement('beforebegin',head);
div.insertAdjacentElement('afterend',para);


const div2=document.querySelector('#div2');
div2.insertAdjacentElement('afterend',span);