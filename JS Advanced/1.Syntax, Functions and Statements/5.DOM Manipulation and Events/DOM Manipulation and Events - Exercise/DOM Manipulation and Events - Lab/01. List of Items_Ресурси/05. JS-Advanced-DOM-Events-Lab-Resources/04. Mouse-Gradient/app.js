function attachGradientEvents() {
   let element = document.getElementById("gradient-box");
   let result = document.getElementById("result");

  element.addEventListener('mousemove',function(e){
      let percentage = Math.floor((e.offsetX / e.currentTarget.offsetWidth)* 100) ;
      result.textContent = percentage + '%';
  });
  element.addEventListener('mouseout',function(){
    document.getElementById('result').textContent = '';
  })
}