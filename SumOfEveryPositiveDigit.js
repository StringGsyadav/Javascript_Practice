let arr=[1,-4,12,0,-3,29,-150];
const res=arr.filter(val=>{
    if(val>0){
        return val;
    }
}).reduce((a,b)=>{
    return a+b;
})

console.log(res);