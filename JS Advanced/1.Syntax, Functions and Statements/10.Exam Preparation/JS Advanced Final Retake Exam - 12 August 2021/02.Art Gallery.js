class ArtGallery{

  constructor(creator){
      this.creator = creator;
      this.possibleArticles = { "picture":200,"photo":50,"item":250 };
      this.listOfArticles = [];
      this.guests = [];
  }

     addArticle( articleModel, articleName, quantity ){
     if (articleModel.toLowerCase() !== 'picture'
        && articleModel.toLowerCase() !== 'photo'
         && articleModel.toLowerCase() !== 'item')  {
         
            throw new Error('This article model is not included in this gallery!');
     }
     if (this.listOfArticles.length === 0) {
        this.listOfArticles.push({'articleModel': articleModel.toLowerCase(),
                                  'articleName': articleName,
                                  'quantity':quantity});
       return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;           
     }
     else{
          for (const obj of this.listOfArticles) {
            if (obj.articleName === articleName && obj.articleModel === articleModel.toLowerCase()) {
              obj.quantity += quantity;
                 return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
            }
        }
                 this.listOfArticles.push({ articleModel: articleModel.toLowerCase(),
                                           articleName: articleName,
                                           quantity : quantity});
               return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
                            
        } 
     }
     
     inviteGuest ( guestName, personality){
         let points = 0;
         if (personality === 'Vip') {
             points = 500;
         }else if (personality === 'Middle') {
             points = 250;
         }
         else{
             points = 50;
         }
         if (this.guests.length === 0) {
             this.guests.push({guestName ,points,purchaseArticle: 0 });
             return `You have successfully invited ${guestName}!`;
         }
         else{
             let result = ``;
           this.guests.forEach(obj => {
               if (obj.guestName === guestName) {
                   throw new Error(`${guestName} has already been invited.`);
               }
               this.guests.push({guestName,points,purchaseArticle : 0});
               result =  `You have successfully invited ${guestName}!`;
           });
           return result;
         }
     }

     buyArticle ( articleModel, articleName, guestName){
        
        for (const obj of this.listOfArticles) {
             
             if (obj.articleName === articleName && obj.articleModel === articleModel) {
                 
               if (obj.quantity === 0) {
                  return  `The ${articleName} is not available.`; 
               }
             
              for (const g of this.guests) {
                   if (g.guestName === guestName) {
                        if (g.points < this.possibleArticles[articleModel]) {
                         return "You need to more points to purchase the article.";
                          
                      }
                      else{
                          g.points = g.points - this.possibleArticles[articleModel];
                          g.purchaseArticle += 1;
                          obj.quantity -= 1;
 return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
                        
                      }
                  }
              }
              return "This guest is not invited.";   
           }     
        }
            throw new Error('This article is not found.');  
     }
     showGalleryInfo (criteria){
         if (criteria === 'article') {
           let result = 'Articles information:\n';
           for (const obj of this.listOfArticles) {
               result += `${obj.articleModel} - ${obj.articleName} - ${obj.quantity}\n`
           }
           return result.trim();  
         }
         else if (criteria === 'guest') {
            let output = `Guests information:\n`;
            for (const g of this.guests) {
                output += `${g.guestName} - ${g.purchaseArticle}\n`
            }
            return output.trim();
         }
     }
  
  }  

  const artGallery = new ArtGallery('Curtis Mayfield'); 
  artGallery.addArticle('picture', 'Mona Liza', 3);
  artGallery.addArticle('Item', 'Ancient vase', 2);
  artGallery.addArticle('picture', 'Mona Liza', 1);
  artGallery.inviteGuest('John', 'Vip');
  artGallery.inviteGuest('Peter', 'Middle');
  artGallery.buyArticle('picture', 'Mona Liza', 'John');
  artGallery.buyArticle('item', 'Ancient vase', 'Peter');
  console.log(artGallery.showGalleryInfo('article'));
  console.log(artGallery.showGalleryInfo('guest'));