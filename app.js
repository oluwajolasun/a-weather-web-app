// <!------------------------------------------------------------

//     Ohhhh hello there, looks like this project attracted you
//     to find your way here, enjoy your time here but please do
//     not just copy and paste this project I have a third eye 
//     tracking your every move.

// ------------------------------------------------------------->

window.addEventListener('load', function () {
    let dayElement = document.querySelector(".day")
    let dateElement = document.querySelector(".date")
    let monthElement = document.querySelector(".month")
    let yearElement = document.querySelector(".year")
    let hoursElement = document.querySelector(".hour")
    let minutesElement = document.querySelector(".minutes")


    dayArr = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;
    monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let d = new Date()
    dayElement.innerHTML = dayArr[d.getDay()];
    dateElement.innerHTML = d.getDate();
    monthElement.innerHTML = monthArr[d.getMonth()];
    yearElement.innerHTML = d.getFullYear();
    hoursElement.innerHTML = d.getHours();
    minutesElement.innerHTML = d.getMinutes()<10 ? '0'+ d.getMinutes() : d.getMinutes() ;



    let locationElement = document.querySelector(".location");
    let countryElement = document.querySelector(".country");
    let iconElement = document.querySelector(".icon");
    let tempElement = document.querySelector(".temp");
    let descripElement = document.querySelector(".description");
    let feelslikeElement = document.querySelector(".feels-like");
    let maxtempElement = document.querySelector(".max-temp");
    let mintempElement = document.querySelector(".min-temp");
    let windspeedElement = document.querySelector(".wind-speed");

    iconElement.innerHTML = `<img src="./img/icons/unknown.png" class="icon" alt=""></img>`


    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat;
            let lon;

            lon = pos.coords.longitude;
            console.log(lon);
            lat = pos.coords.latitude;
            console.log(lat);
            const key = "7f20e0a54b485b69c5af053f27aa57b5";
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
            console.log(api)

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    tempElement.innerHTML = Math.round(data.main.temp) + `&degC`;

                    locationElement.innerHTML = data.name;

                    countryElement.innerHTML = `, ` + data.sys.country;

                    iconElement.innerHTML = `<img src="./img/icons/${data.weather[0].icon}.png" alt=""></img>`

                    descripElement.innerHTML = data.weather[0].description;

                    feelslikeElement.innerHTML = Math.round(data.main.feels_like) + `&degC`;

                    maxtempElement.innerHTML = Math.round(data.main.temp_max) + `&degC`;

                    mintempElement.innerHTML = Math.round(data.main.temp_min) + `&degC`;

                    windspeedElement.innerHTML = data.wind.speed + `m/s`;


                })
        }, (err) => {
            alert("Sorry, it looks like you denied the geolocation services")
        });
        console.log("Geo working")

    } else {

        alert("Sorry, browser does notsupport geolocation")
        console.log("Geo not working")
    }
})

// <!------------------------------------------------------------
//    Hmmmmmm looks like you are done copying, for that your 
//    punishment will be delivered to you within 3-5 working days.

//    Kind regards.
//    Oluwajolasun Jaiyesimi.
//  ------------------------------------------------------------->