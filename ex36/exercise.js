const number = 15;
let checkNumber = (number)=>{
return new Promise((resolve,reject)=>{
if(number>10){
    resolve(`Number ${number} is greater then 10`)
}else{
    reject(`Number ${number} isn't greater then 10`)
}
})
}

checkNumber(number)
.then((Message)=>{console.log(`Resolved:${Message}`)})
.catch((error)=>{console.log(`Rejected:${error}`)})
