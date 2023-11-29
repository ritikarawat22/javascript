const accountId = 144553
let accountEmail="hitesh@google.com"
var accountPassword = "12345"
let accountState;

 /*
prefer not to use var bcoz of issue in block scope and functional scope
*/

accountCity = "Jaipur"

// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "234123"
accountCity = "bengaluru"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])