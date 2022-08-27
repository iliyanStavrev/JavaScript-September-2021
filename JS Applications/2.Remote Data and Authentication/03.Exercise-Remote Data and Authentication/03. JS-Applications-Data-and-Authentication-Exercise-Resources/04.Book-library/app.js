function solution (){
    document.getElementById('loadBooks').addEventListener('click',loadAllBooks);
    document.querySelector('form').addEventListener('submit',createBook);
    document.querySelector('tbody').addEventListener('click',onTableClick);
     document.getElementById('saveBtn').addEventListener('click',uptadeBook);
      document.getElementById('saveBtn').addEventListener('click',preventDefault);
}
function onTableClick(e){
  
     if (e.target.className == 'edit') {
      
       editForm(e.target);
    }
}
async function loadAllBooks(){
    let parentElement = document.querySelector('tbody');

    let response = await fetch('http://localhost:3030/jsonstore/collections/books');

    if (response.status != 200) {
        let err = await response.json();
       alert (err.message);
       throw new Error(err.message);
    }
    let data = await response.json();
    
    parentElement.innerHTML = '';

    Object.keys(data).forEach(b =>{
        let tr = document.createElement('tr');
        tr.setAttribute('id',b);

        let titleTd = document.createElement('td');
        titleTd.textContent = data[b].title;

        let authorTd = document.createElement('td');
        authorTd.textContent = data[b].author;

        let buttonsTd = document.createElement('td');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('class','edit');
       // editBtn.addEventListener('click',() => editForm(b));

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('class','delete');
       deleteBtn.addEventListener('click',() => deleteBook(b));

        buttonsTd.appendChild(editBtn);
        buttonsTd.appendChild(deleteBtn);

        tr.appendChild(titleTd);
        tr.appendChild(authorTd);
        tr.appendChild(buttonsTd);

        parentElement.appendChild(tr);

    });
}

 async function createBook(e){
     e.preventDefault();
     let title = document.querySelector('input[name="title"]').value;
     let author = document.querySelector('input[name="author"]').value;

     if (title == '' || author == '') {
         return;
     }
     
     let response = await fetch('http://localhost:3030/jsonstore/collections/books',{
         method:'post',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({title,author})
     });
        await response.json();

        document.querySelector('input[name="title"]').value = '';
        author = document.querySelector('input[name="author"]').value = '';
        loadAllBooks();
        
 }
   async function editForm(button){
    let id = button.parentElement.parentElement.id;
    document.querySelector('.hidden input[type="hidden"]').value = id;
    console.log(id);
      document.querySelector('.hidden').style.display = 'block';
      document.querySelector('form').style.display = 'none';
     
      let test = document.getElementById(id);
      
      let tdArray = test.querySelectorAll(`td`);
      let title = tdArray[0].textContent;
      let author = tdArray[1].textContent;

      let inputTitle = document.querySelector('.hidden input[name="title"]');
      let inputAuthor = document.querySelector('.hidden input[name="author"]');

      inputTitle.value = title;
      inputAuthor.value = author;
     
     
   
   }
   function preventDefault(e){
       e.preventDefault();
   }
 

   async function uptadeBook(){
   
         let title = document.querySelector('.hidden input[name="title"]').value;
      let author = document.querySelector('.hidden input[name="author"]').value;
      console.log(title);
      console.log(author);

      if (title == '' || author == '') {
           return;
      }
       let id = document.querySelector('.hidden input[type="hidden"]').value;
       console.log(id);
     let response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id,{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title,author})
    }); 
    await response.json();

    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('form').style.display = 'block';

    document.querySelector('.hidden input[name="title"]').value = '';
    document.querySelector('.hidden input[name="author"]').value = '';

    loadAllBooks();
   }
        
   async function deleteBook(id){
       console.log(id);
        await fetch('http://localhost:3030/jsonstore/collections/books/' + id,{
            method:'delete'
        });
        document.getElementById(id).remove();
   }

  solution();
