function solution(){
  
  document.getElementById('submit').addEventListener('click',getStudents);
 document.getElementById('submit').addEventListener('click',createStudent);
}
 async function getStudents(e){
    e.preventDefault();
    let results = document.querySelector('#results tbody');

    let response = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await response.json();
   
    results.innerHTML = '';

    Object.values(data).forEach(s =>{
         let tr = document.createElement('tr');
         let tdFirst  = document.createElement('td');
         tdFirst.textContent = s.firstName;

         let tdLast  = document.createElement('td');
         tdLast.textContent = s.lastName;

         let tdFaculty  = document.createElement('td');
         tdFaculty.textContent = s.facultyNumber;
         
         let tdGrade  = document.createElement('td');
         tdGrade.textContent = s.grade;

         tr.appendChild(tdFirst);
         tr.appendChild(tdLast);
         tr.appendChild(tdFaculty);
         tr.appendChild(tdGrade);

         results.appendChild(tr); 
    });
 }  
 async function createStudent(){
        let firstName = document.querySelector('input[name="firstName"]').value;
        let lastName = document.querySelector('input[name="lastName"]').value;
        let facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
        let grade = document.querySelector('input[name="grade"]').value;

        if (firstName == '' || lastName == '' ||
            facultyNumber == '' || grade == '') {
              
                 return;
        } 
        
        let response = await fetch('http://localhost:3030/jsonstore/collections/students',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({firstName,lastName,facultyNumber,grade})
        });
        await response.json();
        
        document.querySelector('input[name="firstName"]').value = '';
        document.querySelector('input[name="lastName"]').value = '';
        document.querySelector('input[name="facultyNumber"]').value = '';
        document.querySelector('input[name="grade"]').value = '';

    }

solution();