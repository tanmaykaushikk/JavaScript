const accountId = "1245";
let accountEmail = "tanmay@google.com";
var accountPassword = "1230";
accountCity = "meerut";

let accountState; // if we don't assgn any value to any variable the default if will become undefined.

// accountId = 2;       // const will never be changed.
console.log(accountId);

accountEmail = "manu@google.com";
accountPassword = "45464";
accountCity = "chd";

console.table([accountId, accountEmail, accountPassword, accountState]); // to print the values in table format.

/*
prefer not to use var
because of the problems of block space and funcitonal space.
*/
