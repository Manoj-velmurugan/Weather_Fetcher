# Weather_Fetcher
## Date : 13/07/2025
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="weather-container">
        <h1>Weather Now</h1>
        <input type="text" id="cityInput" placeholder="Enter city name">
        <button onclick="getWeather()">Get weather</button>
        <div id="weatherResult"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-image: url("back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.weather-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#weatherResult {
  margin-top: 20px;
  font-size: 18px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f8ff;
  color: #333;
  display: none;
}
```
## JavaScript Code:
```
async function getWeather(){
    const city = document.getElementById("cityInput").value
    const resultDiv = document.getElementById("weatherResult")

    if(!city){
        resultDiv.textContent = "Please enter a city name!"
        return;
    }

    const apiKey = "e4367f72185f4a8ba80162302251307"
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

    try{
        resultDiv.style.display = "block"
        resultDiv.textContent = "Fetching weather..."

        const response = await fetch(url)
        if(!response) throw new Error("City not found.");

        const data = await response.json()

        const location = data.location.name
        const temp = data.current.temp_c
        const condition = data.current.condition.text

        resultDiv.innerHTML = `<strong>Location:</strong> ${location}<br>
                               <strong>Temperature:</strong> ${temp}<br>
                               <strong>Condition:</strong> ${condition}`
    }catch(error){
        resultDiv.textContent = `Error: ${error.message}`
    }
}
```
## Output:
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/cb24f29a-8392-4632-a24b-a6ef0f917e3c" />


## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
