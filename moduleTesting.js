//USING COMMON.JS TO IMPORT

const {area, circunference} = require('./maths.js')

const radius = 4

console.log(area(radius))


//USING ESM TO IMPORT
//TESTING.JS
import { MyMaths, mathsAlternative } from './maths.js'

const maths = new MyMaths()

console.log(maths.add(2,2))

console.log(mathsAlternative.add(2,2))