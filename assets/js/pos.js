//obtain the references
const code=document.querySelector("#code");
const price=document.querySelector("#price");
const qty=document.querySelector("#qty");
const addBtn=document.querySelector("#addBtn");
const items=document.querySelector("#items");
const total=document.querySelector("#total");
const invoiceAdd=document.querySelector("#invoiceAdd");

let carts=[]
let invoices=[];
let invoiceNumber=1;

let itemno=1;
let currentCode=-1;
//localStorage->setItem, getItem
// localStorage.setItem("data","abc");
// const result=localStorage.getItem("data");
// console.log(result);

// localStorage.setItem("data",10);
// const result=Number(localStorage.getItem("data"));

// console.log(result+1);

 let arr=[1,2,3,4,5];
// document.write(arr);
// console.log(arr.join("="));
// localStorage.setItem("data", arr);
// const data=localStorage.getItem("data");
// console.log(data[1]);
// localStorage.setItem("data", JSON.stringify(arr));
// const data=JSON.parse( localStorage.getItem("data"));
// console.log(data);

// let obj={
//     name:"Test"
// };
// document.write(obj);
// console.log(obj);
// localStorage.setItem("data",JSON.stringify(obj));
// const data=JSON.parse(localStorage.getItem("data"));
// console.log(data);








//Products
const products=[{code:101,name:'Samosa',price:10}
    ,
    {code:102,name:'A',price:100},
    {code:103,name:'B',price:90},
    {code:104,name:'C',price:40}
]

function productAdd()
{
        //1. Fetch data from UI
        //2. Calculation for total Price
        //3. Create an Object for new Product
        //4. Array
        //5. Display the object on UI
    //1. Fetch data from UI
         let pCode=code.value;
    let pPrice=price.value;
    let pQty=qty.value;
    //2. Calculation for total Price
    let totalPrice=pPrice*pQty;
//3. Create an Object for new Product
    let cartItem={
        code:currentCode,
        name:pCode,
        price:pPrice,
        qty:pQty,
        lineTotal:totalPrice
    }
   //console.log(cartItem);
 //4. Array
 carts.push(cartItem);
 setLocalStorage();
 calculateCart();

 console.log(carts);


    
    addProduct(cartItem);

}
//Actions
addBtn.addEventListener("click",()=>{
   // console.log("Clicked")
   productAdd();
})
qty.addEventListener("keypress",(e)=>{
  //  console.log(e)
  if(e.key=='Enter')
     productAdd();

})
invoiceAdd.addEventListener("click",()=>{
    let invoice={
        invoiceNumber:invoiceNumber,
        dated:new Date(),

        totalValue:total.innerText,
        items:carts
    }
    invoices.push(invoice);
    localStorage.setItem("invoices",JSON.stringify(invoices));
console.log(invoices);

    invoiceNumber++;

})
code.addEventListener("change",()=>{

    let pCode=code.value;
    const selectedProducts=products.filter((item)=>{
        if(item.code==pCode)
            return true;
    })
    if(selectedProducts.length==0)
    {
        code.value='';
        price.value='';
        code.focus();
    }
    else{
        currentCode=code.value;

        code.value=selectedProducts[0].name;
        price.value=selectedProducts[0].price;
        qty.focus();

    }

})


function addProduct(cartItem){

   

    const productRow=document.createElement("tr");

    const productCode=document.createElement("td");
    productCode.innerHTML=cartItem.name;

    const productPrice=document.createElement("td");
    productPrice.innerHTML=cartItem.price;

    const productQty=document.createElement("td");
    productQty.innerHTML=cartItem.qty;

    const productTotalPrice=document.createElement("td");
    productTotalPrice.innerHTML=cartItem.lineTotal  ;

    const operations=document.createElement("td");
    const deleteBtn=document.createElement("button");
    deleteBtn.innerHTML="X";
    deleteBtn.addEventListener("click",()=>{
        //1. Array delete
        //2. UI remove

        //1. Array delete

        carts=carts.filter((item)=>{
            if(item.code!=cartItem.code)
                return true;

        })
        console.log(carts);
        //2. UI remove
        productRow.remove();
        setLocalStorage();
        calculateCart();




    })

    operations.append(deleteBtn);

    productRow.appendChild(productCode);
    productRow.appendChild(productPrice);
    productRow.appendChild(productQty);
    productRow.appendChild(productTotalPrice);
    productRow.appendChild(operations);

    
    items.appendChild(productRow);

    code.value='';
    price.value='';
    qty.value='';
    code.focus();


}


// function addProduct(){

//     let pCode=code.value;
//     let pPrice=price.value;
//     let pQty=qty.value;
//     let totalPrice=pPrice*pQty;
//     console.log(totalPrice);

//     const productRow=document.createElement("tr");

//     const productCode=document.createElement("td");
//     productCode.innerHTML=pCode;

//     const productPrice=document.createElement("td");
//     productPrice.innerHTML=pPrice;

//     const productQty=document.createElement("td");
//     productQty.innerHTML=pQty;

//     const productTotalPrice=document.createElement("td");
//     productTotalPrice.innerHTML=totalPrice;

//     productRow.appendChild(productCode);
//     productRow.appendChild(productPrice);
//     productRow.appendChild(productQty);
//     productRow.appendChild(productTotalPrice);
    
//     items.appendChild(productRow);

//     code.value='';
//     price.value='';
//     qty.value='';
//     code.focus();


// }

function setLocalStorage()
{
    localStorage.setItem("carts",JSON.stringify(carts));

}
function getLocalStorage()
{
    //1. Fetch from localStorage
    //2. Array carts
    //3,. UI
    //1. Fetch from localStorage
   if(localStorage.getItem("carts"))
        carts=JSON.parse(localStorage.getItem("carts"));

    //3,. UI
    carts.forEach((item)=>{
        addProduct(item);


    })
console.log(carts);
calculateCart();
if(localStorage.getItem("invoices"))
    invoices=JSON.parse(localStorage.getItem("invoices"));

console.log(invoices);


}
getLocalStorage();
function calculateCart()
{
    let cartTotal=0;
    carts.forEach((item)=>{
        cartTotal+=item.lineTotal;
    })
    total.innerHTML=cartTotal;

}