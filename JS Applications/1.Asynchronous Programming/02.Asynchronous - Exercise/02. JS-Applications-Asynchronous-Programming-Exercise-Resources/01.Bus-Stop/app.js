async function getInfo() {

    let stopId = document.querySelector('#stopId');

  let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
   
  let stopName = document.getElementById('stopName');
   let ulList = document.getElementById('buses');
try{
    ulList.innerHTML = '';
     let response = await fetch(url);
     let data = await response.json();
     if (!response.ok) {
         throw new Error(response.statusText);
     }
     stopName.textContent = data.name;
Object.entries(data.buses).forEach(([k,v]) => {
    
     let li = document.createElement('li');
    li.textContent = `Bus ${k} arrives in ${v} minutes`;
    ulList.appendChild(li);
}
)
stopId.value = '';
      
} catch{
    stopName.textContent = 'Error';
 }   
}