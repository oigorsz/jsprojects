const apiKey = "31139bbcb3d60e96466ddc5ec3cbe5b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchButton = document.getElementById("search-button");
const textInput = document.getElementById("text-input");
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(textInput.value != "" && typeof textInput.value == "string"){
        //NOME DA CIDADE INVALIDO
        if(response.status == 404){
            document.querySelector(".error").style.display = "flex";
            document.querySelector(".main_content").style.display = "none";
        } else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
            
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "assets/images/clouds.png";
            } else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "assets/images/clear.png";
            } else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "assets/images/rain.png";
            } else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "assets/images/drizzle.png";
            } else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "assets/images/mist.png";
            }
        
            document.querySelector(".main_content").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } else {
        alert("write a valid name");
    }
}

searchButton.addEventListener("click",()=> {
    checkWeather(textInput.value);

});


