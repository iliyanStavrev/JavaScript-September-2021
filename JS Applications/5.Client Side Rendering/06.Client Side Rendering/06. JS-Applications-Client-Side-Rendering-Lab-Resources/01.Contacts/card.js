import {html} from 'https://unpkg.com/lit-html?module';


let card = (data) => html`
<div class="contact card">
         <div>
             <i class="far fa-user-circle gravatar"></i>
         </div>
         <div class="info">
             <h2>Name: ${data.name}</h2>
             <button class="detailsBtn" @click=${onClick}>Details</button>
             <div class="details" id="1">
                 <p>Phone number: ${data.phoneNumber}</p>
                 <p>Email: ${data.email}</p>
             </div>
         </div>
     </div>`;
       
     function onClick(e){
         e.preventDefault();
     let element = e.target.parentElement;
      let details =  element.querySelector('.details');
      let button = element.querySelector('.detailsBtn');

      details.style.display = details.style.display === 'block'? 'none' : 'block';
      button.textContent = button.textContent=== 'Details'? 'Hide' : 'Details';
     }
     export default card;
