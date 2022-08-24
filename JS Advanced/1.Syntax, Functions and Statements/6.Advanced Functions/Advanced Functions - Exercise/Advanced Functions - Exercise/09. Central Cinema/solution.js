function solve() {
    
    let onScreenBtn = document.querySelector('#container button');

    onScreenBtn.addEventListener('click',addListItem);

    function addListItem(e){
        e.preventDefault();
        let inputs = Array.from(document.querySelectorAll('#container input'));
        let nameInput = inputs[0];
        let hallInput = inputs[1];
        let priceInput = inputs[2];

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;
     
       if (name.trim() !== '' && hall.trim() !== '' && price.trim() !== '' && !isNaN(Number(price))) {
           price = Number(price).toFixed(2);
  let parentElement = document.querySelector('#movies ul');
       let liElement = document.createElement('li');
       let spanElement = document.createElement('span');
      
      spanElement.textContent = name;

      let hallStrong = document.createElement('strong');
      hallStrong.textContent = `Hall: ${hall}`;

      let divEl = document.createElement('div');

      let strongDiv = document.createElement('strong');
      strongDiv.textContent = price;

      let inputTickets = document.createElement('input');
      inputTickets.setAttribute('placeholder',"Tickets Sold");

      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click',addArchive);

      divEl.appendChild(strongDiv);
      divEl.appendChild(inputTickets);
      divEl.appendChild(archiveBtn);

      liElement.appendChild(divEl);
      liElement.appendChild(spanElement);
      liElement.appendChild(hallStrong);
      
      parentElement.appendChild(liElement);
      
      nameInput.value = '';
      hallInput.value = '';
      priceInput.value = '';

        function addArchive(){
           if (inputTickets.value !== '' && !isNaN(Number(inputTickets.value))) {
                let parent = document.querySelector('#archive ul');
          let li = document.createElement('li');
          let span = document.createElement('span');
          span.textContent = spanElement.textContent;
          let strong = document.createElement('strong');
          let totalPrice = Number(strongDiv.textContent) * Number(inputTickets.value);
          strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

          let deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';

          li.appendChild(span);
          li.appendChild(strong);
          li.appendChild(deleteBtn);
          
          parent.appendChild(li);

          deleteBtn.addEventListener('click',() =>{
            li.remove();
          })
             
           let clearBtn = document.querySelector('#archive > button');
           

       clearBtn.addEventListener('click',()=>{
          li.remove();
       })
           }
           
        }
       }   
    }
     
  }
