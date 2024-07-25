let array=[1,[2,3],[4,[5,6],7],[8,9],10];
let empArray=[];
let res=array.map((x)=>{
    if(typeof x=="object"){
       let  newEmpArray=[...empArray,...x];
        empArray=newEmpArray;
    }
    else{
        empArray.push(x)
    }
});

console.log(empArray);

let s1="Neeraj";
console.log(s1.split("").reverse().join(""));