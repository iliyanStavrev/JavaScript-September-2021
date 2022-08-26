async function attachEvents() {

      let  btnLoadPosts = document.getElementById('btnLoadPosts');
   btnLoadPosts.addEventListener('click',getPosts);

   document.getElementById('btnViewPost').addEventListener('click',display);
  
}
attachEvents();
 async function display(){
     let selected = document.getElementById('posts').value;

   let [post,comments] =  await Promise.all([
         getPostById(selected),
         getCommentsById(selected)
     ]);
  
     
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-body').textContent = post.body;

  let ul = document.getElementById('post-comments');
   ul.replaceChildren();
  comments.forEach(c =>{
    let li = document.createElement('li');
    li.textContent = c.text;
    ul.appendChild(li);
  })
 }
async function getPosts(){
     let url = `http://localhost:3030/jsonstore/blog/posts`;
    
    
    let res = await fetch(url);
    let data = await res.json();
    
     let posts = document.querySelector('#posts');
     posts.innerHTML = '';
    for (const el of Object.entries(data)) {
        //  console.log(el[1]);

        let option = document.createElement('option');
        option.value = el[1].id;
        option.textContent = el[1].title;
        
        posts.appendChild(option);
    }
} 
async function getPostById(id){
    let url = `http://localhost:3030/jsonstore/blog/posts/`+ id;

    let res = await fetch(url);
    let data = await res.json();

    return data;
}
 async function getCommentsById(id){
     
       let url = ` http://localhost:3030/jsonstore/blog/comments`;

     let res = await fetch(url);
      let data = await res.json();
      
      let comments = Object.values(data).filter(c => c.postId === id);

     return comments;
    }
