


function getUser(){
    console.log(this);
    console.log(`User anme is : ${this.name} and age is  : ${this.age} yrs.`);
}

let user1={
    name:'Anuj Bind',
    age:13,
};

let user2={
    name:'Omprakash Bind',
    age:27,
}
const getUserData=getUser.bind(user2);
getUserData();