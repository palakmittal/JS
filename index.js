// console.log("PALAK MITTAL IS NOW LEARNING JS.");

// function showMyName(){
//   console.log("my name is Palak Mittal.");
// }

// console.log("i am now calling function 2 times.");

// showMyName();
// showMyName();

// //alert("js");

// function add(a, b){
//   let ans=a+b;
//   console.log(ans);
// }

// add(2,3);

// function sub(a, b){
//   let ans=a-b;
//   return ans;
// }

// console.log(sub(5,6));
// let p=sub(15,6);
// console.log(p);


// let solve=function(){
//   console.log("this is solve function call as a variable...");
// }

// solve();

// let division=function(a1,a2){
//   console.log("this is division function call as a variable...");
//   return a1/a2;
// }
// console.log(division());
// let c1=division(10,5);
// console.log(c1);

// const multiply=function(a1,a2){
//   console.log("this is multiplication function call as a variable...");
//   return a1*a2;
// }
// console.log(multiply(2,20));



// function exp(a,b){
//   return a**b;
// }

// let getExp= function(a1,a2){
//   return a1**a2;
// }

// const expo=function(c,d){
//   return c**d;
// }

// let power=(m,n) =>{
//   return m**n;
// }

// console.log(exp(2,10));
// console.log(getExp(2,10));
// console.log(expo(2,10));
// console.log(power(2,10));

/*
let obj={
  age: 19,
  name:"Palak",
  "full name":"Palak Mittal",
  greet: function(){
    console.log("welcome ji!");
  }
};

console.log(obj);
console.log(typeof(obj));
obj.greet();
console.log(obj.greet());
console.log(obj.age);

*/

/*
shallow copy : jab two objects same hi memory location ko point kare in heap 
               matlab ki ek object ki property ko change kare toh dusre ki mei bhi ho jaye
Deep copy: reverse of shallow copy               
*/


// let arr=[1,2,3,4,5];
// console.log(arr);
// console.log(typeof(arr));
// console.log(arr[2]);

// dynamic (array constructor) declaration of array
//let brr=new Array('palak',7896,true,"happy girl");
// console.log(brr);
// console.log(typeof(brr));
// console.log(brr[2]);

//brr.push("pihu"); console.log(brr);  // insert at end
//brr.pop();  console.log(brr);         // remove from end
//brr.shift(); console.log(brr);        //remove element at 0 index(leftmost)
//brr.unshift("hey!");  console.log(brr);     // insert element at 0 index 
 //console.log( brr.slice(1,3) ); console.log(brr);   // last wala index is excluded and yeh original brr par koi change ni hoga
 
//brr.splice(1,2,'pihu'); console.log(brr);  // yeh original mei bhi change kar dega aur 1 se lekar 2 index tak ki values ki jagah 'pihu' insert kar dega
//brr.splice(1,0,'pikachu'); console.log(brr);  // iska matlab hai ki hamne kuch bhi remove ni kiya lekin isme at index 1 'pikachu' insert ho jayega aur yeh change original mei hi hoga

/* MAP METHOD
let myArr=[10,20,30,40,50];

let ansArray= myArr.map(number =>{
  return number*number;
})

console.log(ansArray);

myArr.map(number=>{
  console.log(number+1);
})

myArr.map((num,index)=>{
     console.log("num: "+num);
     console.log(num,index);
     console.log("index: "+index);
})

*/




/*    FILTER METHOD

let myArray=[10,20,65,30,77];
let evenArray=myArray.filter(number=>{
  if(number%2==0){
    return true;
  }
});
console.log(evenArray);

let m1=['palak',10,34,"pikachu",true,982.66];
// let ansm1= m1.filter((value)=>{
//   if(typeof(value)==="boolean"){
//     return true;
//   }
//   else
//    return false;
// });
// console.log(ansm1);

// let ansm2= m1.filter((value)=>{
//   if(typeof(value)==="number"){
//     return true;
//   }
//   else
//    return false;
// });
// console.log(ansm2);

// let ansm11= m1.filter((value)=>{
//   if(typeof(value)==="string"){
//     return true;
//   }
//   else
//    return false;
// });
// console.log(ansm11);

*/

/* REDUCE METHOD

// isme acc=0 se initialised hai 
let aray=[10,20,65,30,77];
let finalAns=aray.reduce((acc,curr)=>{
  return acc+curr;
},0);

console.log(finalAns); // prints 202 (10+20+65+30+77)

*/

/*  SORT METHOD
let araay=[10,20,98,65,30,77];
araay.sort();   // yahan tak ascending mei sort hoga
araay.reverse();  // ab yahan par ye descending mei sort ho jayega
console.log(araay);

*/

/*  indexOf method

let m12=['palak',10,34,"pikachu",true,982.66];
console.log(m12.indexOf(10));
console.log(m12.indexOf(true));
console.log(m12.indexOf("pikachu"));

*/

/*  REVERSE AN ARRAY

let araay=[10,20,98,65,30,77];
araay.reverse();
console.log(araay);

*/

