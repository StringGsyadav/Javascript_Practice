// // console.log("elcome to you in js");
// let obj={};
// console.log(obj);

// let obj1={
//     name:'Gauri Shankar Yadav',
// }

// console.log(obj1);


// function getUserData(name,course,address,contact){
//     this.name=name;
//     this.course=course;
//     this.address=address;
//     this.contact=contact;
// }

// const user1=new getUserData("Raman","Btech","Noida",2345678);

// console.log(user1);

// let human={
//     eat:function(){
//         console.log("Human Van Eat Food and every thing");
//     },

//     sleep:function(){
//         console.log("Human Always take a rest as sleep");
//     }
// }

// let superHuman={
//     coding:function(){
//         console.log("Sper Human ");
//     }
// }

const parentData={
    song:function(name){
        console.log(`${this.name} and Designation is ${this.design} is singing ${name} song`);
    }
}

const childData={
    name:'Narendra Modi',
    design:'PM',
}

const res=Object.setPrototypeOf(childData,parentData);

// console.log(copyData);

const FinalRes=Object.getPrototypeOf(res);

console.log(FinalRes);