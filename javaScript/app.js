// === getting the location === //

window.addEventListener('load', ()=> {

    let lat;
    let lng;
    const right_date = document.querySelector('.right-date');
    const right_time = document.querySelector('.right-time');
    const temperature = document.querySelector('.temperature');

    // swell Height
    const swell_Height = document.querySelector('.swell-height');
    const swell_Height_6 = document.querySelector('.swell-height-6');
    const swell_Height_9 = document.querySelector('.swell-height-9');
    const swell_Height_12 = document.querySelector('.swell-height-12');
    const swell_Height_15 = document.querySelector('.swell-height-15');
    const swell_Height_18 = document.querySelector('.swell-height-18');

    // swell Direction
    const swell_Direction = document.querySelector('.swell-direction');
    const swell_Direction_6 = document.querySelector('.swell-direction-6');
    const swell_Direction_9 = document.querySelector('.swell-direction-9');
    const swell_Direction_12 = document.querySelector('.swell-direction-12');
    const swell_Direction_15 = document.querySelector('.swell-direction-15');
    const swell_Direction_18 = document.querySelector('.swell-direction-18');

    // swell Period
    const swell_Period = document.querySelector('.swell-period');
    const swell_Period_6 = document.querySelector('.swell-period-6');
    const swell_Period_9 = document.querySelector('.swell-period-9');
    const swell_Period_12 = document.querySelector('.swell-period-12');
    const swell_Period_15 = document.querySelector('.swell-period-15');
    const swell_Period_18 = document.querySelector('.swell-period-18');

    // water Temperature
    const water_temperature = document.querySelector('.water-temperature');
    const water_temperature_6 = document.querySelector('.water-temperature-6');
    const water_temperature_9 = document.querySelector('.water-temperature-9');
    const water_temperature_12 = document.querySelector('.water-temperature-12');
    const water_temperature_15 = document.querySelector('.water-temperature-15');
    const water_temperature_18 = document.querySelector('.water-temperature-18');
    


   
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
            const tomorrow = today * 2;

            // setting up API
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${today}&end=${tomorrow}`, { 
                headers: {
                    'Authorization': '676db6ce-1dae-11ec-8169-0242ac130002-676db7a0-1dae-11ec-8169-0242ac130002'
                 }
            }).then((response) => response.json()).then((jsonData) => {
  
                // === AIR TEMPERATURE NOW === //

                // ???????????? //
                
                // For Loop

              //******* === > But how? <=== *******// 
              
              
                // === Selecting SG info 
                
                // Midnight
                let temperatureValue = jsonData.hours[0].airTemperature.sg;
                let swellHeight = jsonData.hours[0].swellHeight.sg;
                let swellDirection = jsonData.hours[0].swellHeight.sg;
                let swellPeriod = jsonData.hours[0].swellPeriod.sg;
                let waterTemperature = jsonData.hours[0].waterTemperature.sg;

                // 6h
                //let temperatureValue_6 = jsonData.hours[6].airTemperature.sg;
                let swellHeight_6 = jsonData.hours[6].swellHeight.sg;
                let swellDirection_6 = jsonData.hours[6].swellHeight.sg;
                let swellPeriod_6 = jsonData.hours[6].swellPeriod.sg;
                let waterTemperature_6 = jsonData.hours[6].waterTemperature.sg;

                // 9h
                //let temperatureValue_9 = jsonData.hours[9].airTemperature.sg;
                let swellHeight_9 = jsonData.hours[9].swellHeight.sg;
                let swellDirection_9 = jsonData.hours[9].swellHeight.sg;
                let swellPeriod_9 = jsonData.hours[9].swellPeriod.sg;
                let waterTemperature_9 = jsonData.hours[9].waterTemperature.sg;

                // Noon
                //let temperatureValue_12 = jsonData.hours[12].airTemperature.sg;
                let swellHeight_12 = jsonData.hours[12].swellHeight.sg;
                let swellDirection_12 = jsonData.hours[12].swellHeight.sg;
                let swellPeriod_12 = jsonData.hours[12].swellPeriod.sg;
                let waterTemperature_12 = jsonData.hours[12].waterTemperature.sg;

                // 15h
                //let temperatureValue_15 = jsonData.hours[15].airTemperature.sg;
                let swellHeight_15 = jsonData.hours[15].swellHeight.sg;
                let swellDirection_15 = jsonData.hours[15].swellHeight.sg;
                let swellPeriod_15 = jsonData.hours[15].swellPeriod.sg;
                let waterTemperature_15 = jsonData.hours[15].waterTemperature.sg;

                // 18h
                //let temperatureValue_18 = jsonData.hours[18].airTemperature.sg;
                let swellHeight_18 = jsonData.hours[18].swellHeight.sg;
                let swellDirection_18 = jsonData.hours[18].swellHeight.sg;
                let swellPeriod_18 = jsonData.hours[18].swellPeriod.sg;
                let waterTemperature_18 = jsonData.hours[18].waterTemperature.sg;

                

              // === Setting DOM elements from API

              // Air Temperature NOW
                // Goes here // 

            // Midnight
                temperature.innerHTML = temperatureValue;
                swell_Height.innerHTML = swellHeight;
                swell_Direction.innerHTML = swellDirection;
                swell_Period.innerHTML = swellPeriod;
                water_temperature.innerHTML = waterTemperature;

            // 6am  
                //temperature_6.innerHTML = temperatureValue;
                swell_Height_6.innerHTML = swellHeight_6;
                swell_Direction_6.innerHTML = swellDirection_6;
                swell_Period_6.innerHTML = swellPeriod_6;
                water_temperature_6.innerHTML = waterTemperature_6;

            // 9am  
                //temperature_9.innerHTML = temperatureValue;
                swell_Height_9.innerHTML = swellHeight_9;
                swell_Direction_9.innerHTML = swellDirection_9;
                swell_Period_9.innerHTML = swellPeriod_9;
                water_temperature_9.innerHTML = waterTemperature_9;

            // Noon  
                //temperature_12.innerHTML = temperatureValue;
                swell_Height_12.innerHTML = swellHeight_12;
                swell_Direction_12.innerHTML = swellDirection_12;
                swell_Period_12.innerHTML = swellPeriod_12;
                water_temperature_12.innerHTML = waterTemperature;

            // 3pm 
                //temperature_15.innerHTML = temperatureValue;
                swell_Height_15.innerHTML = swellHeight_15;
                swell_Direction_15.innerHTML = swellDirection_15;
                swell_Period_15.innerHTML = swellPeriod_15;
                water_temperature_15.innerHTML = waterTemperature_15;

            // 6pm  
                //temperature_18.innerHTML = temperatureValue;
                swell_Height_18.innerHTML = swellHeight_18;
                swell_Direction_18.innerHTML = swellDirection_18;
                swell_Period_18.innerHTML = swellPeriod_18;
                water_temperature_18.innerHTML = waterTemperature_18;



                 
                //* === ALSO FIX CSS FOR MOBILE FIRST APPROACH

            });

        });
    } else {
        alert('Hey, this is not working! Enable your location on the browser.');
    }
      
 });  