// === getting the location === //

window.addEventListener('load', ()=> {

    let lat;
    let long;
    let right_date = document.querySelector('.right-date');
    let right_time = document.querySelector('.right-time');
    let swell_Height = document.querySelector('.swell-height');
    let swell_Direction = document.querySelector('.swell-direction');

    // === Getting Date and Time === //
    
    function dateTime() {
        
        var date = new Date();
        var dateNow = date.toDateString();
        var timeNow = date.toLocaleTimeString();

        right_date.textContent = dateNow;
        right_time.textContent = timeNow;
        

        //setInterval(right_time, 1000);
        
    
    };

     dateTime();
     
       

    if(navigator.geolocation){

        const params = 'swellHeight,swellPeriod,swellDirection,airTemperature,waveHeight,waveDirection,waterTemperature';

        navigator.geolocation.getCurrentPosition(position =>{

            long = 17.8081;
            lat = 58.7984;


            //long = position.coords.longitude;
            //lat = position.coords.latitude;

            // setting up API
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}&start=2020-02-24&end=2020-02-25`, {
                headers: {
                    'Authorization': '676db6ce-1dae-11ec-8169-0242ac130002-676db7a0-1dae-11ec-8169-0242ac130002'
                 }
            }).then((response) => response.json()).then((jsonData) => {
                // Do something with response data.
                console.log(jsonData);
                const {swellHeight, swellDirection} = jsonData.hours;

                // Setting DOM elements from API

                swell_Height.textContent = swellHeight;
                //swell_Direction.textContent = Math.floor(swellDirection);
            });

        });
    } else {
        alert('Hey, this is not working! Enable your location on the browser.');
    }
      
});


