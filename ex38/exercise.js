const isLogged = true;
let promise = (isLogged)=>{
    return new Promise((resolve,reject) => {
        if(isLogged == true){
            resolve(Math.random())
        }else{
            reject(new Error('error!'))
        }
    })
}
let checkId = (isLogged)=>{
    return new Promise((resolve,reject) => {
        if(isLogged>0.5){
            resolve({name: "John", age: 24})
        }else{
            reject(new Error('error!'))
        }
    })
}

let userId = ({name , age})=>{
    throw new Error('some new error')
 return {name,age}

}

promise(isLogged)
.then(checkId)
.then(userId)
.then((name,age)=>console.log(name,age))
.then((val)=>console.log(val))
.catch((err)=>console.error(err))
.finally(console.log('finally'))
