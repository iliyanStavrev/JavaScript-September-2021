function solve() {
  let textInput = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
    
   textInput = textInput.split(' ');
    for (let i = 0; i < textInput.length; i++) {
    textInput[i] =  textInput[i].toLowerCase();
    }
 
     let result = '';
  if(convention == "Pascal Case"){
    for (let i = 0; i < textInput.length; i++) {
    result += textInput[i].slice(0,1).toUpperCase() + textInput[i].slice(1,textInput[i].length);
    }
  }
  else if (convention == "Camel Case") {
    for (let i = 1; i < textInput.length; i++) {
     result += textInput[i].slice(0,1).toUpperCase() + textInput[i].slice(1,textInput[i].length);   
    }
     result = textInput[0] + result;  
  }
  else{
     result = 'Error!'
  }
  document.getElementById('result').textContent = result;
 
}