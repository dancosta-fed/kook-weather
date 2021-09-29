// === getting the location === //

window.addEventListener('load', ()=> {

    let lat;
    let lng;
    const right_date = document.querySelector('.right-date');
    const right_time = document.querySelector('.right-time');
    const temperature = document.querySelector('.temperature');
    const swell_Height = document.querySelector('.swell-height');
    const swell_Direction = document.querySelector('.swell-direction');
    const swell_Period = document.querySelector('.swell-period');
    const water_temperature = document.querySelector('.water-temperature');
    const wind_Speed = document.querySelector('.wind-speed'); 


   
    // === Getting Date and Time === //

    
    const timeAndClock = () => {

        const dateNow = new Date().toDateString();
        right_date.textContent = dateNow;
        right_time.innerHTML = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second:'numeric' });
        ;
      }
      
      setInterval(timeAndClock, 1000);

 

    // ====== FETCHING API ====== //

     
       

    if(navigator.geolocation){

        const params = 'swellHeight,swellPeriod,swellDirection,airTemperature,waveHeight,waveDirection,waterTemperature';

        navigator.geolocation.getCurrentPosition(position =>{

            // lng = position.coords.longitude;
            // lat = position.coords.latitude;

            lat = 60.936;
            lng = 5.114;


            const today = Math.round(new Date().getTime()/ 1000).toString();
            //const today = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second:'numeric' });

                //--- code to convert the date to Unix Timestamp
            //const rightTime = Math.round(today / 1000).toString();

                
            

            // setting up API
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=2021-09-29&end=2021-09-30`, { 
                headers: {
                    'Authorization': '676db6ce-1dae-11ec-8169-0242ac130002-676db7a0-1dae-11ec-8169-0242ac130002'
                 }
            }).then((response) => response.json()).then((jsonData) => {
  
              // === Selecting SG info 
           
                let temperatureValue = jsonData.hours[0].airTemperature.sg;
                let swellHeight = jsonData.hours[0].swellHeight.sg;
                let swellDirection = jsonData.hours[0].swellHeight.sg;
                let swellPeriod = jsonData.hours[0].swellPeriod.sg;
                let waterTemperature = jsonData.hours[0].waterTemperature.sg;

              // === Setting DOM elements from API

                temperature.innerHTML = temperatureValue;
                swell_Height.innerHTML = swellHeight;
                swell_Direction.innerHTML = swellDirection;
                swell_Period.innerHTML = swellPeriod;
                water_temperature.innerHTML = waterTemperature;


                //* === BUILD A FUNCTION TO DEFINE "i", THEN SWITCH .HOURS[0] FOR .HOURS[i]. REPLICATE THE FUNCTION FOR EVERY HOUR. 
                //* === ALSO FIX CSS FOR MOBILE FIRST APPROACH

            });

        });
    } else {
        alert('Hey, this is not working! Enable your location on the browser.');
    }
      
 });  