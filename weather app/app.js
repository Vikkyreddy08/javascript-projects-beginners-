const city = document.getElementById("city");
const searchBtn = document.getElementById("search");
const result = document.getElementById("result");

const apiKey = "YOUR_API_KEY";

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const cityName = city.value;

    if(cityName === ""){
        alert("Enter City Name");
        return;
    }

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City Not Found");
        }

        const data = await response.json();

        result.innerHTML = `
        <h2>${data.name}</h2>

        <p>🌡 Temperature : ${data.main.temp} °C</p>

        <p>🤗 Feels Like : ${data.main.feels_like} °C</p>

        <p>💧 Humidity : ${data.main.humidity}%</p>

        <p>🌥 Weather : ${data.weather[0].description}</p>

        <p>💨 Wind : ${data.wind.speed} m/s</p>
        `;

    }

    catch(error){

        result.innerHTML = `<h3>${error.message}</h3>`;

    }

}