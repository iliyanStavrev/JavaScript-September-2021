class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {"picture":200,"photo":50,"item":250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ){
         let isCorrectModel = false;
         let isAdded = false;
         if (this.listOfArticles.length === 0) {
            this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity});
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
         }
        this.listOfArticles.forEach(art =>{
            if(this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())){
                 isCorrectModel = true;
                 if (art.articleName === articleName && art.articleModel === articleModel.toLowerCase()) {
                     art.quantity += quantity;
                   isAdded = true;
                 }
             
            }
        });
        if (!isCorrectModel) {
            throw new Error('This article model is not included in this gallery!');
        }
        if (isAdded) {
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;;
        }
            this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity});
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        
    }

    inviteGuest ( guestName, personality){

        for (const g of this.guests) {
            if (g.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }
        let points = 0;
        switch(personality){
            case 'Vip':
                points = 500;
                break;
                case 'Middle':
                    points = 250;
                    break;
                    default:
                        points = 50;
                        break;

        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle ( articleModel, articleName, guestName){

       let  isGuest = false;

        for (const art of this.listOfArticles) {
            if (art.articleModel === articleModel && art.articleName === articleName) {
                
                if (art.quantity === 0) {
                    return `The ${articleName} is not available.`;
                }
                for (const g of this.guests) {
                    if (g.guestName === guestName) {
                        isGuest = true;
                       if (g.points >= this.possibleArticles[articleModel]) {
                           g.points -= this.possibleArticles[articleModel];
                           art.quantity -= 1;
                           g.purchaseArticle += 1;
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
                       }
                       else{
                           return 'You need to more points to purchase the article.';
                       }
                    }
                }
                if (!isGuest) {
                    return `This guest is not invited.`;
                }
        
            }
        }
        throw new Error('This article is not found.');
    }

    showGalleryInfo (criteria){

        let article = `Articles information:\n`;
        let guest = `Guests information:\n`;
        if (criteria === 'article') {
            for (const a of this.listOfArticles) {
                article += `${a.articleModel} - ${a.articleName} - ${a.quantity}\n`;
            }
            return article.trim();
        }
        else if (criteria === 'guest') {
            for (const g of this.guests) {
                guest += `${g.guestName} - ${g.purchaseArticle}\n`;
            }
            return guest.trim();
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
//console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
