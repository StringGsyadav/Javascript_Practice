function getUserDetails(comp_name,sal){
    console.log(this);
    if (this.age>18 && this.age<60) {
    console.log(`You get salary : ${sal} and Company name is  : ${comp_name}`);
      return  console.log(`${this.name} : hey! You are eligible to work in Company`);
        
    }
    else if(this.age>16){
       return console.log(`${this.name} : You are a student and go for internship`);
    }
    else{
        return console.log(`you are a Kid`);
    }

}

const user1={
    name:'Aman',
    age:45
}


const user2={
    name:'Depansu',
    age:26
}


const user3={
    name:'Anuj',
    age:15
}


const user4={
    name:'RamKewal',
    age:6
}


getUserDetails.apply(user4,['Qspiders Noida',23000]);