function solve() {
  let text = document.getElementById("input");
  let input = text.value;

  let sentences = input.split('.').filter(x => x !== '').map(x => x + '.');

  let counter = Math.ceil(sentences.length / 3);

  let output = document.getElementById('output');

  for (let i = 0; i < counter; i++) {

   output.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`;
    
  } 
}