// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.
// let promise=()=>{
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>(resolve('done!')),2000)
//     })
// }

// promise()
// .then((result)=>console.log(result))
// Crea una Promise che simula il recupero dei dati da un
// 'API. A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore.

// -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5

// -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 
// altrimenti fallisce con il messaggio Error: Failed to fetch data

function rescueData(){
    return new Promise((resolve,reject)=>{
    let success = Math.random()
    if(success<0.5){
        resolve('data retrieved successfully')
    }else if(success>0.5 ){
       reject(new Error(' Error: Failed to fetch data'))
    }
    })
}


rescueData()
.then((result)=>console.log(result))
.catch((result)=>console.log(result))