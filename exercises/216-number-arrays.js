// Write a function "max" that takes an array of numbers returns the highest
// number in the array.


function max(arr){
    let highNum = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i] > highNum){ highNum = arr[i];}
    }
    return highNum;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(arr){
    let sum = 0;
    arr.forEach(function(value){ //value is each element in the array
        sum += value;
    })
    return sum;
}

//*for loop way*
// function sumNumbers(arr){
//     let sum = 0;
//     for (let idx=0; idx < arr.length; idx++){sum += arr[idx];
//     }
//     return sum;
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(arr){
    let posArr = []
    arr.forEach(function(num){
        if (num > 0){posArr.push(num)}})
    return posArr;
}

//*for loop way*
// function positives(arr){
//     let posArr = []
//     for (let idx = 0; idx < arr.length; idx++){
//         if (arr[idx] > 0){ posArr.push(arr[idx])}
//     }
//     return posArr;
// }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens(arr){
    let evenArr = []
    arr.forEach(function(val){
        if (val % 2 === 0) {evenArr.push(val)}
    })
    return evenArr;
}

//*for loop way*
// function evens(arr){
//     let evenArr = []
//     for (let idx = 0; idx < arr.length; idx++){
//         if (arr[idx] % 2 === 0){evenArr.push(arr[idx])}
//     }
//     return evenArr;
// }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds(arr){
    let oddArr = []
    for (let idx = 0; idx < arr.length; idx++){
        if (arr[idx] % 2 !== 0){oddArr.push(arr[idx])}
    }
    return oddArr;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers(arr){
    let intArr = [];
    for (let idx = 0; idx < arr.length; idx++){
        if (Number.isInteger(arr[idx])){intArr.push(arr[idx])}
    }
    return intArr;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(arr){
    let sqArr =[];
    for (let idx = 0; idx < arr.length; idx++){
        sqArr.push(Math.pow(arr[idx], 2))
    }
    return sqArr;
}