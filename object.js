// Object litelral

// const mysym=Symbol("key1")

// const myuser={
//     "name":"gaurav",
//     age:18,
//     [mysym]:"myvalue",
//     location:"india",
//     email:"gaurav12@gmail.com",
// }

// console.log(myuser.age)
// console.log(myuser.name)
// console.log(typeof myuser[mysym])
// console.log(myuser)

// myuser.age=19
// console.log(myuser)
// Object.freeze(myuser)
// myuser.age=18
// console.log(myuser)

// myuser.greeting=function(){
//     console.log("hello world");
// }

// myuser.greetingtwo=function(){
//     console.log(`hello user my name is ${this.name}`)
// }
// console.log(myuser.greeting())
// console.log(myuser.greetingtwo())

//Singleton

// const tinderuser=new Object()

// tinderuser.name="gaurav"
// tinderuser.age=18
// tinderuser.isloggedin=true
// tinderuser.location="india"

// console.log(tinderuser)

// const regularuser={
//     id:"1234",
//     age:18,
//     fullname:{
//         username:{
//             firstname:"gaurav",
//             lastname:"pundir",
//         }
//     },
// }
// console.log(regularuser)
// console.log(regularuser.fullname)
// console.log(regularuser.fullname.username)
// console.log(regularuser.fullname.username.firstname)

// const obj1={1:"A",2:"B"}
// const obj2={3:"C",4:"D"}

// const obj3=Object.assign({},obj1,obj2)
// const obj4={...obj1,...obj2}

// console.log(obj4);
// console.log(obj3)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isloggedin"));

const user={
    username:"gaurav",
    age:18,
    location:'shyampur'
}
const {username:name}=user//deconstuctor

console.log(name)