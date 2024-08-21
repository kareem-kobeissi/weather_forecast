let weather={
    apikey:"f2b9bc5c061a03447e0c6f4890d7983d",
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+
            "&units-metric&lang-en&appid="+this.apikey
        )
        .then((response)=>response.json())
        .then((data)=> this.dataweather(data));

    },
    dataweather: function(data){
     var{name}=data;
     var{description}=data.weather[0];
     var{temp,humidity}=data.main;
     var{speed}=data.wind;

     document.querySelector(".city").innerText="For "+ name;
    document.querySelector(".description").innerText=description;
     document.querySelector(".temp").innerText= (temp-273).toFixed(2)+"°C";
     
     document.querySelector(".humidity").innerText="Humidity : "+humidity+"%";
     document.querySelector(".wind").innerText="Wind Speed : "+ speed+" Km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-eng").value);
    }
}
document.querySelector(".search-eng").addEventListener("click",function(){
 weather.search();   
})

document.querySelector(".search-eng").addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        weather.search()
    }
})

weather.fetchWeather("beirut")