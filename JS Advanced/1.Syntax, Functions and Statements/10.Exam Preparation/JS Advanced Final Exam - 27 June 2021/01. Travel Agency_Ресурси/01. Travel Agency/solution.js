window.addEventListener('load', solution);

function solution(){
   
   let submitBTN = document.getElementById('submitBTN');
   submitBTN.addEventListener('click',submiting);

   let block = document.getElementById('block');
   

    let fullName = document.getElementById('fname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let postalCode = document.getElementById('code');

    let editBTN = document.getElementById('editBTN');
    let continueBTN = document.getElementById('continueBTN');

    let parent = document.getElementById('infoPreview');

    let name = '';
    let mail = '';
    let tel = '';
    let adres = '';
    let post = '';

   function submiting(){
     
    if (fullName.value === '' || email.value === '') {
        return;
    }
     let liName = document.createElement('li');
     name = fullName.value;
     liName.textContent = 'Full Name: ' + name;

     let liEmail = document.createElement('li');
     mail = email.value;
     liEmail.textContent = 'Email: ' + mail;

     let liPhone = document.createElement('li');
     tel = phone.value;
     liPhone.textContent = 'Phone Number: ' + tel;

     let liAddress = document.createElement('li');
     adres = address.value;
     liAddress.textContent = 'Address: ' + adres;

     let liCode = document.createElement('li');
     post = postalCode.value;
     liCode.textContent = 'Postal Code: ' + post;

     parent.appendChild(liName);
     parent.appendChild(liEmail);
     parent.appendChild(liPhone);
     parent.appendChild(liAddress);
     parent.appendChild(liCode);

     fullName.value = '';
     email.value = '';
     phone.value = '';
     address.value = '';
     postalCode.value = '';
     
     submitBTN.disabled = true;
     editBTN.disabled = false;
     continueBTN.disabled = false;

     editBTN.addEventListener('click',editInfo);
     continueBTN.addEventListener('click', continuetion);

    function editInfo(){
        fullName.value = name;
        email.value = mail;
        phone.value = tel;
        address.value = adres;
        postalCode.value = post;

        parent.innerHTML = '';
        submitBTN.disabled = false;
        editBTN.disabled = true;
        continueBTN.disabled = true;

    }

    function continuetion(){
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!';
      block.innerHTML = '';
      block.appendChild(h3);
        }
   }
}