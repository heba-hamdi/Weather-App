const key='	wcCjLzLEqq86HTShAOYYy3Ahocr9ukHu';  

async function getCity(city){

    const baseUrl='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(baseUrl+query);
    const data=await response.json()

    return (data[0]);
}

async function getWeather(cityId){
    const baseUrl='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${cityId}?apikey=${key}`;
    const response= await fetch(baseUrl+query);
    const data= await response.json();
   return(data[0]);
}

