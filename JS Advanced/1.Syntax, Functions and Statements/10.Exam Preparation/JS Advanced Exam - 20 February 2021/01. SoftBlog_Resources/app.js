function solve(){
    let createBtn = document.querySelector('.btn.create');
    createBtn.addEventListener('click',creating);
    
    let creatorInp = document.getElementById('creator');
    let titleInp = document.getElementById('title');
    let categoryInp = document.getElementById('category');
    let contentInp = document.getElementById('content');

    let parent = document.querySelector('.site-content section');


   function creating(e){
       e.preventDefault();
     
       let article = document.createElement('article');
       let h1 = document.createElement('h1');
       h1.textContent = titleInp.value;
       let pCategory = document.createElement('p');
       pCategory.textContent = 'Category:';
       let strongCat = document.createElement('strong');
       strongCat.textContent = categoryInp.value;
       pCategory.appendChild(strongCat);
       let pCreator = document.createElement('p');
       pCreator.textContent = 'Creator:';
       let creatorStr = document.createElement('strong');
       creatorStr.textContent = creatorInp.value;
       pCreator.appendChild(creatorStr);
       let pContent = document.createElement('p');
       pContent.textContent = contentInp.value;
       let divBtns = document.createElement('div');
       divBtns.classList.add('buttons');
       let deleteBtn = document.createElement('button');
       deleteBtn.setAttribute('class','btn delete');
       deleteBtn.textContent = 'Delete';
       deleteBtn.addEventListener('click',deleting);
       let archiveBtn = document.createElement('button');
       archiveBtn.setAttribute('class','btn archive');
       archiveBtn.textContent = 'Archive';
       archiveBtn.addEventListener('click',archiving);

       divBtns.appendChild(deleteBtn);
       divBtns.appendChild(archiveBtn);
       article.appendChild(h1);
       article.appendChild(pCategory);
       article.appendChild(pCreator);
       article.appendChild(pContent);
       article.appendChild(divBtns);
       parent.appendChild(article);


    }

    function deleting(e){
        e.currentTarget.parentElement.parentElement.remove();

    }
   
    function archiving(e){
        let titleName = e.currentTarget.parentElement.parentElement.querySelector('h1');
         let olElement = document.querySelector('.archive-section ol');
         let liTitle = document.createElement('li');
         liTitle.textContent = titleName.textContent;

         let arrayLi = Array.from(document.querySelectorAll('.archive-section ol li'));

         arrayLi.push(liTitle);

         arrayLi.sort((a,b) => a.textContent.localeCompare(b.textContent))
                 .forEach(li => olElement.appendChild(li));
        
                 e.currentTarget.parentElement.parentElement.remove();
    }

}