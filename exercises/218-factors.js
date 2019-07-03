// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10
function gcd(num1, num2){
    for(let idx = num1; idx > 0; idx--){
        if(num1 % idx === 0 && num2 % idx === 0){
            return (idx);
        }
    } return 1;

    //***LONG WAY...it also doesn't work in 3rd case***

    // let arr1 = [];
    // let arr2= [];
  
    // for(let idx = 1; idx <= num1; idx++){       //find factors in num1 and push in array
    //     if(num1 % idx === 0){arr1.push(idx)}
    // }
   

    // for(let idx2 = 1; idx2 <= num2; idx2++){
    //     if(num2 % idx2 === 0){arr2.push(idx2)}
    // }

    // arr1 = arr1.reverse();                      //reverse arrays so highest factors appears first                  
    // console.log('arr1: ', arr1)                 
    // arr2 = arr2.reverse();
    // console.log('arr2: ', arr2)

    //  arr1.forEach(function(val){                //check if array1 factors are in array2
    //     if (arr2.indexOf(val) !== -1){
    //         console.log('GCD', val); 
    //         return val;
    //     };
    //     return 1;
    // })

    //***hints***
    //no need for array of factors
    //how to determine if one is divisible by other

    

    // for (let idx3 = 0; idx3 < arr1.length; idx3++){  // loop through arr1
    //     if(arr2.indexOf(arr1[idx3]) !== -1){   
    //               //are arr1 factors in arr2, if yes return index;  if index does NOT equal -1, return that factor
    //        console.log ('true', arr1[idx3]);
    //        return (arr1[idx3]);
    //     }
    //     else return 1;
    // }

    //
    
}
// gcd(3, 15);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors(num){
    let arr=[]
    for(let idx = 1; idx <= num; idx++){       
        if(num % idx === 0){arr.push(idx)}            
    } 
    return arr;
}

factors(12);