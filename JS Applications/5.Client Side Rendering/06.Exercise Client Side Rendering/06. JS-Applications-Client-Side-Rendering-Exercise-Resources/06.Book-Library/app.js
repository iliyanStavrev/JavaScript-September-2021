import { getHomePage, loadBooks } from "./rendering.js";
getHomePage();

document.querySelector('#add-form').addEventListener('submit',addBook);


async function addBook(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let title = form.get('title');
    let author = form.get('author');

    if (title =='' || author == '') {
        return;
    }

    let response = await fetch('http://localhost:3030/jsonstore/collections/books',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title,author})
    });
    if (!response.ok) {
        let err = await response.json();
        return alert(err.message);
    };
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    loadBooks();
}
export async function deleting(e){
 e.preventDefault();
 let id = e.target.parentElement.parentElement.id;
 let response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id,{
     method:'delete'
 });
    if (!response.ok) {
        let err = await response.json();
        return alert(err.message);
    }
    loadBooks();
}
export async function editBook(e){
    e.preventDefault();
   let addForm = document.getElementById('add-form'); 
   let editForm = document.getElementById('edit-form'); 
    addForm.style.display = 'none';
    editForm.style.display = 'block';

  let element = e.target.parentElement.parentElement;
  
  let tdArr = element.querySelectorAll('td');
  let titleToEdit = tdArr[0].textContent;
  let authorToEdit = tdArr[1].textContent;

  let titleInp = document.querySelector('#edit-form input[name="title"]');
  let authorInp = document.querySelector('#edit-form input[name="author"]');

  titleInp.value = titleToEdit;
  authorInp.value = authorToEdit;
  
  editForm.addEventListener('submit',updateBook);
  /**/
async function updateBook(e){
    e.preventDefault();
    console.log(element.id);
  let title = titleInp.value;
   let author = authorInp.value;
   let _id = element.id;
    let response = await fetch('http://localhost:3030/jsonstore/collections/books/'+ _id,{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title,author,_id})
    });
    if (!response.ok) {
        let err = await response.json();
        return alert(err.message);
    };
    loadBooks();

    addForm.style.display = 'block';
    editForm.style.display = 'none';
  }
}
