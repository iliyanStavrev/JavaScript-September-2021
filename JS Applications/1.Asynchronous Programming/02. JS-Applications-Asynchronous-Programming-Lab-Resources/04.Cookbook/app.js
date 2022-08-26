window.addEventListener('load',() => {
  getRecipes()});

function getRecipes(){
   let url = `http://localhost:3030/jsonstore/cookbook/recipes`;
   
  let main = document.querySelector('body');
 
   fetch(url)
     .then(res => {
      if(!res.ok){
       throw new Error(res.statusText);
      } 
     return res.json()})
       .then(data => {
         main.innerHTML = '';
        Object.values(data).map(createPreview).forEach(r => main.appendChild(r)); 
       } 
     ).catch(err => alert(err.message));

     function createPreview(recipe){

     let result =  e('article',{className: 'preview'},
           e('div',{className: 'title'},
           e('h2',{},recipe.name)),
           e('div',{className: 'small'},e('img',{src: recipe.img})));
           result.addEventListener('click',() => loadingRecipe(recipe._id,result));
           return result;
     }
         
    async function loadingRecipe(id,preview){
         let url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;

       let res =  await fetch(url);
       let data = await res.json();
       let result = e('article',{},
            e('h2',{onclick:toggle},data.name),
            e('div',{className:'band'},
               e('div',{className:'thumb'},e('img',{src:data.img})),
               e('div',{className:'ingredients'},
                   e('h3',{},'Ingredients:'),
                   e('ul',{},data.ingredients.map(i => e('li',{},i)))
                    )
                  ),
            e('div',{className:'description'},
                e('h3',{},'Preparation:'),
                data.steps.map(s => e('p',{},s))
                )
              )
        preview.replaceWith(result);
        function toggle(){
          result.replaceWith(preview);
        }

     }
   }
/*   <article>
            <h2>Title</h2>
            <div class="band">
                <div class="thumb">
                    <img src="assets/lasagna.jpg">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        <li>Ingredient 4</li>
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
                    reprehenderit pariatur aut dolor exercitationem impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
                    corrupti? Quam.</p>
            </div>
        </article>
        */
       
        function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == 'on') {
          result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
          result[attr] = value;
      }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach(e => {
      if (typeof e == 'string' || typeof e == 'number') {
          const node = document.createTextNode(e);
          result.appendChild(node);
      } else {
          result.appendChild(e);
      }
  });

  return result;
}
