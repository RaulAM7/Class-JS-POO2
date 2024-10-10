
//USING COMMON.JS TO EXPORT
const PI = Math.PI;

// Using module.exports
module.exports.area = function (r) { return PI * r ** 2 }

// Using exports shortcut
exports.circumference = function (r) { return 2 * PI * r }



//USING ESM TO EXPORT
//MATHS.JS
 class MyMaths{
    constructor () {
    }
    add(x,y){return x+y}
    rest(x,y){return x-y}
}


 const mathsAlternative = {
    add(x, y) { return x + y },
    rest(x, y) { return x - y }
}

export {MyMaths, mathsAlternative}