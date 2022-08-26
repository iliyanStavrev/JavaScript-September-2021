class Restaurant{

    constructor(budgetMoney){
        this.budgetMoney = budgetMoney;
        this.menu = [];
        this.stockProducts = [];
        this.history = [];
    }
    loadProducts(products) {
         
        for (const prod of products) {
            let obj = {};
            let [productName,productQuantity,productTotalPrice] = prod.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
                obj = {productName,productQuantity};
            if (this.budgetMoney >= productTotalPrice) {
                let isAdded = false;
                this.stockProducts.map(p => {
                   if (p.productName === productName) {
                     p.productQuantity += productQuantity;
                     this.budgetMoney -= productTotalPrice;  
                     this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                     isAdded = true;
                   }
                   
                     
                })
                if (!isAdded) {
                    this.stockProducts.push(obj);
                    this.budgetMoney -= productTotalPrice;  
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`); 
                }

                   
            } 
                 
         
               else{
                 this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);  
               }
            }
         return this.history.join(`\n`);
        }
     
    

    addToMenu(mealName,neededProd,price){
           if (this.menu.find(m => m.mealName === mealName)) {
               return `The ${mealName} is already in the our menu, try something different.`;
           }
           else{
           let meal = {
               mealName,neededProd,price
           }
           this.menu.push(meal);
           if (this.menu.length === 1 ) {
  return `Great idea! Now with the ${mealName} we have ${this.menu.length} meal in the menu, other ideas?`;
           }
        return `Great idea! Now with the ${mealName} we have ${this.menu.length} meals in the menu, other ideas?`;
           }
    }

    showTheMenu(){
        let returned = '';
        if (this.menu.length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        this.menu.forEach(meal => {
              returned += `${meal.mealName} - $ ${meal.price}\n`;
              
        })
        return returned.trim();
    }
    makeTheOrder(meal){
        let returned = ``;
        let counter = 0;
     this.menu.map(el =>{
        if (el.mealName === meal) {
            el.neededProd.map(p => {
                let[product,quantity] = p.split(' ');
                if (findProduct(product,this.stockProducts)) {
                    this.stockProducts.map(e => e.productQuantity -= Number(quantity));
                    counter++;
                  if (counter === el.neededProd.length) {
 returned =  `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${el.price}.`;
                }   
                }
                else{
                    returned =  `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            })
        } 
        else if(returned.length === 0){
    returned = `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
     })
     return returned;
  
        
     function findProduct(product,stockProducts){
         for (const i of stockProducts) {
             if (i.productName === product) {
                 return true;
             }
         } 
         return false;
         
     }

    }
}
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10',
                                  'Strawberries 50 30', 'Yogurt 10 10',
                                  'Yogurt 500 1500', 'Honey 5 50']));
 console.log(kitchen.addToMenu('frozenYogurt', 
 ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
 console.log(kitchen.addToMenu('Pizza', 
 ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 
 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
 console.log(kitchen.showTheMenu());
 console.log(kitchen.makeTheOrder('frozenYogurt'));

