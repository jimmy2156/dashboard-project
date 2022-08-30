fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=batman")
  .then(res => res.json())
  .then(data => {
    
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("authorname").textContent = `By: ${data.user.name}`
  })
  .catch(err => {
    console.log("theres error")
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1597998365920-d8eb2bb14cf4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3NTgxNjQ&ixlib=rb-1.2.1&q=80")`
  })
  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("not working")
        }
        console.log(res.ok)
        console.log(res.status)
        return res.json()})
    .then(data => {
        console.log(data)
        document.getElementById("indiancrypto").innerHTML = `<img src='${data.image.small}' >`
        document.getElementById('cryptoname').textContent = `${data.name}`
        document.getElementById("currentrate").textContent = `Current rate = ${data.market_data.current_price.inr} rs`
        document.getElementById('status2').textContent = `Last 24 hour high price = ${data.market_data.high_24h.inr} rs`
        document.getElementById("status3").textContent = `Last 24 hour Low price = ${data.market_data.low_24h.inr} rs`

    })
    .catch(err => console.log("something is wrong"))


    function settingTime() {
    const d = new Date();
document.getElementById("time").innerHTML = d.toLocaleTimeString()
    }
setInterval(settingTime, 1000)
navigator.geolocation.getCurrentPosition((position) => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => res.json())
    .then(data => {  console.log(data)
      const iconWe = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
    document.getElementById("icon").innerHTML = `<img src="${iconWe}" >
    <p>${data.name}</p>
    <p>${(data.weather[0].description).toUpperCase()}</p>
   <p>Current temprature: ${Math.round(data.main.temp)} C</p>
   <p>Feels like: ${Math.round(data.main.feels_like)} C</p>

    
    
    `
    
    
    })
  });