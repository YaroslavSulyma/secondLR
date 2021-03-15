const fetch = require("node-fetch");

function getWeatherByCoordinates(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1b5ee5a1a74d624a74750350327ea372`)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        console.log(data);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}

function gethWeatherByCity(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b5ee5a1a74d624a74750350327ea372`)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        console.log(data);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}

function getWeatherIcon(iconCode){
  let iconLink
  fetch(`http://openweathermap.org/img/w/${iconCode}.png`)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.blob().then(icon=> {  
        iconLink = URL.createObjectURL(icon)
        console.log(iconLink.toString());  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}

getWeatherIcon('03d')