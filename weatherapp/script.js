const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a79fe55badmsh0ef9685bf9a326ep1c9129jsn6b96e911c019',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const temperature = document.getElementById('temp');
const feelslike = document.getElementById('feelslike');
const hum = document.getElementById('hum');
const wind = document.getElementById('wind');
const cityname = document.getElementById('city-name');
const inputcity = document.getElementById('city');
const search_btn = document.getElementById('submit');

const getWeather=(inputcity)=> {
    cityname.innerHTML= inputcity;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+inputcity, options)
	.then(response => response.json())
	.then(response =>{ console.log(response)
        
        temperature.innerHTML = response.temp;
        hum.innerHTML = response.temp;
        wind.innerHTML = response.temp;
        feelslike.innerHTML = response.feels_like;


        document.body.style.backgroundImage="url('https://source.unsplash.com/random/?"+inputcity+"')"

       
    })
	.catch(err => console.error(err));
} 



search_btn.addEventListener("click", ()=>{

 
    getWeather(inputcity.value);
    inputcity.value ='';
} )

inputcity.addEventListener("keyup", function(event){
    if(event.key=="Enter") {
        getWeather(inputcity.value);
        inputcity.value=''
    }
})

getWeather('Delhi');