'use strict';

const inc = (obj) => {
  obj.n -=5 
    obj.n++;
};
const obj1 = {n: 9};
inc(obj1);
console.log(obj1);
