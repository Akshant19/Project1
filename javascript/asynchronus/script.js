// settimeout => setTimeout(()=>{})

// setTimeout(function(){
//     console.log("hello beta");
    
// },1000) 
// =>  1000 milisecond = 1sec k baad hello beta chlega

// console.log("hey 1");
// console.log("hey 2");

// setTimeout(function(){
//     console.log("hey 3");
// },2000);

// console.log("hey 4");

//setInterval 

// setInterval(function(){
//     console.log("hey")
    
// },1000)

// var count = 1;
// const hmarainterval = setInterval(()=>{
//         count++;
//     console.log(count);
//     if(count==4) clearInterval(hmarainterval);

// },1000)

//Fetch API => ye interent prr jayega aur data lekr aayega iss process me time legega aur isiliye hmm ishe side me rkhte hai ki aage ke code chle jo main stack me hai

// .then() => ye isiliye ki jb tkk fetch  internet se code nhi lata tb tkk .then ka code nhi chlega

// fetch('https://randomuser.me/api/')
// .then(chacha => console.log(chacha));

// agr hme data readable chaiye toh use krege hmm 
// fetch('https://randomuser.me/api/')
// .then(raw => raw.json())
// .then(readable=>console.log(readable.results[0].name));

// Axios
 
// axios.get('https://randomuser.me/api/')
// .then(result => console.log(result)
// )

// Promises

// promises kya hai ?
 // kuchh code socho mann mein, jo ki async code ho, matlab ki ye side stack mein jaayega aur baad mei chalega main stack me, ab ye socho ki aapne ish code ko likha hai toh iska answer kabhi aayega aur aisa bhi ho sakta hai ki answer naa aaye, promises kya hai aisa samjho ki aap promise ke andar koi bhi async code likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai and wo parchi par by default likha hota hai waiting, parchi par do events hote hai mainly ek event ka naam hai then aur ek event ka naam hai catch, agar aapka data aagaya to parchi pe resolved likhjaayega waiting ki jagah and then chalega aur agar data mein dikkat aayi to catch chalega and waiting ki jagah rejected likhjaayega

//  const parchi = new Promise(function(resolve, reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result =>{
//         if(result.results[0].gender ==="male ") resolve();
        
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("hara button daba");
    
// })
// .catch(function(){
//     console.log("laal button daba");

// })


// callback

// function abcd(a ,b){
//      b();
// }
// abcd(1,function(){console.log("callback chala");
// })

// toh use kaise kre

// function dosomeAsynctask(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback();
//     })
// }

// dosomeAsynctask("some url", function(){

// })

// user se data maangao aur jb data aajaye tb ush data ke name,gender,email ko print karo

// function getData(url , callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result)
//     })
// }

// getData('https://randomuser.me/api/', function(result){
//     console.log(result.results[0].gender,result.results[0].email, result.results[0].name.first )
    
// })

// Async/Await

//  async function abcd(){
//   let a = await fetch('https://randomuser.me/api/')
//   a = await a.json()
//   console.log(a);
  
// }
// abcd();

// ek url se data lekr aao and usey console pr show kro via callback
// function datafetch(url,callback){
//       fetch(url)
//       .then(raw => raw.json())
//       .then(result => {
//         callback(result);
//       })
// }
// datafetch('https://randomuser.me/api/',function(result){
//     console.log(result);
    
// })

// ek url se data lekr aao and usey console pr show kro via promises

// function datafetch(url){
// const parchi = new Promise(function(resolve, reject){
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             resolve(result);
//         })
//   })
//   return parchi;
// }

// datafetch('https://randomuser.me/api/')
// .then(function(result){
//     console.log(result);
    
// })

// ek url se data lekr aao and usey console pr show kro via await
// async function datafetch(url){
// let data = await fetch(url);
// let result = await data.json();
// return result;
// }

// async function abcd(){
//     const data = await datafetch('https://randomuser.me/api/');
//     console.log(data);
    
// }
// abcd();

// generators

// function* printnums(){
//     console.log("started");
//     yield 1;
//     console.log("phle chal chuka") ;
//     yield 2;
//     console.log("dusra chal chuka");
//     yield 3;   
// }
// const ans = printnums();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);   // undefined

// function* allnums(){
//     for(let i=1; i<11;i++){
//         yield i;
//     }
// }

// const gen = allnums();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);  //  4 tk print hoge jb jb hmm nexf krege tb tb value aayegi 

// Web Workers

//aap apni main js file se data send kr skte ho and aap worker file data accept karoge and jo perform  karna hai karoge and waha se data wapis main file bhejoge and main file mein wapas accept karoge 

var nums = Array.from({length:1000}, (a,b)=>b+1);
const worker = new Worker("worker.js");
worker.postMessage(nums);

worker.onmessage = function(data){
    console.log(data.data);
    
}