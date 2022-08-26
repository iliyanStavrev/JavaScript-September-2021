function loadCommits() {
  let username = document.getElementById('username').value;
  let repository = document.getElementById('repo').value;

  let ulParent = document.getElementById('commits');

  let url = `https://api.github.com/repos/${username}/${repository}/commits`;

  fetch(url)
    .then(res => {
        if (res.status == 404) {
            throw new Error(res.statusText + ' ' + res.status);
        }
      return res.json()})
     .then(dat =>{
            dat.forEach(data => {
                        let li = document.createElement('li');
            li.textContent = `${data.commit.author.name}: ${data.commit.message}`;
            ulParent.appendChild(li); 
            });
    
     }).catch(err => {
         let liEl = document.createElement('li');
         liEl.textContent  = err
         ulParent.appendChild(liEl);
     })
}