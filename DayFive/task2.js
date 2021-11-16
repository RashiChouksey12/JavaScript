let color = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
}
var result = Object.assign({}, ...Object.entries(color).map(([a,b]) => ({ [b]: a })))
console.log(result)