const accountId=14553
let accountEmail="pooja2108@gmail.com"
var accountPassword="12345"           //prefer not to use var because of issue in block scope and functional scope
accountCity="Abohar"
//accountId=23            //not possible
console.log(accountId)
accountEmail="pk123@gmail.com"
accountPassword="1232"
accountCity="Jalandhar"
console.table([accountEmail,accountPassword,accountCity])