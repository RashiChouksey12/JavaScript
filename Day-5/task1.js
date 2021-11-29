// let color = {
//     red: "#FF0000",
//     green: "#00FF00",
//     white: "#FFFFFF"
// }
// let result = Object.entries(color);
// console.log(result);

let shades = {
    red: "#000000",
    green: "#f00f00",
    blue: "#000001",
}
// let newarr = []
// newarr = Object.entries(shades);
// console.log("users", newarr);


let clone = []  //empty array
for( let arr in shades){ 
    clone[arr] = shades[arr]
}
console.log(clone);