/* FIND METHOD  => yeh woh method hai jisme ham function pass kate hai aur jo us function ki condition ko phela element satisfy kata hai wahin return ho jata hai woh aage phir check hi ni karta

function checkEven(num){
  return num%2==0;
}

let araay=[10,20,98,65,30,77];
let ansmy=araay.find(checkEven);
console.log(ansmy);

*/

/*  Various kinds of for loops

//            => for-each loop

let araay1=[10,20,98,65,30,77];
araay1.forEach((value,index)=>{
  console.log("value: ",value,"index: ",index);
})

//        =>traditional for loop

let length=araay1.length;
console.log("length of the array1 is : ",length);
for(let i=0;i<length;i++){
  console.log(araay1[i]);
}

//            => for-in loop
let obj={
  age: 19,
  name:"Palak",
  "full name":"Palak Mittal",
  greet: function(){
    console.log("welcome ji!");
  }
};

for(let key in obj){
  console.log(key);  // prints only keys
}

for(let key in obj){
  console.log(key," :",obj[key]);  // prints keys and values
}


//            => for-of loop

let araay1=[10,20,98,65,30,77];
for(let val of araay1){
  console.log(val);
}

let str="palak";
for(let val of str){
  console.log(val);
}

*/


/* PASSING ARRAY TO FUNCTION

function getSumOfArray(numArray){
  let length=numArray.length;
  let sum=0;
  for(let i=0;i<length;i++){
    sum+=numArray[i];
  }
  return sum;
}

let araay61=[10,20,98,65,30,77];
let totalSum=getSumOfArray(araay61);
console.log(totalSum);

*/


//          HOISTING

/*
console.log(meriAge);    //prints undefined
var meriAge=19;

*/

/*
showMSg();   //function execute succeed also performs the task inside it
function showMSg(){
  console.log("this is function call for showMSg");
}

*/

/*

showMSg();   //error because we use assign function to variable and trying to call it before declaration
let showMSg=function (){
  console.log("this is function call for showMSg");
}

*/

/*
console.log(meriAge);    //error because we use let instead of var
let meriAge=19;

*/


/*
console.log(meriAge);    //error because we use let instead of var
const meriAge=19;

*/

/*
const object1=new Human();    //error
class Human{

};

*/

/*

function greet(){
  console.log("greeting of the day!");
}

function greetme(greet,fullname){
  console.log(fullname);
  greet();
}

greetme(greet,"palak");

*/

/*

function solve(num){
  return function sq(num){
    return num*num;
  }
}

let ans=solve(5);
console.log(ans(10));// prints 100 no matter what i pass in solve() because it is returning a function and now  ans is storing function so we call it as a function to grt output

*/

/*

// we can also use const arr............
let arr=[
       function(a,b){
        return a+b;
       },
       function(a,b){
        return a-b;
       },
       function(a,b){
        return a*b;
       }
];

let first=arr[0];
let ans=first(7,5);
console.log(ans);


*/

/*
let fun={
  age:30,
  ht:90,
  greet:()=>{
    console.log("hello dunia");
  }
}

console.log(fun.age);
fun.greet();

*/

/*
var greet;
console.log(greet);  //prints undefined in both cases whether we declare var greet or not before the initialisation of function

var greet= function(){
  console.log("namaste dunia");
}

*/

/*

class Human{
  //properties
   age;  //public
   #id=433;  //private
    #wt=40;//private
    ht;

  // constructor  there can be only one ctor

  constructor(newAge,newWeight,newHeight){
    this.age=newAge;
    this.ht=newHeight;
    this.#wt=newWeight;
 }

  //behaviours
   walking(){
    console.log("i am walking and i have id ", this.#id);
   }

  #sleeping(){           //private
    console.log("i am sleeping");
  }

 get fetchId(){
  return this.#id;
 }

 fetchWt(){
  return this.#wt;
 }

 set modifyWt(val){
  this.#wt=val;
 }


 modifyId(val){
  this.#id=val;
 }

}

//let h=new Human();

 //h.walking();  // prints without any error
// console.log(h.age); //13
// console.log(h.id);  //undefined
// console.log(h.#id);  //error

//let a=h.fetchWt();  console.log(a);  //prints 40

let obj=new Human(50,75,64);
console.log(obj.age); //50
console.log(obj.fetchWt());  //75

*/

/*
// concept of default value

function sayMyName(Myname="pihu"){
   console.log("my name is: ",Myname);
}

sayMyName();  // prints    my name is:  undefined       if i have not given default value to function
sayMyName("palak");     // prints    my name is:  palak
sayMyName();   //// prints    my name is:  pihu       if i have  given default value to function

function MyName(fname="pihu",lname="mittal"){
   console.log("my name is: ",fname," ",lname);
}

MyName();  // prints    my name is:  undefined    undefined    if i have not given default value to function
MyName("palak");     // prints    my name is:  palak undefined   if i have not given default value to function
MyName(); //prints    my name is:  palak mittal   if i have  given default value to function

*/
/*

function _Name(Myname="pihu",lname=Myname.toUpperCase()){
  console.log("my name is: ",Myname," ",lname);
}

_Name();  //prints      my name is:  pihu   PIHU

*/

