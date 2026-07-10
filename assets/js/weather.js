const city=document.querySelector("#city");
const searchBtn=document.querySelector("#searchBtn");
const output=document.querySelector("#output");
const suggestions=document.querySelector("#suggestions");

city.addEventListener("input",()=>{
    if(city.value.length<2)
        return;

    searchCities(city.value);

})
//Actions
    searchBtn.addEventListener("click",()=>{
        getWeather(city.value)
    })
const api="53dc97a2d15c3fc0863adb69318002ab";
//const city='Karnal'
function getWeather(city)
{

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
console.log(url);

    fetch(url).then((response)=>{
        return response.json();
    }).then((response)=>{

        output.innerHTML=`<h2>Temperature: ${response.main.temp}</h2>
        <p></p>`
        console.log(response);

    })
}
//getWeather();

function searchCities(city)
{
    const url=`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`;

    fetch(url).then((response)=>{
        return response.json();
    }).then((response)=>{
        console.log(response);
        suggestions.innerHTML='';
        

       response.forEach((item)=>{

        const div=document.createElement("div");
        div.innerHTML=item.name;

        suggestions.append(div);

    
       })
    })
}