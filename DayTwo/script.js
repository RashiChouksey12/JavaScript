

function computeage(cAge , dob)
{
  let age = cAge-dob
  return age
}


var get =computeage(2021 ,1998);
console.log(get);


function computEbmi(height , weight)
{
  let bmi = weight/(height*height)
  return bmi
}
var get =computEbmi(15 ,50);
console.log(get);