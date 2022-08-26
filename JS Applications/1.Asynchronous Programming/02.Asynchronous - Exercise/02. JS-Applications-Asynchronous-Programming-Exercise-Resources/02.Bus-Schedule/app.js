function solve() {

    let currentStop = 'depot';
    let nextStop = '';
    
    let info = document.querySelector('.info');
    
    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.getElementById('arrive');

    
    function depart() {

        let url = ` http://localhost:3030/jsonstore/bus/schedule/${currentStop}`;
        
     fetch(url)
     .then(res =>{
         if (!res.ok) {
             throw new Error('Error');
         }
       return res.json();
     })
     .then(data => {
         info.textContent = 'Next stop ' + data.name;
         currentStop = data.name;
         nextStop = data.next;
     })
       .catch(() =>{
        info.textContent = 'Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
       });
     departBtn.disabled = true;
     arriveBtn.disabled = false;
    }

    function arrive() {
       info.textContent = 'Arriving at ' + currentStop;

       departBtn.disabled = false;
       arriveBtn.disabled = true;
       currentStop = nextStop;
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();