// class User{
//     constructor(userName,userId,userAddress){
//         this.userName=userName;
//         this.userId=userId;
//         this.userAddress=userAddress;
//     }
// }
// const user1=new User("Gauri Shankar Yaav",2024,"Baraila Parsipur Bhadohi");

// console.log(user1);

// function student(name,id,address){
//     this.name=name;
//     this.id=id;
//     this.address=address;
// }

// const std1=new student("Suraj Kumar Bhatt",101,"Uttrakhand Nainitaal");

// console.log(std1);

// const copy_user1=user1;
// copy_user1.userName="Gauri Shankar Yadav";
// console.log(copy_user1);


// Object Copy creation

const user={
    name:"Gauri Shaka Yadav",
    address:"Baraila Parsipur Bhadohi",
    rollNo:123,
    course:"Btech",
    // getdetails:()=>{
    //     console.log(`User Name is : ${user.name}`);
    //     console.log(`User address is : ${user.address}`);
    //     console.log(`User rollno is : ${user.rollNo}`);
    //     console.log(`User course is : ${user.course}`);
    // },
    // getDetails:function(){
    //     console.log(`User name is : ${this.name}`);
    //     console.log(`User address is : ${this.address}`);
    //     console.log(`User rollno is : ${this.rollNo}`);
    //     console.log(`User course is : ${this.course}`);
    //     return user;
    // }

    color:["red","green","Blue"],
    father_Occupation:{
        fname:"Vijay Nath Yadav",
        occupation:"Account",
        fage:54,
        fQualification:["10th","12th"],
    },


}
// const user_copy=user;
user.name="Gauri Shankar Yadav";
// console.log(user_copy);
// console.log(user.getDetails());
let fatherOccupation=user.father_Occupation.fQualification;

// console.log(fatherOccupation);

for(element in fatherOccupation){
    console.log(element+`=> `+fatherOccupation[element]);
}

let colorCobination=user.color;

console.log(colorCobination);

console.log(colorCobination.reduce((a,b)=>a+b));


for (const element of colorCobination) {
    console.log(element);
}

