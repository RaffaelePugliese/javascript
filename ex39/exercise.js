async function listToDos(url){
    let response = await fetch(url,{
    
    })
    let datas = await response.json();
    return datas
}
listToDos('https://jsonplaceholder.typicode.com/todos')
.then((response)=>console.log(response))
