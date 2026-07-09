const counter=document.querySelector("#counter");
const startBtn=document.querySelector("#startBtn");
const stopBtn=document.querySelector("#stopBtn");
let count=1;
let intervalID=0;
startBtn.addEventListener("click",()=>{
    clearInterval(intervalID);
    
    intervalID=setInterval(increment,500);
})
stopBtn.addEventListener("click",()=>{
    clearInterval(intervalID);

})

function increment()
{
    count++;
    counter.innerText=count;


}

//
let number=16;
const evenPromise=new Promise((resolve,reject)=>{

    setTimeout(()=>{if(number%2==0)
        resolve({data:number,msg:'test'});
    else
        reject(number);
},1000)
    

})

// //console.log(evenPromise);
// evenPromise.then((data)=>{
//     console.log("Its an even",data)

// }).catch((data)=>{

//     console.log("Its not an even",data);

// })
// const oddPromise=new Promise((resolve,reject)=>{
//     reject();

// })

// // Promise.allSettled([evenPromise,oddPromise]).then((response)=>{
// //     console.log(response);

// // })

// // Promise.any([evenPromise,oddPromise]).then((response)=>{
// //     console.log(response);
    
// // })
// let promiseOne=new Promise((resolve,reject)=>{
// setTimeout(()=>{resolve()},300);


// })

// let promiseTwo=new Promise((resolve,reject)=>{
// setTimeout(()=>{reject()},500);


// })
// Promise.race([promiseOne,promiseTwo]).then(()=>{

//     console.log("Resolved");
    
// }).catch(()=>{
//     console.log("Rejected");
// })

//1. Fetch->then->Structured data(readableStream)
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"GET",
    body:JSON.stringify(),
    headers:{
        "content-type":"application/json"
    }

}).then((data)=>{
    console.log(data);
  return  data.json();//promise//json,text ->Promise


}).then((response)=>{ //ReadableStream->json

    console.log(response);
})



