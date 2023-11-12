function repeatHello(callback){
   return setInterval(callback,1000)
   
}

repeatHello(()=>console.log("hello"))
// L'arrow function viene utilizzata nelle funzioni semplici per ridurre le righe di codice
// e renderlo più intuitivo 