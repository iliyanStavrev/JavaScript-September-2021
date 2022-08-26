function lockedProfile() {
  let url = `http://localhost:3030/jsonstore/advanced/profiles`;
  let main = document.getElementById('main');

  fetch(url)
  .then(res => res.json())
  .then(data =>{
    
       for (const [id,value] of Object.entries(data)) {
           
         let htmlProfile =   createProfile(value,id);
          main.appendChild(htmlProfile);
          
       }
  });

  function createProfile(value,id){
      let divEl = document.createElement('div');
      divEl.setAttribute('class','profile');

      let img = document.createElement('img');
      img.setAttribute('src',"./iconProfile2.png");
      img.classList.add('userIcon');

      let labelLock = document.createElement('label');
      labelLock.textContent = 'Lock';

      let radioLock = document.createElement('input');
      radioLock.type = 'radio';
      radioLock.name = `user${id}Locked`;
      radioLock.value = 'lock';
      radioLock.checked = true;

      let labelUNLock = document.createElement('label');
      labelUNLock.textContent = 'Unlock';

      let radioUNLock = document.createElement('input');
      radioUNLock.type = 'radio';
      radioUNLock.name = `user${id}Locked`;
      radioUNLock.value = 'unlock';
     
      
      let br = document.createElement('br');
   
      let hr = document.createElement('hr');

      let userLabel = document.createElement('label');
      userLabel.textContent = 'Username';

      let userNameInp = document.createElement('input');
      userNameInp.type = 'text';
      userNameInp.name = `user${value}Username`;
      userNameInp.value = value.username;
      userNameInp.disabled = true;
      userNameInp.readOnly = true;

      let hiddenDiv = document.createElement('div');
      hiddenDiv.id = `user1HiddenFields`;

      let hr2 = document.createElement('hr');

       let emailLabel = document.createElement('label');
       emailLabel.textContent = 'Email:';

      let emailINP = document.createElement('input');
      emailINP.type = 'email';
      emailINP.name = `user${id}Email`;
      emailINP.value = value.email;
      emailINP.disabled = true;
      emailINP.readOnly = true;

      let ageLabel = document.createElement('label');
      ageLabel.textContent = 'Age:';

      let ageINP = document.createElement('input');
      ageINP.type = 'email';
      ageINP.name = `user${id}Age`;
      ageINP.value = value.age;
      ageINP.disabled = true;
      ageINP.readOnly = true;

      hiddenDiv.appendChild(hr2);
      hiddenDiv.appendChild(emailLabel);
      hiddenDiv.appendChild(emailINP);
      hiddenDiv.appendChild(ageLabel);
      hiddenDiv.appendChild(ageINP);
     
      let showBtn = document.createElement('button');
      showBtn.textContent = 'Show more';
      showBtn.addEventListener('click',showingMore);

      divEl.appendChild(img);
      divEl.appendChild(labelLock);
      divEl.appendChild(radioLock);
      divEl.appendChild(labelUNLock);
      divEl.appendChild(radioUNLock);
      divEl.appendChild(br);
      divEl.appendChild(hr);
      divEl.appendChild(userLabel);
      divEl.appendChild(userNameInp);
      divEl.appendChild(hiddenDiv);
      divEl.appendChild(showBtn);
      
      return divEl;
    
  }
 
  function showingMore(e){
      let profile = e.target.parentElement;
      let hiddenDiv = e.target.previousElementSibling;
      let radioBtn = profile.querySelector('input[type="radio"]:checked');
      let showBtn = e.target;
      console.log(radioBtn);
     
      if (radioBtn.value !== 'unlock') {
          return;
      }
      
      showBtn.textContent = showBtn.textContent === 'Show more'
                                                     ?'Hide it'
                                                     :'Show more';

      hiddenDiv.style.display = hiddenDiv.style.display === 'block'
                                                             ?'none' 
                                                             :'block';                                                 
  }
}