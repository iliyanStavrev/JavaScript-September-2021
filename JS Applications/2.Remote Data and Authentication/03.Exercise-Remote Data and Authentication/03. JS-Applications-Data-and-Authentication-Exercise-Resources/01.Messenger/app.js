function attachEvents() {
   document.getElementById('submit').addEventListener('click',sendMessage);
   document.getElementById('refresh').addEventListener('click',showMessages);
   
}

attachEvents();

async function sendMessage(){
   let url = 'http://localhost:3030/jsonstore/messenger';

   let author = document.querySelector('input[name="author"]').value;
   let content = document.querySelector('input[name="content"]').value;
    
   if (author == '' || content == '') {
           return;
   }
   let response = await fetch(url,{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({author,content})
   });
   let data = await response.json();

   document.querySelector('input[name="author"]').value = '';
   document.querySelector('input[name="content"]').value = '';

}
async function showMessages(){
    let url = 'http://localhost:3030/jsonstore/messenger';

    let response = await fetch(url);
    let data = await response.json();

    let textarea = document.getElementById('messages');
    textarea.value = Object.values(data).map(m => `${m.author}: ${m.content}`).join('\n');
 
}