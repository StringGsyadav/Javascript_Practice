// let oil="1000 barells";
// export default oil;

function getName(str){
    console.log(`Name of Candidate is : ${str}`);
}

function getDetails(name,age,address){
    console.log(`Name of Candidate is  : ${name}`);
    console.log(`age of Candidate is  : ${age}`);
    console.log(`address of Candidate is  : ${address}`);
}


let func =(a,b)=>{
    console.log(a+b);
}

export default {getName,getDetails,func};
