function loadRepos() {
 let username = document.getElementById('username').value;

 let url = `https://api.github.com/users/${username}/repos`;

 let ulParent = document.getElementById('repos');

 fetch(url)
  .then(res => {
	  ulParent.innerHTML = '';
	if (!res.ok) {
		
		throw new Error('404 (Not Found)');
	}
   return res.json()})
	.then(prop =>{
      ulParent.innerHTML = '';
       for (const i of prop) {
		   let li = document.createElement('li');
		   let a = document.createElement('a');
		   a.setAttribute('href',`${i.html_url}`);
		   a.textContent = i.full_name;
		   li.appendChild(a);
		   ulParent.appendChild(li);
	   }
	}).catch(error => {
	let liEl = document.createElement('li');
	liEl.textContent = error;
	ulParent.appendChild(liEl);	
	}
		);
   
}