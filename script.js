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