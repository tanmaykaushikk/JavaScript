// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
                                                    // agar break keyword na use kre toh uske neeche ka saara code execture hoga 
const month = "march"                               // bss default execute nahi hoga.

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}