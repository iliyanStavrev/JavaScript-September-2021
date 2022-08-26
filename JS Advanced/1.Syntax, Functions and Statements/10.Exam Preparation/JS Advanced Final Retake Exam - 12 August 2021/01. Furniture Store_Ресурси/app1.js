/* window.addEventListener('load', solve);

function solve() {
  let addBtn = document.getElementById('add');
  addBtn.addEventListener('click',addToTable);
  let sum = 0;
  function addToTable(e){
   e.preventDefault();
   let modelInp = document.getElementById('model');
   let yearInp = document.getElementById('year');
   let descriptionInp = document.getElementById('description');
   let priceInp = document.getElementById('price');

   if (modelInp.value === ''
       || descriptionInp.value === ''
       || yearInp.value >= 0 
       || priceInp.value >= 0) {
           return;
       }

   let parentTbody = document.getElementById('furniture-list');
   let trInfo = document.createElement('tr');
   trInfo.setAttribute('class','info');
   let tdModel = document.createElement('td');
   let tdPrice = document.createElement('td');
   tdModel.textContent = modelInp.value;
   tdPrice.textContent = Number(priceInp.value).toFixed(2);

   let tdButtons = document.createElement('td');
   let moreInfoBtn = document.createElement('button');
   moreInfoBtn.setAttribute('class','moreBtn');
   moreInfoBtn.textContent = 'More Info';
   let buyBtn = document.createElement('button');
   buyBtn.textContent = 'Buy it';
   buyBtn.setAttribute('class','buyBtn');

   let trHide = document.createElement('tr');
   trHide.setAttribute('class','hide');
   let tdYear = document.createElement('td');
   tdYear.textContent = 'Year: ' + yearInp.value;
   let tdDescript = document.createElement('td');
   tdDescript.setAttribute('colspan','3');
   tdDescript.textContent = 'Description: ' + descriptionInp.value;

   parentTbody.appendChild(trInfo);
   trInfo.appendChild(tdModel);
   trInfo.appendChild(tdPrice);
   trInfo.appendChild(tdButtons);
   tdButtons.appendChild(moreInfoBtn);
   tdButtons.appendChild(buyBtn);
   parentTbody.appendChild(trHide);
   trHide.appendChild(tdYear);
   trHide.appendChild(tdDescript);
   
   moreInfoBtn.addEventListener('click',moreInfo);
   buyBtn.addEventListener('click',submit);

   function moreInfo(){

         let classHide = document.querySelector('.hide');
         classHide.style.display = 'contents';
         moreInfoBtn.textContent === 'More Info' 
                                      ?  moreInfoBtn.textContent ='Less Info' 
                                      :  moreInfoBtn.textContent = 'More Info' ;

      moreInfoBtn.textContent === 'More Info' 
                                    ?  classHide.style.display ='none' 
                                    :  classHide.style.display = 'contents' ;
                                                                   
   } 
    
   function submit(){
       let hideClass = document.querySelector('.hide');
       let total = document.querySelector('.total-price');
    
      
       sum = sum + Number(priceInp.value);
       total.textContent = Number(sum).toFixed(2);
       parentTbody.removeChild(trInfo);
       parentTbody.removeChild(hideClass);
   }
  
 }
} */
