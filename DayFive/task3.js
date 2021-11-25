// var Age = {
//     findAge: function (age) {
//         if (age >= 18)
//             console.log("Masure")
//         else {
//             console.log("minar")
//         }
//     }
// }
// console.log(Age.findAge(16))



const users = {
    rashi:23,
    rashu:27,
    ashi:12,
    ashu:30
}
const user = Object.keys(users)
    
  Object.keys(JSON.stringify(users)).map((item ,index) =>{

    console.log(item)
  })
// console.log(users.rashi)



