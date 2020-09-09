import {add, name, mul, Person} from './js/math.js';
console.log(add(20, 30));
// console.log(mul(20, 30));
console.log(name);
console.log(mul(1, 10));
const person = new Person();
person.run();
import addr from './js/math.js';
console.log(addr);
import say from './js/math.js';
say();
import * as more from './js/math.js';
console.log(more.one);
document.writeln('haha');
// 依赖CSS
require('./css/css.css');
require('./css/special.less');