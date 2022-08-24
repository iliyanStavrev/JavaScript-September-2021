function extract(content) {
    let matcher = /\([A-Z,a-z,0-9\s]+\)/gm;
    let text1 = document.getElementById("content").textContent;
    let found = text1.match(matcher);
      let result = '';
    for (const iterator of found) {
        result += ' ' + iterator.slice(1,iterator.length - 1) + ';';
    }
    return result;
  // document.getElementById("content").textContent = result;
}