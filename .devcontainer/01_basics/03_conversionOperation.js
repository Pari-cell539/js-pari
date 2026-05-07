let someNumber =33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
//************Operation*************//
let value=3
let negValue= -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)//this is power 
// console.log(2%3) //this is the remainder

let str1 ="hello"
let str2 =" pari"
let str3=str1+str2
console.log(str3)// to add two string 

console.log("1" +2)
console.log(1+ "2")
console.log("1" +2+2)//agr phele stirng hai toh sab string me convert ho jayenge
console.log(1+2+"2")// agr phele number hai toh phele converison ho jayegi then string add ho jayega 
//but these shouldn.t be used futher as this is not a good way to write a code in this these type of code will be return back will you are woking in good company or something 

//tricky conversion
//console.log(+true) //output ->1 
//console.log(true+)//error
let num1,num2,num3
num1=num2=num3=2+2 //we see this but not a good code as ode should be readible

let gameCounter=100
gameCounter++;//101
++gameCounter;//101
console.log(gameCounter);

console.log(null>0)
console.log(null==0)// ye double equal or greatet than all inke workinhg diff hote hai js mai
console.log(null>=0)// comparision convert null to a number ,treating is as 0 that's why null>=0 is tru and null >0 is false
//we avoid these type of conversion for clean code


//strict check
//===
console.log("2"==2)// yaha toh ye conversion kr deta hai 
//console.log("2"===2)//yha converson nhi hoga..yha wo datatype check karega
//toh ye dono same hai hi nhi inke dataype hi alag ahi 
console.log("2" >1 )
