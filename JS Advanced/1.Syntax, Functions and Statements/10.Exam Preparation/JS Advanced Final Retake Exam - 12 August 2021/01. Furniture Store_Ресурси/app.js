window.addEventListener('load', solve);

function solve(){
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click',adding);

    let modelInp = document.getElementById('model');
    let yearInp = document.getElementById('year');
    let descriptionInp = document.getElementById('description');
    let priceInp = document.getElementById('price');

    let parent = document.getElementById('furniture-list');
    
    let totalSum = 0;

    function adding(e){
        e.preventDefault();
        if (modelInp.value === '' || descriptionInp.value === ''
                || yearInp.value < 0 || priceInp.value < 0){
        return;
     }
     
     let trInfo = document.createElement('tr');
     trInfo.setAttribute('class','info');
     let tdModel = document.createElement('td');
     tdModel.textContent = modelInp.value;
     let tdPrice = document.createElement('td');
     tdPrice.textContent = Number(priceInp.value).toFixed(2);
     let tdButtons = document.createElement('td');
     let moreBtn = document.createElement('button');
     moreBtn.setAttribute('class','moreBtn');
     moreBtn.textContent = 'More Info';
     moreBtn.addEventListener('click',moreInfo);
     let buyBtn = document.createElement('button');
     buyBtn.setAttribute('class','buyBtn');
     buyBtn.textContent = 'Buy it';
     buyBtn.addEventListener('click',buying);

     tdButtons.appendChild(moreBtn);
     tdButtons.appendChild(buyBtn);
     trInfo.appendChild(tdModel);
     trInfo.appendChild(tdPrice);
     trInfo.appendChild(tdButtons);

     parent.appendChild(trInfo);

    let trHide = document.createElement('tr');
        trHide.setAttribute('class','hide');
      

        let tdYear = document.createElement('td');
      tdYear.textContent = 'Year: ' + yearInp.value;
      let tdColspan = document.createElement('td');
      tdColspan.setAttribute('colspan','3');
      tdColspan.textContent = "Description: " + descriptionInp.value;

      trHide.appendChild(tdYear);
      trHide.appendChild(tdColspan);
      parent.appendChild(trHide);
    
      modelInp.value = '';
     yearInp.value = '';
     descriptionInp.value = '';
     priceInp.value = '';
  
  function moreInfo(e){
       
        trHide.style.display = 'contents';
      e.target.textContent === "More Info" 
                                ? e.target.textContent =  "Less Info"
                                : e.target.textContent = 'More Info';

      e.target.textContent === "More Info" 
                               ? trHide.style.display = 'none'
                               : trHide.style.display = 'contents'; 
  }
  function buying(e){

    

    let totalInp = document.querySelector('.total-price');
    totalSum += Number(tdPrice.textContent);
    totalInp.textContent = Number(totalSum).toFixed(2);

    trInfo.remove();
    trHide.remove();

  }
 }
}