// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise 1 resolved");
//         resolve();
//     }, 2000)
// })
// promiseOne.then(function(){
//     console.log("Promise 1 consumed");
    
// })

// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve()
//     }, 1000)
// })

const promisefive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username: "Hitesh", password: "123"})
        }
        else{
            reject("Error: Something went wrong")
        }
    }, 1000);
})

async function consumepf() {
    const response = await promisefive
    console.log(response);
    
    
}
console.log("somerhing working");
