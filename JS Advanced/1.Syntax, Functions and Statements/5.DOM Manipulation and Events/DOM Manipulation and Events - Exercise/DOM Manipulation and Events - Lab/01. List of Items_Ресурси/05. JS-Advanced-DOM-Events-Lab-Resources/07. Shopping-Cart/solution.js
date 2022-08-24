function solve() {
  let buttons = Array.from(document.querySelectorAll(".add-product"));
   let list = [];
    let price = 0;
   let textarea =  document.querySelector("textarea"); 
  buttons.forEach(e => {
     e.addEventListener('click',(p) =>{
        let productElement = p.currentTarget.parentElement.parentElement;

        let productName = productElement.querySelector(".product-title").textContent;

        let productPrice = productElement.querySelector(".product-line-price").textContent;
        productPrice = Number(productPrice);

         
         price += productPrice;

       textarea.textContent +=`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         
        if (!list.includes(productName)) {
           list.push(productName);
        }
        
     })
  });
  let check = document.querySelector('.checkout');
  check.addEventListener('click',() =>{
     textarea.textContent += `You bought ${list.join(', ')} for ${price.toFixed(2)}.`;
     disableButtons();
  })
  function disableButtons(){
     let buttons = Array.from(document.querySelectorAll('button'));
     buttons.forEach(e => e.disabled = true)
  }

}