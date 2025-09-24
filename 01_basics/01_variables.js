const accountId = 144553
let accountEmail = "Rohit@google.com"
var accountPassword = "12345"
accountCity = "Patiala"
let accountState
// accountId = 2 // not allowed we cannot change const after declare once

accountEmail = "abc123@google.com"
accountPassword = "123456"
accountCity = "Bengaluru"


console.log(accountId);  // for print 

/*
Prefer not to use var
because of issue in block scope and functional scope

*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
