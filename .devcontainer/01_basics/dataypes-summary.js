//datatypes-only in primitive and non primitive ab difference kaha aata hai ki 
//agr aapne koi or lang padhai hai toh waha aata hai call by value and call by Reference
//koi interview me puche toh simple si baat hai kis tarah se bata ko memory me rakha jata hai 
//or access kiya jata hai uss basis pe data ke 2 categorization
// hai -


//pprimitve and non primitive


// #Primitive Datatypes
// 7 categories... :String,Number,Null,Boolean,undefined,symbol,BigInt


//ab ye jitne bhi primitive datatypes hai ye call by value hota hai
//mtlb agr agr aap isko kahi se kahi copy krte hai jo jo original data hai wo reference aapko memory ka nhi diya jata ha 
//unko copy krke aapko diya jata hai  and jo bhi aap change krte hai wo uss copy me changes hote hai 

//Symbol- kise bhi value ko unique banane ke liye symbol ka use krte hai 
//BigInt-scientific and bahot jayda badi value jo handle hi ho rhi toh hum usko yaha use kr lete hai 



//javascprit ke andar hum kabhi lang ko define hi krte hai 
//jaise
//const score=100
const scoreValue=100.3
//yaha koi bhi decimal ke float ya kuch nhi hai yaha sab ek chij me aate hai jo ki number 
const isLoggedIn=false
const outsideTemp=null
let userEmail;//yaha humne koi value assign nhi ki toh iski jo value hogi wo simple undefined hogi
//or we can write
//let userEmail=undefined
//both are same

//const scroe=false
//humse nhi bataya js ko ki ye int hogi ya boolean hogi ye khud se assume kr rha 
const Id=Symbol('123')
const anotherId=Symbol('123')
console.log(Id === anotherId);
//toh bs output me false aa rha means iss dono ka value same nhi hai ..
//ab ye symbol ka kaam hi yhi hai agr aap same value bhi pass kroge toh 
//but aapko jo value melgi id and anotherId isko value same nhi milegi
//


const BigNumber=87661478148136649344855n
//toh ab isko store krne ke liye javascript BigInt ka is use karega 
// or ab n laganse ye ye ab BigInt ban gya hai 
//




//Reference(non primitive)
//ye sari value wo hai jo ki aapko memroy me inka refernce aapko direclty allocate kiya ja sakta hai 

//Array,obeject,Function

//ab kyu hum inko non primitive ya refernce bolte hai let's see with the demo
 
const heros=["chaitanya","pratham","pari"]//Array
//obejct ko hum curly bracket me likhte hai 

{
    name:"Parineeta sah "
    age:19
}
//aap chahe toh isko ki variable me bhi store kr sakte hai 
let myObj={
    name:"Parineeta sah ",
    age:19,
}
//function
//there are many ways pr hum abhi dekhenge ki 
// ki function ko bhi aap js me variable ki tarah treat kr sakte hai 
const myFunction=function(){
    console.log("hello world")
}


console.log(typeof outsideTemp );
//toh ab jo outsidetemp haaai uska value toh null hai phir object ku show kr rha output me
//it will give the value to that datatype
