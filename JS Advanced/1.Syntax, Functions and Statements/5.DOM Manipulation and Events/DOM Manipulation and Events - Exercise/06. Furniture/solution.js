function solve() {
  
  let buttonArray = document.querySelectorAll('#exercise button');
  let generateButton = buttonArray[0];
  let buyButton = buttonArray[1];

  let textArray = document.querySelectorAll('#exercise textarea');
  let generateText = textArray[0];
  let buyText = textArray[1];

  generateButton.addEventListener('click',generate);

  function generate(){
    let items = JSON.parse(generateText.value);

    items.forEach(el => {
       let trElement = document.createElement('tr');
    let imageTd = document.createElement('td');
    let image = document.createElement('img');
    image.src = el.img;
    trElement.appendChild(imageTd).appendChild(image);

    let nameTd = document.createElement('td');
    let nameP = document.createElement('p');
    nameP.textContent = el.name;
    trElement.appendChild(nameTd).appendChild(nameP);

    let priceTd = document.createElement('td');
    let priceP = document.createElement('p');
    priceP.textContent = el.price;
    trElement.appendChild(priceTd).appendChild(priceP);

    let decTd = document.createElement('td');
    let decP = document.createElement('p');
    decP.textContent = el.decFactor;
    trElement.appendChild(decTd).appendChild(decP);

    let inputTd = document.createElement('td');
    let inputType = document.createElement('input');
    inputType.type = 'checkbox';
    trElement.appendChild(inputTd).appendChild(inputType);

    let parentElement = document.querySelector('.table tbody');
    parentElement.appendChild(trElement);

    });
   
  }

  buyButton.addEventListener('click',calculate);

  function calculate(){
    let rows = Array.from(document.querySelectorAll('.table tbody tr'));
    let selectedRows = rows.filter(row => row.querySelectorAll('input:checked').length > 0);

      let names = 
      selectedRows.map(row => row.querySelector('td:nth-of-type(2) p'))
                  .map(x => x.textContent)
                  .join(', ');
                  
        let prices = 
      selectedRows.map(row => row.querySelector('td:nth-of-type(3) p'))
                  .map(x => Number(x.textContent));
                 

     let decFactors = 
      selectedRows.map(row => row.querySelector('td:nth-of-type(4) p'))
                  .map(x => Number(x.textContent));

      let totalPrice = prices.reduce((a,b) => a + b, 0).toFixed(2);

      let averageDec = decFactors.reduce((a,b) => a + b,0) / decFactors.length;

      let string = `Bought furniture: ${names}\nTotal price: ${totalPrice}\nAverage decoration factor: ${averageDec}`;

      buyText.value = string;
  }

}