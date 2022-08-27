function solution(){
    if (sessionStorage.getItem('token') !== null) {
           let userEmail = document.querySelector('.email span');
    userEmail.textContent = sessionStorage.getItem('userEmail');
    document.getElementById('logout').addEventListener('click',logout);
    }
 
  document.querySelector('main aside .load').addEventListener('click',getAllCatches);
  let catchesDiv = document.getElementById('catches');
 catchesDiv.innerHTML = '';

 let addBtn = document.querySelector('form .add');
 

 if (sessionStorage.getItem('token') !== null) {
    addBtn.disabled = false;
    document.getElementById('addForm').addEventListener('submit',addCatch);
 }
  
}
async function getAllCatches(){

    let catchesDiv = document.getElementById('catches');
    catchesDiv.innerHTML = '';
    let response = await fetch('http://localhost:3030/data/catches');
    let data = await response.json();
   
    Object.values(data).forEach(c =>{
       let divCatch = document.createElement('div');
       divCatch.classList.add('catch');
       divCatch.innerHTML = `<label>Angler</label>
       <input type="text" class="angler" value=${c.angler}>
       <label>Weight</label>
       <input type="text" class="weight" value=${c.weight}>
       <label>Species</label>
       <input type="text" class="species" value=${c.species}>
       <label>Location</label>
       <input type="text" class="location" value=${c.location}>
       <label>Bait</label>
       <input type="text" class="bait" value=${c.bait}>
       <label>Capture Time</label>
       <input type="number" class="captureTime" value=${c.captureTime}>
       <button class="update" data-id=${c._ownerId} id=${c._id} disabled>Update</button>
       <button class="delete" data-id=${c._ownerId} id=${c._id} disabled>Delete</button>`;

       catchesDiv.appendChild(divCatch);
     
    });

       let deleteBtns = Array.from(document.querySelectorAll('.delete'));
      deleteBtns.forEach(btn =>{
       
          if (btn.dataset.id == sessionStorage.getItem('userId')) {
                btn.disabled = false;
          }
      });
      deleteBtns.forEach(btn => btn.addEventListener('click',deleteCatch));

      let updateBtns = Array.from(document.querySelectorAll('.update'));
      updateBtns.forEach(btn =>{
       
          if (btn.dataset.id == sessionStorage.getItem('userId')) {
                btn.disabled = false;
          }
      });
      updateBtns.forEach(btn => btn.addEventListener('click',uptadeCatch));
}
  async function addCatch(e){
     e.preventDefault();
     let form = new FormData(e.target);
     let angler = form.get('angler');
     let weight = form.get('weight');
     let species = form.get('species');
     let location = form.get('location');
     let bait = form.get('bait');
     let captureTime = form.get('captureTime');

     if (angler == '' || weight == '' || species == '' || location == ''
        || bait == '' || captureTime == '') {
           return alert('All fields are required!');
     }
      let token = sessionStorage.getItem('token');

       let response = await fetch(' http://localhost:3030/data/catches',{
           method:'post',
           headers:{'Content-Type':'application/json',
                    'X-Authorization':token},
            body:JSON.stringify({angler,weight,species,location,bait,captureTime})      
       });
       if (!response.ok) {
           let err = await response.json();
           return alert(err.message);
       }
       await response.json();

        getAllCatches();
      
  }
  async function deleteCatch(e){
      e.preventDefault();
     
     
      await fetch('http://localhost:3030/data/catches/' + e.target.id,{
          method:'delete',
          headers:{'X-Authorization':sessionStorage.getItem('token')}
      });
      e.target.parentElement.remove();
      
  }

  async function uptadeCatch(e){
    e.preventDefault();
     let angler = e.target.parentElement.querySelector('.angler').value;
     let weight = e.target.parentElement.querySelector('.weight').value;
     let species = e.target.parentElement.querySelector('.species').value;
     let location = e.target.parentElement.querySelector('.location').value;
     let bait = e.target.parentElement.querySelector('.bait').value;
     let captureTime = e.target.parentElement.querySelector('.captureTime').value;

    await fetch('http://localhost:3030/data/catches/' + e.target.id,{
        method:'put',
        headers:{'Content-Type':'application/json',
        'X-Authorization':sessionStorage.getItem('token')},
        body:JSON.stringify({angler,weight,species,location,bait,captureTime})
    });
    getAllCatches();
  }
async function logout(e){
    e.preventDefault();
    await fetch('http://localhost:3030/users/logout',{
        headers:{'Content-Type':'application/json'}
    });
    sessionStorage.clear();
    let userEmail = document.querySelector('.email span');
    userEmail.textContent = 'guest';

    location.assign('./index.html');
}

solution();