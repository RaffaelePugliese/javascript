function printAsyncName(callback,string){
   let greetings= setInterval(callback,1000);
   setTimeout(()=>{clearInterval(greetings),console.log(string)},2000) 
 
 
}

printAsyncName(()=>console.log("Hello"),"Raffaele")