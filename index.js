const cityDisplay = document.querySelector("#cityName")
const ul = document.querySelector("#dataPoints")
const dataPoints = document.querySelector("#dataList")
const weatherIconDisplay = document.querySelector("#weatherIcon")
const descriptionDisplay = document.querySelector("#description")
const containerData = document.querySelector("#container")
const currentTemp = document.querySelector("#currentTemp")
const currentFeelsLike = document.querySelector("#feelsLike")
const test = document.querySelector("#feelsLike")


console.dir(weatherIconDisplay)


const weatherApi = async () => {
    try {
        const res = await axios.get("http://api.openweathermap.org/data/2.5/forecast?lat=52.229675&lon=21.012230&lang=pl&units=metric&appid=815888f306625879d7276ce175127bdb")
        console.log(res.data)

        const tempData = res.data.list[0].main.temp
        cityName(res)
        description(res)
        temperature(res)
        feelsLike(res)
        displayWeatherIcon(res)
        bottomContainer(res)
        bottomContainer2(res)
        bottomContainer3(res)



    } catch (e) {
        console.log("whoopsie something went wrong")
        console.log(e)
    }


}



const cityName = (res) => {
    const cityNameText = res.data.city.name
    cityDisplay.innerText = cityNameText
}
const iconTest = (res) => {
    const iconD = res.data.list[0].name.weather.icon
    document.body.append(iconD)
}

const description = (res) => {
    const descriptionData = res.data.list[0].weather[0].description
    descriptionDisplay.innerText = descriptionData
}


const temperature = (res) => {
    const tempData = res.data.list[0].main.temp
    currentTemp.prepend(tempData)
}

const feelsLike = (res) => {
    const tempData = res.data.list[0].main.feels_like
    currentFeelsLike.prepend(`Odczuwalna temperatura ${tempData}`)
}

const displayWeatherIcon = (res) => {
    const iconCode = res.data.list[0].weather[0].icon
    const baseURL = "https://openweathermap.org/img/wn/"
    weatherIconDisplay.src = `${baseURL}${iconCode}@2x.png`
}

const bottomContainer = (res) => {
    timeData = res.data.list[1].dt_txt.slice(10)
    document.querySelector("#bottomSection1Time").innerText = timeData

    const tempData = res.data.list[1].main.temp
    document.querySelector("#bottomSection1Temp").prepend(tempData)

    const iconCode = res.data.list[1].weather[0].icon
    const baseURL = "https://openweathermap.org/img/wn/"
    document.querySelector("#weatherIcon1").src = `${baseURL}${iconCode}@2x.png`

    const feelsLikeData = res.data.list[1].main.feels_like
    document.querySelector("#bottomSection1FeelsLike").prepend(`Odczuwalna temperatura ${feelsLikeData}`)


}

const bottomContainer2 = (res) => {
    timeData = res.data.list[2].dt_txt.slice(10)
    document.querySelector("#bottomSection2Time").innerText = timeData

    const tempData = res.data.list[2].main.temp
    document.querySelector("#bottomSection2Temp").prepend(tempData)

    const iconCode = res.data.list[2].weather[0].icon
    const baseURL = "https://openweathermap.org/img/wn/"
    document.querySelector("#weatherIcon2").src = `${baseURL}${iconCode}@2x.png`

    const feelsLikeData = res.data.list[2].main.feels_like
    document.querySelector("#bottomSectionFeelsLike2").prepend(`Odczuwalna temperatura ${feelsLikeData}`)


}

const bottomContainer3 = (res) => {
    timeData = res.data.list[3].dt_txt.slice(10)
    document.querySelector("#bottomSection3Time").innerText = timeData

    const tempData = res.data.list[3].main.temp
    document.querySelector("#bottomSection3Temp").prepend(tempData)

    const iconCode = res.data.list[3].weather[0].icon
    const baseURL = "https://openweathermap.org/img/wn/"
    document.querySelector("#weatherIcon3").src = `${baseURL}${iconCode}@2x.png`

    const feelsLikeData = res.data.list[3].main.feels_like
    document.querySelector("#bottomSectionFeelsLike3").prepend(`Odczuwalna temperatura ${feelsLikeData}`)


}

//date and time

const displayDate = document.querySelector("#date")
const currentDate = () => {
    const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    const current = new Date();
    const dayOfWeek = current.getDay();
    const month = current.getMonth();
    const date = current.getDate();

    displayDate.innerText = `${daysOfWeek[dayOfWeek]} ${months[month]} ${date}`;
}

// images 

// const displayWeatherIcon = (res) => {
//     if (res.data.list[0].weather[0].description == "clear sky") {
//         weatherIconDisplay.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png"
//     } else if (res.data.list[0].weather[0].description == "scattered clouds") {
//         weatherIconDisplay.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png"
//     }

// }

currentDate()
weatherApi()
