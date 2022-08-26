 function attachEvents() {
    
    let input = document.getElementById('location');
    let getBtn = document.getElementById('submit');
    getBtn.addEventListener('click',getWeather);

    let forecastDiv = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');

  async function getWeather(){
  let url = `http://localhost:3030/jsonstore/forecaster/locations`;
  
    try{
         let response = await fetch(url) ;
         if (!response.ok) {
             throw new Error('Error');
         }
    let data = await response.json();

      let location = data.find(l => l.name === input.value);

      if (location === undefined) {
        throw new Error('Error')
      }
      console.log(location.name);
              conditioning(location.code);

    }catch{
       
       alert('Error')
    }
    input.value = '';
   }
 
  async function conditioning(city){
       let url = `http://localhost:3030/jsonstore/forecaster/today/${city}`;

       fetch(url)
         .then(res => res.json())
           .then(data => {
             let symbol = '';
             let objectSymbol = {Sunny:`☀`,
                                 'Partly sunny':'⛅',
                                  Overcast:'☁',
                                  Rain:'☂',
                                  Degrees:'°'};
             let conditionSymbol = data.forecast.condition;
             if (objectSymbol[conditionSymbol]) {
                  symbol = objectSymbol[conditionSymbol];
                 
             }
             
         let result =  e('div',{className: 'forecasts'},
                 e('span',{className:'condition symbol'},`${symbol}`),
                 e('span',{className: 'condition'},
                      e('span',{className:'forecast-data'},`${data.name}`),
                      e('span',{className:'forecast-data'},`${data.forecast.low}${objectSymbol.Degrees}${data.forecast.high}${objectSymbol.Degrees}`),
                      e('span',{className:'forecast-data'},`${conditionSymbol}`)));
              
           forecastDiv.style.display = 'block';
           currentDiv.innerHTML = '';
           currentDiv.appendChild(result);       
           return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${city}`);    
           }).then(body => body.json())
             .then(info =>{
             
              let objectSymbol = {Sunny:`☀`,
                                  'Partly sunny':'⛅',
                                   Overcast:'☁',
                                   Rain:'☂',
                                   Degrees:'°'};
             
                let infoDiv = document.createElement('div');
               infoDiv.setAttribute('class','forecast-info');
                  upcomingDiv.innerHTML = '';
                   for (const day of info.forecast) {
                      let result = e('span',{className:'upcoming'},
                       e('span',{className:'symbol'},objectSymbol[day.condition]),
                       e('span',{className:'forecast-data'},day.low + objectSymbol.Degrees +'/'+ day.high + objectSymbol.Degrees),
                       e('span',{className:'forecast-data'},day.condition));
                       infoDiv.appendChild(result);
              
                upcomingDiv.appendChild(infoDiv);
                   }    
               
             });

   }

   function e(type, attributes, ...content) {
    const result = document.createElement(type);
  
    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }
    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
  
    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });
    return result;
  }
     
}

attachEvents();