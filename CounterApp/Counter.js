let count=0;
let countData=document.getElementById("count");
function increment(){
    count+=1;
    countData.textContent=count;
} 
function decrement(){
   if(count>0){
    count-=1;
    countData.textContent=count;
   }
}