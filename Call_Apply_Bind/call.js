function getDetails(comp_name,sal){
    console.log(this);
    console.log(this.name);
    console.log(this.course);
    console.log(this.address);
    console.log(`Company Name is ${comp_name}  and Salary is : ${sal}`);
}

const user1={
    name:"Gauri Shankar Yadav",
    course:"Web Development",
    address:"Bhadohi"
};

const user2={
    name:"Ama Dhatrawal",
    course:"Java Development",
    address:"Noida,Khora Colony Uttar Pradesh",
}

getDetails.call(user1,"Business Thrust",24000);