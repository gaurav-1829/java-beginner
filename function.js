// function add(num1,num2){

//     let result=num1+num2
//     return result
// }

// const result=add(3,4)
// console.log("result :",result);


// function userloggedin(username){

//     if(username===undefined){
//         console.log("Please enter your name");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(userloggedin("gaurav"));


// const username={
//     name:"gaurav",
//     age:18,
// }

// function introduction(anyobject){

//     console.log(`hello my name is ${anyobject.name} and I am ${anyobject.age} years old`)
// }

// introduction({
//     name:"ayush",
//     age:19,
// })


const newarr=[100,200,300,400]

function returnvalue(anyarr){

    return anyarr[3]
}

console.log(returnvalue([100,300,200,500]));
