//obtain the references
const code=document.querySelector("#code");
const price=document.querySelector("#price");
const qty=document.querySelector("#qty");
const addBtn=document.querySelector("#addBtn");
const items=document.querySelector("#items");
let order=[]
let itemno=1;


//Products
const products=[{code:101,name:'Samosa',price:10}
    ,
    {code:102,name:'A',price:100},
    {code:103,name:'B',price:90},
    {code:104,name:'C',price:40}
]

function productAdd()
{

    
addProduct();
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
        code.value=selectedProducts[0].name;
        price.value=selectedProducts[0].price;
        qty.focus();

    }

})


function addProduct(){

    let pCode=code.value;
    let pPrice=price.value;
    let pQty=qty.value;
    let totalPrice=pPrice*pQty;
    console.log(totalPrice);

    const productRow=document.createElement("tr");

    const productCode=document.createElement("td");
    productCode.innerHTML=pCode;

    const productPrice=document.createElement("td");
    productPrice.innerHTML=pPrice;

    const productQty=document.createElement("td");
    productQty.innerHTML=pQty;

    const productTotalPrice=document.createElement("td");
    productTotalPrice.innerHTML=totalPrice;

    productRow.appendChild(productCode);
    productRow.appendChild(productPrice);
    productRow.appendChild(productQty);
    productRow.appendChild(productTotalPrice);
    
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