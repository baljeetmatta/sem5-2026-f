//alert("Hello");
// a=10;
// //alert(a);
// console.log(a,typeof(a));
// a="test";
// console.log(a,typeof(a));
"use strict"
// var code;


// code="test";









// code="Programming"








// // console.log(code);
// console.log(code);

// var code="ABC";
// console.log(code);
// function test()
// {  
//     console.log(a);
//     var a=10;
//     console.log(a);

// }



// test();
// console.log(a);


// var a=10;

// console.log(a);

// var a=20;

//const a=10;
//a=20;

// let obj={
//     name:"test"
// }
// console.log(obj);
// obj.name="Code";
// console.log(obj);
// const data=obj;
// data.name="Another";
// console.log(data);
// data=10;

//Data type Primitive /non primitiv
//undefined, null
// let a="2125";
// let b=Number(a)+1;
// console.log(true+7);
// console.log(Number(false))




// a+b
// N+N=sum;
// S+N=concat

// function display(){

//     console.log("Funcation called");
// }
// display();
// function sum(a,b=0)
// {
//     // if(b==undefined)
//     //     b=0;
//     console.log(a+b);

// }
// sum(12,20)


// function sum()
// {
//    // console.log(arguments);
//    let s=0;
//     for(let i=0;i<arguments.length;i++)
//         s+=arguments[i]

//     console.log(s);



// }
// sum(1,2,3)
// sum(3,4)
// sum(7,4,5,6,8)

//CALLBACK function
//
// function washing()
// {
//     console.log("My Work- Washing");
// }

// function service(callback)
// {
//     console.log("Service called...")
//     if(callback!=undefined)
//     callback();
//     console.log("Ready..");
// }

// service(washing());
// function nowork()
// {

// }
// service(nowork);
//washing();
function test()
{
    console.log("Test called..");
}
test();
// let data=test;
// //console.log(test());

// console.log(data());

// let data=function ()
// {
//    console.log("a new function");

// }

// console.log(data);
//Hoisting

// function demo()
// {

// console.log(x);

//     if(4>1)
//     {
//         var x=1;

//     }
//     console.log(x);
// }
//arrays
//let arr=[12,"Heloo",34.4,45];
//console.log(arr.length);
// for(let i=0;i<arr.length;i++)
//     console.log(arr[i]);

//iterators
//foreach, filter, map,


let arr=[12,3,4,5];
// for(let i=0;i<arr.length;i++)
//     console.log(arr[i]);
function mywork(item)
{
    console.log("My work called",item);
}
print(arr,mywork);

// let arr1=["data","test"];
// // for(let i=0;i<arr1.length;i++)
// //     console.log(arr1[i]);
// function mywork1()
// {
//     console.log("My work1 called");
// }
// print(arr1,mywork1);

function print(array,cb)
{
   for(let i=0;i<array.length;i++)
    cb(array[i],i,array);


    //console.log(array[i]); 
}


//foreach, map, filter
// arr.forEach(function(item){

//     console.log("called",item);


// })
//Regular Function


// normal();

// function normal()
// {
//     console.log("normal")

// }
// //Arrow Functions
// let arrow=()=>
// {
//     console.log("arrow")

// }

// let newarr=arr.map((item)=>{
//     return item*2;

// })
// let newarr1=arr.filter((item)=>{
//     if(item%2==0)
//         return true;


// })

// console.log(newarr1);
let obj={name:"Test",age:20,name:"abc","first name":"test"};
//obj.age=20;
//console.log(obj);
//obj.name, obj["first name"];

// for(let x in obj)
//     console.log(x,obj[x]);

// let data="name";
// console.log(obj[data]);

//DOM


