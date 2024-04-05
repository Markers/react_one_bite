// common js module
// const {add,sub}= require("./math");

// es module 방식
import mul, {add, sub} from "./math.js";
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));