function solve() {

    let addBtn = document.querySelector('#add button');
    addBtn.addEventListener('click',adding);

    let nameInp = document.querySelector('input[placeholder=Name]');
    let ageInp = document.querySelector('input[placeholder=Age]');
    let kindInp = document.querySelector('input[placeholder=Kind]');
    let ownerInp = document.querySelectorAll('#container input')[3];

    let parent = document.querySelector('#adoption ul');


    function adding(e){
        e.preventDefault();
      
        if (nameInp.value == '' ||  ageInp.value == '' || isNaN(ageInp.value.trim()) ||
                  kindInp.value == '' || ownerInp.value == '') {
              return;
        }
       let liEl = document.createElement('li');
       let p = document.createElement('p');
       let nameStr = document.createElement('strong');
       nameStr.textContent = nameInp.value;
       let yearsStr = document.createElement('strong');
       yearsStr.textContent = ageInp.value;
       let kindStr = document.createElement('strong');
       kindStr.textContent = kindInp.value;
p.innerHTML = `<strong>${nameStr.textContent}</strong> is a <strong>${yearsStr.textContent}</strong> year old <strong>${kindStr.textContent}</strong>`
      let span = document.createElement('span');
      span.textContent = `Owner: ${ownerInp.value}`;
      let contactBtn = document.createElement('button');
      contactBtn.textContent = 'Contact with owner';
      contactBtn.addEventListener('click',contacting);
      
      liEl.appendChild(p);
      liEl.appendChild(span);
      liEl.appendChild(contactBtn);
       
       parent.appendChild(liEl);

       nameInp.value = "";
       ageInp.value = "";
       kindInp.value = "";
       ownerInp.value = "";

    }
    function contacting(e){
        e.target.remove();
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.setAttribute('placeholder','Enter your names');
        let button = document.createElement('button');
        button.textContent = 'Yes! I take it!';
      
            button.addEventListener('click',moving);
function solve() {

    let addBtn = document.querySelector('#add button');
    addBtn.addEventListener('click',adding);

    let nameInp = document.querySelector('input[placeholder=Name]');
    let ageInp = document.querySelector('input[placeholder=Age]');
    let kindInp = document.querySelector('input[placeholder=Kind]');
    let ownerInp = document.querySelectorAll('#container input')[3];

    let parent = document.querySelector('#adoption ul');


    function adding(e){
        e.preventDefault();
      
        if (nameInp.value == '' ||  ageInp.value == '' || isNaN(ageInp.value.trim()) ||
                  kindInp.value == '' || ownerInp.value == '') {
              return;
        }
       let liEl = document.createElement('li');
       let p = document.createElement('p');
       let nameStr = document.createElement('strong');
       nameStr.textContent = nameInp.value;
       let yearsStr = document.createElement('strong');
       yearsStr.textContent = ageInp.value;
       let kindStr = document.createElement('strong');
       kindStr.textContent = kindInp.value;
p.innerHTML = `<strong>${nameStr.textContent}</strong> is a <strong>${yearsStr.textContent}</strong> year old <strong>${kindStr.textContent}</strong>`
      let span = document.createElement('span');
      span.textContent = `Owner: ${ownerInp.value}`;
      let contactBtn = document.createElement('button');
      contactBtn.textContent = 'Contact with owner';
      contactBtn.addEventListener('click',contacting);
      
      liEl.appendChild(p);
      liEl.appendChild(span);
      liEl.appendChild(contactBtn);
       
       parent.appendChild(liEl);

       nameInp.value = "";
       ageInp.value = "";
       kindInp.value = "";
       ownerInp.value = "";

    }
    function contacting(e){
        e.target.remove();
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.setAttribute('placeholder','Enter your names');
        let button = document.createElement('button');
        button.textContent = 'Yes! I take it!';
      
            button.addEventListener('click',moving);
        
        let parentLi = document.querySelector('#adoption ul li');

        div.appendChild(input);
        div.appendChild(button);
        parentLi.appendChild(div);
    }
    function moving(e){
        let newOwnerText = e.currentTarget.parentElement.querySelector('input');
        if (newOwnerText.value === '') {
            return;
        }
        let pArr = e.currentTarget.parentElement.parentElement.querySelector('p');
        let pNew = document.createElement('p');
        pNew.innerHTML = pArr.innerHTML;
        let parentUl = document.querySelector('#adopted ul');
        let li = document.createElement('li');

        let spanNew = document.createElement('span');
        spanNew.textContent = `New Owner: ${newOwnerText.value}`;
        let checkBtn = document.createElement('button');
        checkBtn.textContent = "Checked";
        checkBtn.addEventListener('click',checking);

        li.appendChild(pNew);
        li.appendChild(spanNew);
        li.appendChild(checkBtn);
        parentUl.appendChild(li);
        e.currentTarget.parentElement.parentElement.remove();
        
    }
    function checking(e){
       e.currentTarget.parentElement.remove();
    }
}

            
        let parentLi = document.querySelector('#adoption ul li');

        div.appendChild(input);
        div.appendChild(button);
        parentLi.appendChild(div);
    }
    function moving(e){
        let newOwnerText = e.currentTarget.parentElement.querySelector('input');
        if (newOwnerText.value === '') {
            return;
        }
        let pArr = e.currentTarget.parentElement.parentElement.querySelector('p');
        let pNew = document.createElement('p');
        pNew.innerHTML = pArr.innerHTML;
        let parentUl = document.querySelector('#adopted ul');
        let li = document.createElement('li');

        let spanNew = document.createElement('span');
        spanNew.textContent = `New Owner: ${newOwnerText.value}`;
        let checkBtn = document.createElement('button');
        checkBtn.textContent = "Checked";
        checkBtn.addEventListener('click',checking);

        li.appendChild(pNew);
        li.appendChild(spanNew);
        li.appendChild(checkBtn);
        parentUl.appendChild(li);
        e.currentTarget.parentElement.parentElement.remove();
        
    }
    function checking(e){
       e.currentTarget.parentElement.remove();
    }
}

