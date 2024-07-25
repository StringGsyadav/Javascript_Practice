const user = [
    {
        userName: 'Siddharth',
        age: 17,
        isMarried: false,
        gender: 'M'
    },

    {
        userName: 'Chombu',
        age: 23,
        isMarried: true,
        gender: 'M'
    },

    {
        userName: 'chombi',
        age: 21,
        isMarried: true,
        gender: 'F'
    },


    {
        userName: 'Vidhi',
        age: 18,
        isMarried: false,
        gender: 'F'
    },


    {
        userName: 'Dinga',
        age: 24,
        isMarried: true,
        gender: 'M'
    },


    {
        userName: 'Simba',
        age: 28,
        isMarried: false,
        gender: 'M'
    }

]

console.log(user.userName);

const json_obj=JSON.stringify(user);
console.log(json_obj);
console.log(typeof json_obj);

const real_obj=JSON.parse(json_obj);
console.log(real_obj);
console.log(typeof real_obj);

console.log(Object.key(real_obj));


// Logic for those user who is above 18 and married and show WRT age,isMarried and gender.

// const user_above_18 = user.map((user) => {
//     return { age: user.age, isMarried: user.isMarried, gender: user.gender };
// });

// const final_res = user_above_18.filter((user) => {
//     if (user.age > 18 && user.isMarried === true) {
//         return user;
//     }
// });

// console.log(final_res);


// Logic for Question No-02 Who is not married and above 18.

// const user_above_18=user.map((user)=>{
//     return {
//         age:user.age,
//         Married:user.isMarried,
//         Gender:user.gender
//     }
// });

// const final_ress=user_above_18.filter((user)=>{
//     if(user.age>18 && user.Married===false){
//         return user;
//     }
// });

// console.log(final_ress);