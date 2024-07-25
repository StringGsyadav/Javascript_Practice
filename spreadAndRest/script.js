const item1={
    name:'Shirt',
    price:3500
}

const item2={
    name:'Biscuite',
    price:15000
}

function getCart(...all){
  const itemPrice=all.reduce((total,val)=>{
    total=total+val.price;
    return  total
  },0)

  return console.log(itemPrice);;
}

getCart(item1,item2);