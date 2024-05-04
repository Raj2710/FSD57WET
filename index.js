//async/await
// 1. Need to give the function async
//2. await can be used only inside the async function


//Promise using then and catch
// function display(){
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res=>res.json())
//   .then(data=>console.log(data))
//   .catch(error=>console.error(error))
// }

//async and await
async function getWeather(lat,lng){
    const API_KEY = "1df01ea2c0ed525b7685b8d43188acfd"
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    let res = await fetch(url)
    let data = await res.json()

    //converting kelvin to celcius
    let temp = Math.round(data.main.temp - 273.15)

    alert(`The weather is ${data.weather[0].main} with temprature of ${temp} Celcius`)
}

async function display(){
    try{
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json()
        if(data)
        {
            let root = document.getElementById("root")

            data.forEach((e,i)=>{
                let div =  document.createElement("div")
                div.innerHTML = `
                <div class="card" style="width: 18rem;padding: 15px; margin: 10px;">
                    <img src="${e.flags.png}" class="card-img-top" alt="USA">
                    <div class="card-body" style="text-align: center;">
                        <h5 class="card-title">${e.name.common}</h5>
                        <p class="card-text">${e.capital?e.capital[0]:"No Capital"}</p>
                        <button class="btn btn-primary" onClick="getWeather(${e.latlng[0]},${e.latlng[1]})">Get Weather</button>
                    </div>
                </div>`
                root.appendChild(div)
            })
        }
        else
        {

        }
    }
    catch(error)
    {
        console.error(error)
    }
  }

display()