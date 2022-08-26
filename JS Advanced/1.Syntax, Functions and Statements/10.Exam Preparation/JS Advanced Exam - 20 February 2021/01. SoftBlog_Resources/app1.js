function solve(){
  let createBtn = document.querySelector('aside form button');
  createBtn.addEventListener('click',create);

  let authorInp = document.getElementById('creator');
  let titleInp = document.getElementById('title');
  let categoryInp = document.getElementById('category');
  let contentInp = document.getElementById('content');

   let parentEl = document.querySelector('main section');
  let articleEl = document.createElement('article');

  
  function create(e){
     e.preventDefault();
    let h1El = document.createElement('h1');
    h1El.textContent = titleInp.value;

    let pCategory = document.createElement('p');
    pCategory.textContent = 'Category:';//
    let strongEl = document.createElement('strong');
    strongEl.textContent = categoryInp.value;
    pCategory.appendChild(strongEl);

    let pCreator = document.createElement('p');
    pCreator.textContent = 'Creator:';
    let strCreator = document.createElement('strong');
    strCreator.textContent = authorInp.value;
    pCreator.appendChild(strCreator);

    let pContent = document.createElement('p');
    pContent.textContent = contentInp.textContent;

    let divBtns = document.createElement('div');
    divBtns.setAttribute('class','buttons');
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','btn delete');
    deleteBtn.textContent = 'Delete';
    let archiveBtn = document.createElement('button');
    archiveBtn.setAttribute('class','btn archive');
    archiveBtn.textContent = 'Archive';
    divBtns.appendChild(deleteBtn);
    divBtns.appendChild(archiveBtn);

    articleEl.appendChild(h1El);
    articleEl.appendChild(pCategory);
    articleEl.appendChild(pCreator);
    articleEl.appendChild(pContent);
    articleEl.appendChild(divBtns);
    parentEl.appendChild(articleEl);
   
   archiveBtn.addEventListener('click',archiving);
   
     function archiving(){
     let olEl = document.querySelector('.archive-section ol');
     let archiveLi = Array.from(olEl.querySelectorAll('li'));

     let liEl = document.createElement('li');
      liEl.textContent = h1El.textContent;

     //articleEl.removeChild(h1El);
     //articleEl.removeChild(pCreator);
    // articleEl.removeChild(pCategory);
     //articleEl.removeChild(pContent);
     //articleEl.removeChild(divBtns);

      
      archiveLi.push(liEl);
      archiveLi.sort((a,b) => a.textContent.localeCompare(b.textContent))
               .forEach(li => olEl.appendChild(li));


  }
  deleteBtn.addEventListener('click',deleting);

  function deleting(e){
   
   let deleteButton = e.target;
   let articleToDelete = deleteButton.parentElement.parentElement;
   articleToDelete.remove();
     
  }

  }

}
