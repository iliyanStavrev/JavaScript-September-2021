window.addEventListener('load', solve);

function solve() {
  
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click',addingSong);

    let genreInp = document.getElementById('genre');
    let nameInp = document.getElementById('name');
    let authorInp = document.getElementById('author');
    let dateInp = document.getElementById('date');

    let likes = document.querySelector('.likes p');
    let sumLikes =  likes.textContent.split(': ')[1];
    let divToAdding = document.querySelector('.all-hits-container');

    let divSaved = document.querySelector('.saved-container');


    function addingSong(e){
        e.preventDefault();
        if (genreInp.value == '' || nameInp.value == ''
         || authorInp.value == '' || dateInp.value == '') {

                    return;
        }
      let divEl = document.createElement('div');
      divEl.setAttribute('class','hits-info');

      let img = document.createElement('img');
      img.setAttribute('src','./static/img/img.png');
      
       divEl.innerHTML = `<img src=./static/img/img.png>
                          <h2>Genre: ${genreInp.value}</h2>
                          <h2>Name: ${nameInp.value}</h2>
                          <h2>Author: ${authorInp.value}</h2>
                          <h3>Date: ${dateInp.value}</h3>`;
                         // <button class=save-btn>Save song</button> 
                        //  <button class=like-btn>Like song</button> 
                        //  <button class=delete-btn>Delete</button>`;
              
            let save = document.createElement('button');
            save.setAttribute('class','save-btn');
            save.textContent = 'Save song';
            let like = document.createElement('button');
            like.setAttribute('class','like-btn');
            like.textContent = 'Like song';
           
             let deleteButt = document.createElement('button');
            deleteButt.setAttribute('class','delete-btn');
            deleteButt.textContent = 'Delete';
            divEl.appendChild(save);
            divEl.appendChild(like);
            divEl.appendChild(deleteButt);
      divToAdding.appendChild(divEl);

    // let saveBtn = document.querySelector('.save-btn');
     // let likeBtn = document.querySelector('.like-btn');
    //  let deleteBtn = document.querySelector('.delete-btn');
      
       like.addEventListener('click',liking);
       save.addEventListener('click',savingSong);
       deleteButt.addEventListener('click',deleting);
     
      genreInp.value = '';
      nameInp.value = '';
      authorInp.value = '';
      dateInp.value = '';
       
    }
     

    function liking(e){
        sumLikes++;
      likes.textContent = `Total Likes: ${sumLikes}`;
      e.target.disabled = true;
    }

    function savingSong(e){
    let savedDiv = document.createElement('div');
    savedDiv.setAttribute('class','hits-info');
      let parentArr = e.currentTarget.parentElement.querySelectorAll('h2');
      let h2Genre = parentArr[0].textContent;
      let h2Name  = parentArr[1].textContent;
      let h2Author = parentArr[2].textContent;
      let h3Date = e.currentTarget.parentElement.querySelector('h3').textContent;
       savedDiv.innerHTML = `<img src=./static/img/img.png>
                             <h2>${h2Genre}</h2>
                             <h2>${h2Name}</h2>
                             <h2>${h2Author}</h2>
                             <h3>${h3Date}</h3>`;
           let delBtn = document.createElement('button');
           delBtn.setAttribute('class','delete-btn');
           delBtn.textContent = 'Delete';
           delBtn.addEventListener('click',deleting);
           savedDiv.appendChild(delBtn);

           divSaved.appendChild(savedDiv);

           e.currentTarget.parentElement.remove();
    }

    function deleting(e){
        e.currentTarget.parentElement.remove();
    }
}