    document.querySelector('form').addEventListener('submit',createRecipe);

    async function createRecipe(e){
        e.preventDefault();

        let form = new FormData(e.target);
         let name = form.get('name');
         let img = form.get('img');
         let ingredients = form.get('ingredients')
                               .split('\n')
                               .map(l => l.trim())
                               .filter(l => l != '');
         let steps = form.get('steps')
                         .split('\n')
                         .map(l => l.trim())
                         .filter(l => l != '');

         let token = sessionStorage.getItem('userToken');                
       
       let response = await fetch('http://localhost:3030/data/recipes',{
           method:'post',
           headers:{'Content-Type':'application/json',
                    'X-Authorization':token},
           body: JSON.stringify({name,img,ingredients,steps})
       });
       
       if (!response.ok) {
           let error = await response.json();
           return alert(error.message);
       }
      window.location.pathname = 'index.html';
    }