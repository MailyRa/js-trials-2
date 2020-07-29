"use strict";


// 1. printIndices
function printIndices(items) {
    for (const i in items) {
    console.log(`${items[i]} ${i}`);}
}

// printIndices(['apple', 'berry', 'cherry'])

// 2. everyOtherItem
function everyOtherItem(items) {
    
    const result = []

    for (const item in items){
        if (item % 2 === 0) {
            result.push(items[item]);
        }
    console.log(result)
    }

}
// everyOtherItem(['apple', 'berry', 'cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
    const sortedItems = items.sort((a, b) => a - b).slice(0, n);
    sortedItems.reverse();

    console.log(sortedItems);
}
