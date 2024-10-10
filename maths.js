//USING COMMON.JS TO EXPORT
//MATHS.JS
const PI = Math.PI;

// Using module.exports
module.exports.area = function (r) { return PI * r ** 2 }

// Using exports shortcut
exports.circumference = function (r) { return 2 * PI * r }



//USING ESM TO EXPORT

const sqrt = Math.sqrt

export function square(x){
    return x*x
}

export function diagonal(x,y){
    return sqrt(square(x) + square(y))
}