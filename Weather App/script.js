const apiKey = "4fab5498550403230a90d8a42eb96669";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        // document.querySelector(".result").innerHTML = data.weather[0].main;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./image/cloudss.avif";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./image/sunny.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./image/drizzle.png";
        } else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "./image/Haze.png";
        }

        document.querySelector(".weather").style.display = "block";
    } catch (error) {
        alert(error.message);
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
