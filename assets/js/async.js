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
