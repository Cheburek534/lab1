
const array = [true, 'Hello World', 8, 152, -20, false, false, 'TikTok', 36.7, 'Dota', 0, 'Python'];
console.log('Array:', array);
let types = {number: 0, string: 0, boolean: 0, object: 0, undefined: 0, symbol: 0, bigint: 0};

console.log('Initial element:', types);
for (const item of array) {
    const type = typeof item;
    types[type]++;
}

console.log(Result:', types);
console.log('Changed example');

let dynamicTypes = {};

console.log('Hollow object:', dynamicTypes);

for (const item of array) {
    const type = typeof item;
    
    if (!dynamicTypes[type]) {
        dynamicTypes[type] = 0;
    }
    dynamicTypes[type]++;
}
console.log('Dynamic result', dynamicTypes);
