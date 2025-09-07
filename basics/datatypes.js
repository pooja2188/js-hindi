"use strict";

//alert("Hello")  //Error :as we are using nodejs ,not browser

// console.log(typeof("Pooja"))
// console.log(typeof(23))
// console.log(typeof(23.23))
// console.log(typeof(true))
// console.log(typeof(null))
// console.log(typeof(undefined))

// let score="33"
// let a=null
// console.log(typeof(score))
// console.log(typeof score)
// let valInNUm=Number(score)
// console.log(typeof(valInNUm))
// let nullInNum=Number(a)
// console.log(typeof(nullInNum))
// console.log(nullInNum)

/*
"33"->33
"33abc"->Nan
null->0
undefined->Nan
1->true
"Pooja"->true
""->false
*/

// let str1="Pooja"
// let str2=" Kudal"
// let str3=str1+str2
// console.log(str3)
// console.log("1"+"2")
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")


//Primitive data types
//7 types- string,Number,Boolean,null,undefined,Symbol ,BigInt

//Reference (Non Primitive)
//Array,Objects,Functions

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id==anotherId)

//arrays
// const heroes=["Shaktiman","Naagraj","Doga"]

// //object
// let myObj={
//     name:"Pooja",
//     age:20
// }
// console.log(myObj)
// console.log(heroes)

// //functions in javascript
// const myFun=function(){
//     console.log("Hello World!");
// }
// myFun()

// console.log(typeof(heroes))
// console.log(typeof(myObj))
// console.log(typeof(myFun))


/*
primitive datatpes use stack and when we assign one datavariables value to another data variable 
then copy passes and change will not be visible in the original data vaiable

But when we talk about non primitive data variables where data is stored in the heap and when we assign 
values from one var to another var then reference is passes and changes will be visible in the original var also*/
let Name="Pooja Kudal"
let anotherName=Name
anotherName="Pooja Choudhary"
console.log(Name)
console.log(anotherName)

let userOne={
    email:"user@gmail.com",
    upi:"userAybl"
}
let userTwo=userOne
userTwo.email="usertwo@gmail.com"
console.log(userOne)
console.log(userTwo)