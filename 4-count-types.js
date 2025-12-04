const array = [true, 'Hello World', 8, 152, -20, false, false, 'TikTok', 36.7, 'Dota', 0, 'Python'];
console.log('Array:', array);
let types = {};
console.log('Initial element:', types);
for (const item of array) {
    const type = typeof item;
    if (!types[type]) {
        types[type] = 0;
    }
    types[type]++;
}
console.log('Result:', types);
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
