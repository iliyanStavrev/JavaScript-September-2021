function attachEvents() {
  document.getElementById('btnLoad').addEventListener('click',showInfo);
  document.getElementById('btnCreate').addEventListener('click',createPerson);

}
async function showInfo(){
    let phonebook = document.getElementById('phonebook');

    let response = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await response.json();
   
    
    phonebook.innerHTML = '';
     Object.values(data).forEach(p => {
             let li = document.createElement('li');
             let deleteBtn = document.createElement('button');
             deleteBtn.textContent = 'Delete';
             deleteBtn.addEventListener('click',() => deletePerson(p._id));
            li.setAttribute('id',p._id);
             li.textContent = `${p.person}: ${p.phone}`;
             li.appendChild(deleteBtn);
             phonebook.appendChild(li);
         }
     )
     
}
async function deletePerson(id){
   document.getElementById(`${id}`).remove();

    await fetch('http://localhost:3030/jsonstore/phonebook/' + id,{
        method:'delete'
    })

   
}
async function createPerson(){
   let person = document.getElementById('person').value;
   let phone = document.getElementById('phone').value;

   if (person == '' || phone == '') {
        return;
   }
 
   await fetch('http://localhost:3030/jsonstore/phonebook',{
     method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({person,phone})
   });
   
   showInfo();
     document.getElementById('person').value = '';
     document.getElementById('phone').value = '';
    
}

attachEvents();
