const cityForm= document.querySelector('form');
const details= document.querySelector('.info');
const card= document.querySelector('.card');
const icon=document.querySelector('.icon img');
const timePic=document.querySelector('.time');

console.log(timePic);
//update UI function
const updateCity= async (city)=>{
    const cityDets= await  getCity(city);
    const weather= await getWeather(cityDets.Key);
    // console.log(weather)

    return {
        cityDets:cityDets,
        weather:weather
    }

    
}


const updateDom=(data)=>{
    const cityDets=data.cityDets;
    const weather= data.weather;
    
    details.innerHTML=
    `
    <div class="info">
        <h2 class="city-name">${cityDets.EnglishName}</h2>
        <P>${weather.WeatherText}</P>
        <h1 class="temp">${weather.Temperature.Metric.Value}<nobr> °C</nobr></h1>
      </div>
    `;
    console.log(cityDets, weather);
    //update time picture
    let timeSrc=null;
   if(weather.IsDayTime){
     timeSrc='images/sun.jpg';  
   }else{
       timeSrc=timeSrc='images/moon.jpg'
   }

   timePic.setAttribute('src', timeSrc);


    // icon.setAttribute('src', `${weather.WeatherIcon}`);
}
cityForm.addEventListener('submit', e=>{
    e.preventDefault();
    
    const city= cityForm.city.value.trim();
    cityForm.reset();
    card.classList.remove('cardgone')


    //update UI with the new city
    updateCity(city)
    .then(data=>updateDom(data))
    .catch(err=>console.log(err));

})


