function repeatHello(callback){
    let sayHi= setInterval(callback,5000)
    setTimeout(()=>{clearInterval(sayHi)},5000)
 }
 
 repeatHello(()=>console.log("hello"))
