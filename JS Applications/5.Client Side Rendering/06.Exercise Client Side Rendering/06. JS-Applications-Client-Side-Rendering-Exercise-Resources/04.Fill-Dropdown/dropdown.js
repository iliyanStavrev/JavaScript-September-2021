import { html, render } from "../node_modules/lit-html/lit-html.js";
document.querySelector('form').addEventListener('submit',addItem);

async function initialize() {
      let req = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
         let data = await req.json();
         if (!req.ok) {
             let err = await req.json();
            return alert(err.message);
         }

   let template = (info) => html`
   <option value=${info._id}>${info.text}</option>`;

   let container = document.getElementById('menu');
   let list = Object.values(data);
   let result = list.map(template);
   render(result,container)
}

 initialize();
     
 
  async function addItem(e){
      e.preventDefault();
      let input = document.getElementById('itemText');

      let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({text:input.value})
      });
      if (!response.ok) {
        let err = await req.json();
       return alert(err.message);
    }
    e.target.reset();
    initialize();

  }

