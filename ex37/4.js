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

// function rescueData(){
//     return new Promise((resolve,reject)=>{
//     let success = Math.random()
//     if(success<0.5){
//         resolve('data retrieved successfully')
//     }else if(success>0.5 ){
//        reject(new Error(' Error: Failed to fetch data'))
//     }
//     })
// }


// rescueData()
// .then((result)=>console.log(result))
// .catch((result)=>console.log(result))
// Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
//  -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
//  -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
// -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

//  let promise=()=>{
//         return new Promise((resolve,reject)=>{
//          setTimeout(()=>(resolve( { id: 1, name: 'John' })),2000)
//         })
//     }
//     let promiseArr=(userId)=>{
//         return new Promise((resolve,reject)=>{
//             const post= ['Post 1', 'Post 2', 'Post 3']
//          setTimeout(()=>(resolve(userId,post )),2000)
//         })
//     }



// promise()
// .then((data)=>promiseArr(data))
// .then((data)=>console.log(data))





/*{ <script>
const h2 = document.querySelector("h2");
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data);
  data.forEach(element=> {h2.innerHTML = element.title})
}
getData();
</script>} */
// async function postData(event) {
//     event.preventDefault();
//     const text = document.querySelector("#todo-title").value;
//     const flagged = document.querySelector("#todo-completed").checked;
//     const post = {
//       title: text,
//       completed: flagged,
//     };
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         method: "POST",
//         body: JSON.stringify(post),
//       }
//     );
//   }
// document.querySelector('form').addEventListener('submit', postData)