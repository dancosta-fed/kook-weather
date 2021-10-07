// === getting the location === //

window.addEventListener('load', ()=> {

    let lat;
    let lng;
    const right_date = document.querySelector('.right-date');
    const right_time = document.querySelector('.right-time');
    const temperature = document.querySelector('.temperature');
    const city_name = document.querySelector('.beach');

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
            lat = position.coords.latitude;
            lng = position.coords.longitude;

            // == LAT AND LNG Testing == //

            // // RIVERTON COORDS
            // lat = -46.3611; 
            // lng = 167.8780;
            
            // === Reverse Geocoding === //
           fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=Bmj-VJtAukDtkaOgmDCEh3ghSHZhu-yPiUeQRx52gbI&at=${lat},${lng}&lang=en-US`)
           .then(response => response.json())
           .then(data => {

            let cityName = data.items[0].address.city;

            city_name.innerHTML = cityName;

            console.log(cityName);
           });


            const today = Math.round(new Date().getTime()/ 1000).toString();
            const tomorrow = today * 2;

            // === Weather API === //
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${today}&end=${tomorrow}`, { 
                headers: {
                    'Authorization': '676db6ce-1dae-11ec-8169-0242ac130002-676db7a0-1dae-11ec-8169-0242ac130002'
                 }
            }).then((response) => response.json())
              .then((jsonData) => {
  
                // === AIR TEMPERATURE NOW === //
                
                let temperatureValue = (jsonData.hours[11].airTemperature.sg).toFixed(0);

                // Find out a way to use real time temperature... ??????
                // if 0 is north and 180 is south / 90 east 270 west = how to convert swell direction??
              
                // === Selecting SG info 

                
                // Midnight
                let swellHeight = jsonData.hours[0].swellHeight.sg;
                let swellDirection = jsonData.hours[0].swellDirection.sg;
                let swellPeriod = jsonData.hours[0].swellPeriod.sg;
                let waterTemperature = jsonData.hours[0].waterTemperature.sg.toFixed(0);

                // 6h
                //let temperatureValue_6 = jsonData.hours[6].airTemperature.sg;
                let swellHeight_6 = jsonData.hours[6].swellHeight.sg;
                let swellDirection_6 = jsonData.hours[6].swellDirection.sg;
                let swellPeriod_6 = jsonData.hours[6].swellPeriod.sg;
                let waterTemperature_6 = jsonData.hours[6].waterTemperature.sg.toFixed(0);

                // 9h
                //let temperatureValue_9 = jsonData.hours[9].airTemperature.sg;
                let swellHeight_9 = jsonData.hours[9].swellHeight.sg;
                let swellDirection_9 = jsonData.hours[9].swellDirection.sg;
                let swellPeriod_9 = jsonData.hours[9].swellPeriod.sg;
                let waterTemperature_9 = jsonData.hours[9].waterTemperature.sg.toFixed(0);

                // Noon
                //let temperatureValue_12 = jsonData.hours[12].airTemperature.sg;
                let swellHeight_12 = jsonData.hours[12].swellHeight.sg;
                let swellDirection_12 = jsonData.hours[12].swellDirection.sg;
                let swellPeriod_12 = jsonData.hours[12].swellPeriod.sg;
                let waterTemperature_12 = jsonData.hours[12].waterTemperature.sg.toFixed(0);

                // 15h
                //let temperatureValue_15 = jsonData.hours[15].airTemperature.sg;
                let swellHeight_15 = jsonData.hours[15].swellHeight.sg;
                let swellDirection_15 = jsonData.hours[15].swellDirection.sg;
                let swellPeriod_15 = jsonData.hours[15].swellPeriod.sg;
                let waterTemperature_15 = jsonData.hours[15].waterTemperature.sg.toFixed(0);

                // 18h
                //let temperatureValue_18 = jsonData.hours[18].airTemperature.sg;
                let swellHeight_18 = jsonData.hours[18].swellHeight.sg;
                let swellDirection_18 = jsonData.hours[18].swellDirection.sg;
                let swellPeriod_18 = jsonData.hours[18].swellPeriod.sg;
                let waterTemperature_18 = jsonData.hours[18].waterTemperature.sg.toFixed(0);

            

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



                 
              // === Swell Direction COORDINATES

              // ========================= NORTH ========================= //

              // N
              if ( swellDirection > 0 < 10, // || swellDirection > 350 < 360 ,
                swellDirection > 0 < 10, // || swellDirection > 350 < 360,
                swellDirection > 0 < 10, // || swellDirection > 350 < 360,
                swellDirection > 0 < 10, // || swellDirection > 350 < 360,
                swellDirection > 0 < 10 // || swellDirection > 350 < 360
            ) {
                swell_Direction.innerHTML = 'N';
                swell_Direction_6.innerHTML = 'N';
                swell_Direction_9.innerHTML = 'N';
                swell_Direction_12.innerHTML = 'N';
                swell_Direction_15.innerHTML = 'N';
                swell_Direction_18.innerHTML = 'N';
              } 

             // NNE
              else if ( swellDirection > 11 < 40,
                swellDirection_6 > 11 < 40,
                swellDirection_12 > 11 < 40,
                swellDirection_15 > 11 < 40,
                swellDirection_18 > 11 < 40
            ) {
                swell_Direction.innerHTML = 'NNE';
                swell_Direction_6.innerHTML = 'NNE';
                swell_Direction_9.innerHTML = 'NNE';
                swell_Direction_12.innerHTML = 'NNE';
                swell_Direction_15.innerHTML = 'NNE';
                swell_Direction_18.innerHTML = 'NNE';
                
              }

             // NE
             else if ( swellDirection > 41 < 50,
                swellDirection_6 > 41 < 50,
                swellDirection_12 > 41 < 50,
                swellDirection_15 > 41 < 50,
                swellDirection_18 > 41 < 50
            ) {
                swell_Direction.innerHTML = 'NE';
                swell_Direction_6.innerHTML = 'NE';
                swell_Direction_9.innerHTML = 'NE';
                swell_Direction_12.innerHTML = 'NE';
                swell_Direction_15.innerHTML = 'NE';
                swell_Direction_18.innerHTML = 'NE';
                
              }

             // ENE
             else if ( swellDirection > 51 < 79,
                swellDirection_6 > 51 < 79,
                swellDirection_12 > 51 < 79,
                swellDirection_15 > 51 < 79,
                swellDirection_18 > 51 < 79
            ) {
                swell_Direction.innerHTML = 'ENE';
                swell_Direction_6.innerHTML = 'ENE';
                swell_Direction_9.innerHTML = 'ENE';
                swell_Direction_12.innerHTML = 'ENE';
                swell_Direction_15.innerHTML = 'ENE';
                swell_Direction_18.innerHTML = 'ENE';
                
              }

              // NW
              else if ( swellDirection > 310 < 320,
                swellDirection_6 > 310 < 320,
                swellDirection_12 > 310 < 320,
                swellDirection_15 > 310 < 320,
                swellDirection_18 > 310 < 320
                
            ) {
                swell_Direction.innerHTML = 'NW';
                swell_Direction_6.innerHTML = 'NW';
                swell_Direction_9.innerHTML = 'NW';
                swell_Direction_12.innerHTML = 'NW';
                swell_Direction_15.innerHTML = 'NW';
                swell_Direction_18.innerHTML = 'NW';
                
              } 

             // NNW
              else if ( swellDirection > 321 < 349,
                swellDirection_6 > 321 < 349,
                swellDirection_12 > 321 < 349,
                swellDirection_15 > 321 < 349,
                swellDirection_18 > 321 < 349
                
            ) {
                swell_Direction.innerHTML = 'NNW';
                swell_Direction_6.innerHTML = 'NNW';
                swell_Direction_9.innerHTML = 'NNW';
                swell_Direction_12.innerHTML = 'NNW';
                swell_Direction_15.innerHTML = 'NNW';
                swell_Direction_18.innerHTML = 'NNW';
                
              }
              
             // WNW
              else if ( swellDirection > 290 < 309,
                swellDirection_6 > 290 < 309,
                swellDirection_12 > 290 < 309,
                swellDirection_15 > 290 < 309,
                swellDirection_18 > 290 < 309
                
            ) {
                swell_Direction.innerHTML = 'WNW';
                swell_Direction_6.innerHTML = 'WNW';
                swell_Direction_9.innerHTML = 'WNW';
                swell_Direction_12.innerHTML = 'WNW';
                swell_Direction_15.innerHTML = 'WNW';
                swell_Direction_18.innerHTML = 'WNW';
                
              }

             // ========================= SOUTH ========================= //
             

             // S
              else if ( swellDirection > 171 < 190,
                swellDirection_6 > 171 < 190,
                swellDirection_12 > 171 < 190,
                swellDirection_15 > 171 < 190,
                swellDirection_18 > 171 < 190 ) {
                swell_Direction.innerHTML = 'S';
                swell_Direction_6.innerHTML = 'S';
                swell_Direction_9.innerHTML = 'S';
                swell_Direction_12.innerHTML = 'S';
                swell_Direction_15.innerHTML = 'S';
                swell_Direction_18.innerHTML = 'S';
    
              } 

             // ESE
             else if ( swellDirection > 91 < 130,
                swellDirection_6 > 91 < 130,
                swellDirection_12 > 91 < 130,
                swellDirection_15 > 91 < 130,
                swellDirection_18 > 91 < 130
                ) {
                swell_Direction.innerHTML = 'ESE';
                swell_Direction_6.innerHTML = 'ESE';
                swell_Direction_9.innerHTML = 'ESE';
                swell_Direction_12.innerHTML = 'ESE';
                swell_Direction_15.innerHTML = 'ESE';
                swell_Direction_18.innerHTML = 'ESE';
                
              } 

            // SE 
              else if ( swellDirection > 131 < 140,
                swellDirection_6 > 131 < 140,
                swellDirection_12 > 131 < 140,
                swellDirection_15 > 131 < 140,
                swellDirection_18 > 131 < 140
                ) {
                swell_Direction.innerHTML = 'SE';
                swell_Direction_6.innerHTML = 'SE';
                swell_Direction_9.innerHTML = 'SE';
                swell_Direction_12.innerHTML = 'SE';
                swell_Direction_15.innerHTML = 'SE';
                swell_Direction_18.innerHTML = 'SE';
                
              } 

             // SSE
              else if ( swellDirection > 141 < 170,
                swellDirection_6 > 141 < 170,
                swellDirection_12 > 141 < 170,
                swellDirection_15 > 141 < 170,
                swellDirection_18 > 141 < 170
                ) {
                swell_Direction.innerHTML = 'SSE';
                swell_Direction_6.innerHTML = 'SSE';
                swell_Direction_9.innerHTML = 'SSE';
                swell_Direction_12.innerHTML = 'SSE';
                swell_Direction_15.innerHTML = 'SSE';
                swell_Direction_18.innerHTML = 'SSE';
                
              } 

             // SSW
             else if ( swellDirection > 191 < 210,
                swellDirection_6 > 191 < 210,
                swellDirection_12 > 191 < 210,
                swellDirection_15 > 191 < 210,
                swellDirection_18 > 191 < 210
            ) {
                swell_Direction.innerHTML = 'SSW';
                swell_Direction_6.innerHTML = 'SSW';
                swell_Direction_9.innerHTML = 'SSW';
                swell_Direction_12.innerHTML = 'SSW';
                swell_Direction_15.innerHTML = 'SSW';
                swell_Direction_18.innerHTML = 'SSW';
                
              } 

             // SW
             else if ( swellDirection > 180 < 270,
                swellDirection_6 > 180 < 270,
                swellDirection_12 > 180 < 270,
                swellDirection_15 > 180 < 270,
                swellDirection_18 > 180 < 270) {
                swell_Direction.innerHTML = 'SW';
                swell_Direction_6.innerHTML = 'SW';
                swell_Direction_9.innerHTML = 'SW';
                swell_Direction_12.innerHTML = 'SW';
                swell_Direction_15.innerHTML = 'SW';
                swell_Direction_18.innerHTML = 'SW';
                
              } 
            
              // WSW
             else if ( swellDirection > 240 < 260,
                swellDirection_6 > 240 < 260,
                swellDirection_12 > 240 < 260,
                swellDirection_15 > 240 < 260,
                swellDirection_18 > 240 < 260
            ) {
                swell_Direction.innerHTML = 'WSW';
                swell_Direction_6.innerHTML = 'WSW';
                swell_Direction_9.innerHTML = 'WSW';
                swell_Direction_12.innerHTML = 'WSW';
                swell_Direction_15.innerHTML = 'WSW';
                swell_Direction_18.innerHTML = 'WSW';
                
              } 



            // ========================= EAST ========================= //

              // EAST
              else if ( swellDirection > 80 < 100,
                swellDirection_6 > 80 < 100,
                swellDirection_12 > 80 < 100,
                swellDirection_15 > 80 < 100,
                swellDirection_18 > 80 < 100 
            ) {
                swell_Direction.innerHTML = 'E';
                swell_Direction_6.innerHTML = 'E';
                swell_Direction_9.innerHTML = 'E';
                swell_Direction_12.innerHTML = 'E';
                swell_Direction_15.innerHTML = 'E';
                swell_Direction_18.innerHTML = 'E';

              } 

             // ========================= WEST ========================= //

              else if ( swellDirection > 260 < 280,
                swellDirection_6 > 260 < 280,
                swellDirection_12 > 260 < 280,
                swellDirection_15 > 260 < 280,
                swellDirection_18 > 260 < 280
            ) {
                swell_Direction.innerHTML = 'W';
                swell_Direction_6.innerHTML = 'W';
                swell_Direction_9.innerHTML = 'W';
                swell_Direction_12.innerHTML = 'W';
                swell_Direction_15.innerHTML = 'W';
                swell_Direction_18.innerHTML = 'W';
                
              } 

            });

        });
    } else {
        alert('Hey, this is not working! Enable your location on the browser.');
    }
      
 });  