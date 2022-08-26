function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   let divEl = document.querySelector('#res');
  let httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener('readystatechange',() =>{
     if (httpRequest.readyState === 4 && httpRequest.status == 200) {
        divEl.textContent = httpRequest.responseText;
     }
  });
  httpRequest.open('GET',url);
  httpRequest.send();    
}