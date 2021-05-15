//Complete the Weather API Backend part using openweathermap api

const api='d3ee009491a1d84a279b2c23e8cd586c'
var temp=document.getElementById("temp");
var city=document.getElementById("city");
var weather=document.getElementById("weather");
var hilow=document.getElementById("hi-low");
var date=document.getElementById("date");


function get(){
var area = document.getElementById("place").value
let url=`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${api}`
axios.get(url).then(res =>{ 
    let data=res.data
    console.log(data)
    city.innerHTML=data.name+","+ data.sys.country;
    watch1();
    temp.innerHTML=data.main.temp+"°c";
    weather.innerHTML=data.weather[0].main;
    hilow.innerHTML=data.main.temp_max+"°c /"+data.main.temp_min+"°c ";

})
.catch(err => console.log(err))

}

function watch1(){

    var ele= new Date();
    var weeks=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date.innerHTML=weeks[ele.getDay()-1]+" "+ele.getDate()+" "+months[ele.getMonth()]+" "+ele.getFullYear();
}
