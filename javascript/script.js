// console.warn("hello");
// console.error("hello");
// console.log("hello");

 //alert("hey");
// prompt("hey");

// primitive
// var a= 3;
// var b = a;

// reference
// var arr = [1,2,3,4,5];
// var b= arr;
// b.pop();

// if(12>13){
//     console.log("hl0");
// }
// else{
//     console.log("bye");
// }

// for(var i=3;i<6;i++){
//     console.log(i);
// }

// var i=3;
// while(i<19){
//     i++;
// }

// function abc(){
//     console.log("happy birthday");
// }
// abc();

// function abc(val){
//     console.log(12+val);
// }
// abc(12);

// function abc(){
//     // return ;
// }

//  var ans = abc();
// console.log(abc());

// array
// var arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log("hello");
//     console.log(val);
//     console.log("bye");
//     console.log(val*2);
//     console.log(val*2-1+2);
// })

//object
// var obj3 = new Object();
//    or
// var obj = {
//     name: "akshant",
//     age: 23,
//     batch: "cse"
// };

// obj.name

// this
// global - jb code {} ke andr na ho
// console.log(this);

// function
// function abcd(){
//     console.log(this);
// }
// abcd();

// method = jb hmm object ke andr function bnade
// var obj  = {
//     name: function(){
//         console.log(this);
//     }
// }
// obj.name();

//  function inside method (es5)
// var obj = {
//     name: function(){
//         console.log(this.age);
//         function abcd(){
//             console.log(this.age);
//         }
//         abcd();
//     },
//     age:25
// }
// obj.name();

// function inside method(es6)
// var obj = {
//     name: function(){
//        const abcd = ()=>{
//             console.log(this);
//         }
//         abcd();
//     }
// }
// obj.name();

// constructor function mein this ki value

// function abcd(){
//     console.log(this);
// }
// const ans = new abcd();

// event listener mein this ki value

// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })

// call apply bind

// const obj = {name:"harsh"}

// function abcd(a,b,c){
//     console.log(this,a,b,c);
//}
// // abcd.call(obj)    or
// abcd.call("12")

// abcd.apply(obj,[1,2,3])

// const baadmechalenekeliyefunction = abcd.bind(obj);

// baadmechalenekeliyefunction();

// prototypal inheritance
// function makeHuman(name,age){
//     this.name = name;
//     this.age = age;
// }
// const human1 = new makeHuman("akshant" , 25);

// function makeHuman(name,age){
//     this.name= name;
//     this.age= age;
// }

// makeHuman.prototype.printMyname = function(){
//     console.log(this.name);
// }
// const human1 = new makeHuman("akshant",20);
// const human2 = new makeHuman("nain",21);

//closures

//  function counter(){
//     var count =1;
//     return function(){
//         count++;
//         console.log(count);
//     }
//  }
//  var fnc = counter();
//  fnc();
//  fnc();

// event delegation

// var parent = document.querySelector("#parent")


// parent.addEventListener("click", function(details){
//     // console.log(details);

//     if(details.target.id==="play"){
//         console.log("play song");
//     }
//     else if(details.target.id==="pause"){
//         console.log("pause song");
//     }
// })

// Higher Order function

// var arr = [1,3,4,5];
// arr.forEach(function(){});

// error handling

// function divide(a,b){
//     try{
//         if(b==0){
//             throw Error("koi gadbad hui");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// divide(12,0);

