function solve() {

   let buttons = document.querySelectorAll('tfoot button');
   let checkButton = buttons[0];
   let clearButton = buttons[1];

   checkButton.addEventListener('click',check);
   clearButton.addEventListener('click',clearTable);
 
   function check(){
          let board = Array.from(document.querySelectorAll('tbody tr'))
              .map(row => Array.from(row.querySelectorAll('input'))
              .map(e => Number(e.value)));
              let isValid = isValidSudoku(board);
           let paragraph = document.querySelector('#check p');
           let table = document.querySelector('table');

           table.style.border = isValid ? "2px solid green" : "2px solid red";
           paragraph.textContent = isValid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
           paragraph.style.color = isValid ? 'green' : 'red';
   }
        function isValidSudoku(board){
            for (let row = 0; row < board.length; row++) {
                  let rowObj = {1:0,2:0,3:0};
                  let colObj = {1:0,2:0,3:0};
                  for (let col = 0; col < board[row].length; col++) {
                     let rowCell = board[row][col];
                     let colCell = board[col][row];
                 
                     rowObj[rowCell]++;
                     colObj[colCell]++;
                  }
                       let rowValues = Object.values(rowObj);
                    let colValues = Object.values(colObj);
                 
                    if (rowValues.length > board.length || rowValues.some(e => e !== 1) ||
                    colValues.length > board.length || colValues.some(e => e !== 1)) {
                           return false;
                    }
              }
              return true;
        }      
   function clearTable(){
    let paragraph = document.querySelector('#check p');
    let table = document.querySelector('table');
    paragraph.textContent = '';
    table.style.border = '';
   Array.from(document.querySelectorAll('tbody tr'))
    .map(row => Array.from(row.querySelectorAll('input'))
       .forEach(e => e.value = ''));
   }
}