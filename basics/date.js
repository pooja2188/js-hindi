// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())  //  9/7/2025
// console.log(myDate.toDateString())        //  Sun Sep 07 2025
// console.log(myDate.toLocaleString())      //  9/7/2025, 6:43:36 PM

 let myCreatedDate=new Date(2025,8,8)      //month starts with 0
// console.log(myCreatedDate.toDateString())
// //let date=new Date("2025-09-08")
// let date=new Date("08-09-2025")
// console.log(date.toLocaleString())


// console.log(myCreatedDate.getTime())             //gives time in milliseconds
// console.log(Math.floor(Date.now()/86400000))    //gives time in days from jan 1 1970 onwards
console.log(myCreatedDate.getMonth())    //months starts from 0:0 for jan,1 for feb and so on...
console.log(myCreatedDate.getFullYear())
console.log(myCreatedDate.getDay())          //here day starts from 0 : 0 for sun, 1 for mon and so on...
myCreatedDate.toLocalString('default',{
    weekday:'long'
})