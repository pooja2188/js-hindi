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
const heroes=["Shaktiman","Naagraj","Doga"]

//object
let myObj={
    name:"Pooja",
    age:20
}
console.log(myObj)
console.log(heroes)

//functions in javascript
const myFun=function(){
    console.log("Hello World!");
}
myFun()

console.log(typeof(heroes))
console.log(typeof(myObj))
console.log(typeof(myFun))