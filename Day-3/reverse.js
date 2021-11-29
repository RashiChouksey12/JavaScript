const arr = [1,2,3,4,5];
console.log("Initial arrayis ",arr);
var newArr = [];
indexVal = arr.length-1;

for(i=indexVal;i>=0;i--){
var temp=arr[i];
newArr.push(temp);
}
console.log("Reversed array is ",newArr);