const arr=[50,100,150,200];
console.log("fixed arr are as follows ",arr);
let indexVal = arr.indexOf(150);
let bill = arr[indexVal];
console.log("Your Bill value is ",bill);

if(bill<100){
console.log("GST is 15%")
let gst= (bill*15)/100;
console.log("GST value is",gst)
arr[indexVal]=bill+gst;
console.log("final bill list is",arr);
}
else{
console.log("GST is 20%");
let gst = (bill*20)/100;
console.log("GST value is",gst);
arr[indexVal]=bill+gst;
console.log("final bill list is",arr);
}