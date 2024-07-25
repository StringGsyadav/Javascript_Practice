// const user=
// {
//     userId:1122,
//     userName:'Tinku',
//     company:
//        {
//           companyName:'ITC Infotech',
//           country:
//              {
//                 countryName:'India',
//                 state:'Maharashtra',
//                 city:'Pune'
//             }        
//     }
// };
function createUser(userId,userName,companyName,countryName,state,city){
    this.userId=userId;
    this.userName=userName;
    this.company=new company(companyName,countryName,state,city);
}

function company(companyName,countryName,state,city){
    this.companyName=companyName;
    this.address=new country(countryName,state,city);
};

function country(countryName,state,city){
    this.countryName=countryName;
    this.state=state;
    this.city=city;
}

const users=new createUser(121,'Anuj Bind','Noida Cricket Stadium','India','Uttar Pradesh','Mirzapur');
console.log(users);