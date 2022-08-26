class Restaurant{
    constructor(budget){
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }
    loadProducts(array){
       
        for (const string of array) {
             let isAdded = false;
        let[productName,productQuantity,productTotalPrice] = string.split(' ');
          productTotalPrice = Number(productTotalPrice);
          productQuantity = Number(productQuantity);
             if (this.budgetMoney >= productTotalPrice) {
                 for (const pro in this.stockProducts) {
                     if (pro === productName) {
                         this.stockProducts[pro] += productQuantity;
                         this.budgetMoney -= productTotalPrice;
                         this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                           isAdded = true;
                           break;
                     }
                 }
                 if (!isAdded) {
                  this.stockProducts[productName] = productQuantity;
                  this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                  this.budgetMoney -= productTotalPrice;
                      isAdded = true;
              }
           }
           if (!isAdded) {
               this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
           }     
       }
       return this.history.join('\n');
    }

    addToMenu(meal,neededProducts,price){
          if (!this.menu.hasOwnProperty(meal)) {
              this.menu[meal] = {products: {},price};
              for (const p of neededProducts) {
                  let [productName,productQuantity] = p.split(' ');
                  productQuantity = Number(productQuantity);
                  this.menu[meal].products[productName] = productQuantity;
              }
              
          }
          else{
              return `The ${meal} is already in the our menu, try something different.`;
          }

          let size = Object.keys(this.menu).length;
          if (size === 1) {
              return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
          }
          else{
        return `Great idea! Now with the ${meal} we have ${size} meals in the menu, other ideas?`;
          }

    }

    showTheMenu(){
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        let output = ``;
        for (const entry in this.menu) {
            output += `${entry} - $ ${this.menu[entry].price}\n`;
        }
        return output.trim();
    }

    makeTheOrder(meal){
        let isFound = false;
        let canMakeIt = true;
         for (const key in this.menu) {
             if (key === meal) {
                 isFound = true;
                 for (const p in this.menu[meal].products) {
                    if (!this.stockProducts.hasOwnProperty(p)) {
                        canMakeIt = false;
                        break;
                    }
                 }
             }
         }
         if (!isFound) {
             return `There is not ${meal} yet in our menu, do you want to order something else?`;
         }
         if (!canMakeIt) {
             return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
         }
         for (const key in this.stockProducts) {
             this.stockProducts[key] -= this.menu[meal].products[key];
         }
        
         this.budgetMoney += this.menu[meal].price;
         
return`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }


}
let kitchen = new Restaurant(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10',
                                  'Strawberries 50 30', 'Yogurt 10 10', 
                                  'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', 
['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));

console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5',
 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));   
 console.log(kitchen.showTheMenu());
 console.log(kitchen.makeTheOrder('frozenYogurt'));
                   