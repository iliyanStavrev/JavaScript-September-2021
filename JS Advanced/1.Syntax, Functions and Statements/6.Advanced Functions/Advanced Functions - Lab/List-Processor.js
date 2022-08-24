function solve (array){
  let list = [];

  for (const string of array) {
      let command = string.split(' ')[0];
      let text = string.split(' ')[1];
      switch(command){
          case 'add':
         list.push(text);
          break;
          case 'remove':
            (function removeItem(item){
                for(i in list){
                    if(list[i] == item) {
                        list.splice(i, 1)
                    }
                }
            })(text)
          break;
          case 'print':
      console.log(list.join(','));
          break;
      }
  }
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);