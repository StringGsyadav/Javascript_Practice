let start=prompt(`Enter start Number.`);
let numStart=Number(start);
// console.log(numStart);

let end=prompt(`Enter Second range  Number.`);
let numEnd=Number(end);

let count=0;

for(;numStart<numEnd;numStart++){
    if(numStart%2==0){
        document.write(`\n`+numStart);
        count+=1;
    }
}

console.log(`${start} and ${numEnd} between all even numbers are  : ${count}`);