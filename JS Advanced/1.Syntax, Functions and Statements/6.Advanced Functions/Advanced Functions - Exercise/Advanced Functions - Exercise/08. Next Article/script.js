function getArticleGenerator(articles) {
     let display = document.getElementById('content');
   
     
    return () =>{
        
    if (articles.length === 0) {
        return;
    }
    else{
         let article = document.createElement('article');
        article.textContent = articles.shift();
          display.appendChild(article);
    }
     
    }
}
