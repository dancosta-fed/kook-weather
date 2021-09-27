// === getting the location === //

window.addEventListener('load', ()=> {

    let lat;
    let long;
    let right_date = document.querySelector('.right-date');
    let right_time = document.querySelector('.right-time');
    let temperature = document.querySelector('.temperature');
    let swell_Height = document.querySelector('.swell-height');
    let swell_Direction = document.querySelector('.swell-direction');

    // === Getting Date and Time === //
    
    function dateTime() {
        
        const currentDate = new Date();
        const dateNow = currentDate.toDateString();
        const timeNow = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second:'numeric' });

        right_date.textContent = dateNow;
        right_time.textContent = timeNow;

        function realTime () {
            setInterval(timeNow), 1000
        };
       // realTime()
    
    };

     dateTime()
    

    // ====== FETCHING API ====== //

     
       

    if(navigator.geolocation){

        const params = 'swellHeight,swellPeriod,swellDirection,airTemperature,waveHeight,waveDirection,waterTemperature';

        navigator.geolocation.getCurrentPosition(position =>{

            //long = 17.8081;
            //lat = 58.7984;


            long = position.coords.longitude;
            lat = position.coords.latitude;

            // setting up API
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}&start=2020-02-24&end=2020-02-24`, {
                headers: {
                    'Authorization': '676db6ce-1dae-11ec-8169-0242ac130002-676db7a0-1dae-11ec-8169-0242ac130002'
                 }
            }).then((response) => response.json()).then((jsonData) => {
  
              // === Selecting SG info 
                
              let temperatureValue = jsonData.hours[0].airTemperature.sg;

              temperature.innerHTML = temperatureValue;

              console.log(temperatureValue);

                
                
               
                    
                
                

                
                

            
               
                
                // === Setting DOM elements from API

                
                // swell_Height.textContent = swellHeight;
                // swell_Direction.textContent = Math.floor(swellDirection);
            });

        });
    } else {
        alert('Hey, this is not working! Enable your location on the browser.');
    }
      
 });

//    