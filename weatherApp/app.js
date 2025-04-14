let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let haze = document.getElementById("haze");

let getCurrentLocation = async () => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation not supported");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (err) => reject(err)
    );
  });
};

let getWeatherInfo = async () => {
  let apiKey = "9379ee5fc3835ca39797611a4f9c5d68";
  let cityName = document.getElementById("city").value;
  let location = await getCurrentLocation();

  if(!cityName){
    try {
        let data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}`
        );
        let json = await data.json();
        temp.innerText = `Temp : ${Math.round(json.main.temp - 271)}`
        wind.innerText = `Wind: ${json.wind.speed}km/h`
        haze.innerText = `Weather: ${json.weather[0].main}`
        console.log(json);
      } catch (error) {
        console.log("Error in Fecthing Data from API");
      }
  }else{
    try {
        let data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        );
        let json = await data.json();
        temp.innerText = `Temp: ${Math.round(json.main.temp - 271)}`
        wind.innerText = `Wind: ${json.wind.speed}km/h`
        haze.innerText = `Weather: ${json.weather[0].main}`
        console.log(json);
      } catch (error) {
        console.log("Error in Fecthing Data from API");
      }
  }
  
};
// console.log(getCurrentLocation());

getWeatherInfo();
