window.addEventListener('load', solution);

function solution() {

  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click',submitInfo);

  let editBTN = document.getElementById('editBTN');
  editBTN.addEventListener('click',editFields);

  let continueBTN = document.getElementById('continueBTN');
  continueBTN.addEventListener('click',continueFunc);

  let fullNameInp = document.getElementById('fname');
  let emailInp = document.getElementById('email');
  let phoneInp = document.getElementById('phone');
  let addressInp = document.getElementById('address');
  let codeInp = document.getElementById('code');

  let fName = '';
  let email = '';
  let phone = '';
  let address = '';
  let code = '';

  let parentUl = document.getElementById('infoPreview');

  let fNameLi = document.createElement('li');
  let emailLi = document.createElement('li');
  let phoneLi = document.createElement('li');
  let addressLi = document.createElement('li');
  let codeLi = document.createElement('li');


  function submitInfo(){
   if (fullNameInp.value !== '' && emailInp.value !== '') {
   
     fName = fullNameInp.value;
     fNameLi.textContent = 'Full Name: ' + fullNameInp.value;
    
     email = emailInp.value;
     emailLi.textContent = 'Email: ' + emailInp.value;
     
     phone = phoneInp.value;
     phoneLi.textContent = 'Phone Number: ' + phoneInp.value;
    
     address = addressInp.value;
     addressLi.textContent = 'Address: ' + addressInp.value;
    
     code = codeInp.value;
     codeLi.textContent = 'Postal Code: ' + codeInp.value;

    
     parentUl.appendChild(fNameLi);
     parentUl.appendChild(emailLi);
     parentUl.appendChild(phoneLi);
     parentUl.appendChild(addressLi);
     parentUl.appendChild(codeLi);

     submitBtn.disabled = true;
     editBTN.disabled = false;
     continueBTN.disabled = false;
     fullNameInp.value = '';
     emailInp.value = '';
     phoneInp.value = '';
     addressInp.value = '';
     codeInp.value = '';

   }
  
  }
  function editFields(){

    fullNameInp.value = fName;
    emailInp.value = email;
    phoneInp.value = phone;
    addressInp.value = address;
    codeInp.value = code;

    parentUl.innerHTML = '';
    submitBtn.disabled = false;
    editBTN.disabled = true;
    continueBTN.disabled = true;

   }
   function continueFunc(){
    
  fNameLi.remove();
  emailLi.remove();
  phoneLi.remove();
  addressLi.remove();
  codeLi.remove();



  let block = document.getElementById('block');
  block.innerHTML = '';
  let h3 = document.createElement('h3');
  h3.textContent = 'Thank you for your reservation!';
  block.appendChild(h3);


   }

}
