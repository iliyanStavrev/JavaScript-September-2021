function encodeAndDecodeMessages() {
    
    let buttonEn = document.querySelector("#main div:nth-child(1) button");
    let buttonDe = document.querySelector("#main div:nth-child(2) button");
  
    
    let textAreaFirst = document.querySelector("#main div:nth-child(1) textarea");
    let textAreaSecond = document.querySelector("#main div:nth-child(2) textarea");

    buttonEn.addEventListener('click',encode);
    buttonDe.addEventListener('click',decode);

    function encode(){
        let firstText = textAreaFirst.value;
        let newText = '';
        for (let i = 0; i < firstText.length; i++) {
         newText += String.fromCharCode(firstText[i].charCodeAt(0) + 1);
        }
        textAreaSecond.value = newText;
        textAreaFirst.value = '';
    }
    function decode(){
        let secondText = textAreaSecond.value;
        let decodetText = '';
        for (let i = 0; i < secondText.length; i++) {
           decodetText += String.fromCharCode(secondText[i].charCodeAt(0) - 1);
            
        }
        textAreaSecond.value = decodetText; 
    }

}