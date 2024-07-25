function Car(name,model,user){
    console.log(this);
    this.name=name;
    this.model=model;
    this.user=user;
}

Car.prototype.color='Black';
Car.prototype.price=234500;
Car.prototype.drivimg=function(){
    console.log(`${this.user} Driving ${this.name} and MOdel is : ${this.model}`);
}

const car1Info=new Car('Thar','Mx2300','Anuj Kumar Bind');
const car2Info=new Car('TharJeep','Mxy2300','Gauri Shakar Yadav');

// console.log(car1Info.drivimg);
// console.log(car2Info.price);

car1Info.drivimg();
car2Info.drivimg();    