/*

function sol(val={a:10,b:78}){
  console.log(val);
}

sol();         //   output      { a: 10, b: 78 }
sol("Palak Mittal");  //   output        Palak Mittal


function soll(val="pizza"){
  console.log("the value is:",val);
}

soll();  //the value is: pizza
soll(null);//the value is: null
soll(undefined);  //the value is: pizza
soll("palki");  //the value is: palki
soll(10);      //the value is: 10

*/

/*
function getAge(){
  return 190;
}


function utility(name="paku",age=getAge()){
  console.log(name," ",age);
}

utility();  // output    paku   190

*/

/*

// console.log(Math.PI);
// console.log(Math.max(200,198,400,843837,3284887,54));
// console.log(Math.min(200,198,400,843837,3284887,54));
// console.log(Math.round(1.6));
// console.log(Math.round(1.3));
// console.log(Math.round(1.5));
// console.log(Math.floor(1.5));
// console.log(Math.ceil(1.5));
// console.log(Math.abs(5));
// console.log(Math.abs(-1.5));
// console.log(Math.random());
// console.log(Math.sqrt(5));
// console.log(Math.pow(5,3));


*/

/*
    //this will print the current time and date
let curr=new Date();
console.log(curr);
*/

/*
//this will print the passed time and date
let date=new Date('October 30 2004 6:03');
console.log(date);  
console.log(date.getDay()); 
console.log(date.getFullYear());

*/

/*

// object cloning
               // method1=>   using  spread operator

                              //   let sorce={
                                  //          age: 19,
                                  //          name:"Palak",
                                   //         "full name":"Palak Mittal",
                                  //          greet: function(){
                                  //                   console.log("welcome ji!");
                                 //                 }
                                //               };

                                // let dest={...sorce};
                               // console.log("source:",sorce);
                              // console.log("Destination:",dest);
 

              // method2=>   using  assign method
        
                   //      let sorce1={
                  //       age: 19,
                 //       name:"Palak",
                //      "full name":"Palak Mittal",
               //       greet: function(){
              //                console.log("welcome ji!");
             //              }
             //            };

            //            let sorce2={
            //             a:10,
            //             b:20,
            //             welcome: function(){
           //                      console.log("Greetings to you, welcome home!");
          //                    }
         //                  };

        // let dest1=Object.assign({},sorce1);
       // console.log("source1:",sorce1);
       // console.log("Destination1:",dest1);

       // let dest2=Object.assign({},sorce1,sorce2);
      // console.log("source2:",sorce2);
      // console.log("Destination2:",dest2);


                           // method3=>   using  iteration method 

                        //   let sorce3={
                          //        age: 19,
                            //      name:"Palak",
                              //    "full name":"Palak Mittal",
                                //  greet: function(){
                                  //     console.log("welcome ji!");
                                    //   }
                                //  };

                   //       let dest3={};
                     //     for(key in sorce3){
                       //     let newKey=key;
                    //        let newVal=sorce3[key];
                      //      dest3[newKey]=newVal;
                        //  }

    //  console.log("source3:",sorce3);
    //  console.log("Destination3:",dest3);


*/


   // all about try an catch
/*
//console.log(x);             //error as x is not defined

        //     //syntax
        //     try{
        //      //code which you yhink will show error
        //     }
        //    catch(e){
        //      // code which you want to execute when we gwt error
        //    }


        // jaise error ayegi waise hi control catch par chala jayega try block ke andar ka execute tab tak hoga jab tak koi error nhi ho jati

        try{
               //code which you yhink will show error
               console.log("I AM INSIDE TRY BLOCK");
               console.log(a);
               console.log("TRY BLOCK WNDS HERE");
              }
             catch(err){
               // code which you want to execute when we gwt error
               console.log("your error is here",err);
               console.log("I AM INSIDE CATCH BLOCK");
             }
             console.log("I AM OUTSIDE OF TRY-CATCH BLOCK");

                    // output:
                    // I AM INSIDE TRY BLOCK
                    // I AM INSIDE CATCH BLOCK
                    // I AM OUTSIDE OF TRY-CATCH BLOCK


try{
  //code which you yhink will show error
  console.log("I AM INSIDE TRY BLOCK");
 // console.log(a);
  console.log("TRY BLOCK WNDS HERE");
 }
catch(err){
  // code which you want to execute when we gwt error
  console.log("your error is here",err);
  console.log("I AM INSIDE CATCH BLOCK");
}
finally{
  console.log("I AM INSIDE FINALLY BLOCK IT WILL EXECUTE EVERYTIME WHETHER ERROR IS THERE OR NOT");
}

   output:           I AM INSIDE TRY BLOCK
                     TRY BLOCK WNDS HERE
                     I AM INSIDE FINALLY BLOCK IT WILL EXECUTE EVERYTIME WHETHER ERROR IS THERE OR NOT


                     try {
  console.log("i am trying here to print error from our side that is using throw keyword");
  console.log(a);
} catch (e) {
  throw new Error("invalid json for code100");
}


*/

/*

let errorcode=100;
if(errorcode==100){
  throw new Error("invalid json, i am printing error from my side");
}

*/


























































































