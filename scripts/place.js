const temp$ = document.querySelector('#temp')
const conditions$ = document.querySelector('#conditions')
const wind$ = document.querySelector('#wind')
const windChill$ = document.querySelector('#windChill')

function calculateWindChill(temperature, windSpeed) {
	return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)
}

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=53.48018601236852&lon=-2.244407082037727&appid=25d27aefb9cc703822d9c3a4dd3ac24f"
)
.then(res => res.json())
.then(res => {
	const data = res.list[0]
	
	temp$.textContent = `${data.main.temp} °F`
	conditions$.textContent = data.weather[0].main
	wind$.textContent = `${data.wind.speed} mph`
	windChill$.textContent = (data.main.temp <= 50 && data.wind.speed > 3) ? calculateWindChill(data.wind.temp, data.wind.speed) : 'N/A'
})
