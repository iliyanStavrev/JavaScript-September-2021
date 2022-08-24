function solve(obj){

    function createEngine(hp){
        let engine = {};
          if (hp <= 90) {
              engine.power = 90;
              engine.volume = 1800;
          }
          else if (hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
          }
          else if (hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
          }
          return engine;
    }
    function carriageCreation(form,color){
        let carriageObj = {};
        carriageObj.type = form;
        carriageObj.color = color;
         
        return carriageObj;

    }
    function wheels(size){
        let newSize = size % 2 == 0 ? size -1 : size;
        let wheels = [newSize,newSize,newSize,newSize];
        return wheels;
    }
    let engineM = createEngine(obj.power);
    let carriageM = carriageCreation(obj.carriage,obj.color);
    let wheelsM = wheels(obj.wheelsize);
    return {
        model: obj.model,
        engine: engineM,
        carriage: carriageM,
        wheels: wheelsM
    };
}
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));