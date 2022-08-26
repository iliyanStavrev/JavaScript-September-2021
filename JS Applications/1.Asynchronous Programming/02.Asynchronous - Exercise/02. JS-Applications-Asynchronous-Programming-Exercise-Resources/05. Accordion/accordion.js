  window.addEventListener('load',solution);

function solution() {
  let url = `http://localhost:3030/jsonstore/advanced/articles/list`;

  let main = document.getElementById('main');

  fetch(url)
    .then(res => res.json())
     .then(data =>{
         for (const el of data) {
             getItem(el);
         }
           
      
     })

     function getItem(item){

          let url = `http://localhost:3030/jsonstore/advanced/articles/details/${item._id}`;

          fetch(url)
          .then(res => res.json())
           .then(data =>{

  let accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');
 
            let headDiv = document.createElement('div');
            headDiv.classList.add('head');
          
            let span = document.createElement('span');
            span.textContent = item.title;
 
            let button = document.createElement('button');
            button.classList.add('button');
            button.id = item._id;
            button.textContent = 'MORE';
            button.addEventListener('click',showMore);
 
            headDiv.appendChild(span);
            headDiv.appendChild(button);
            
            let extraDiv =   document.createElement('div');
            extraDiv.classList.add('extra');
 
            let p = document.createElement('p');
            p.textContent = data.content;
 
            extraDiv.appendChild(p);
 
            accordionDiv.appendChild(headDiv);
            accordionDiv.appendChild(extraDiv);

            main.appendChild(accordionDiv);
           });  
     }

     function showMore(e){
         let element = e.currentTarget.parentElement.parentElement;
         let extraDiv = element.querySelector('.extra');

         extraDiv.style.display = extraDiv.style.display === 'block'
                                                              ?'none'
                                                              :'block';
         e.target.textContent = e.target.textContent === 'MORE'
                                                         ?'LESS'
                                                         :'MORE';
     }
}