
setInterval(showTime, 1000);


function showTime() {

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";


    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;


    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime();




const apiKey = "key";



let reop = {
    methord: 'GET'
};

fetch("http://api.weatherapi.com/v1/current.json?key=992a3649a580464780e194614240601&q=colombo", reop)
.then(responce=> responce.json())
.then(data => {
        console.log(data);

        document.getElementById("main-temp").innerHTML = data["current"]["temp_c"] + "C";
        document.getElementById("location").innerHTML = data["location"]["name"];
        document.getElementById("main-city").innerHTML = data["location"]["name"];
        document.getElementById("temperature").innerHTML = data["current"]["temp_c"] + "C";
        document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
        document.getElementById("speed").innerHTML = data["current"]["wind_kph"] + "Km/h";
        document.getElementById("main-city").innerHTML = data["current"]["condition"]["text"];
        document.getElementById("condition").innerHTML = data["current"]["condition"]["text"];
        document.getElementById("region").innerHTML = data["location"]["region"];
        document.getElementById("country").innerHTML = data ["location"]["country"];
        

        
        
        

    })
    .then(error => console.log("error", error))




document.getElementById("search-button").addEventListener("click", () => {
    let searchVal=document.getElementById("location-input").value;
    let reop = {
        methord: 'GET'
    };

    fetch(`http://api.weatherapi.com/v1/current.json?key=992a3649a580464780e194614240601&q=${searchVal}`, reop)
    .then(responce=> responce.json())
    .then(data => {
            console.log(data);

            document.getElementById("main-temp").innerHTML = data["current"]["temp_c"] + "C";
            document.getElementById("location").innerHTML = data["location"]["name"];
            document.getElementById("main-city").innerHTML = data["location"]["name"];
            document.getElementById("temperature").innerHTML = data["current"]["temp_c"] + "C";
            document.getElementById("humidity").innerHTML = data["current"]["humidity"] + "%";
            document.getElementById("speed").innerHTML = data["current"]["wind_kph"] + "Km/h";
            document.getElementById("main-city").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("condition").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("region").innerHTML = data["location"]["region"];
            document.getElementById("country").innerHTML = data["location"]["country"];
            

            
            
            

        })
        .then(error => console.log("error", error))
})