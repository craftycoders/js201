// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

//MY NOTES
//arr[0][0] + arr[0][0] 
//arr[0][1] + arr[0][1]
//arr[1][0] + arr[1][0]
//arr[1][1] + arr[1][1]

function matrixAdd(arr1, arr2){
    let firstSumArr=[];
    let secondSumArr=[];
    let totalArr=[];
    for(i=0; i<2; i++){
        for(arr1Idx=0; arr1Idx<arr1.length; arr1Idx++ ){
            if(i === 0){ 
                firstSumArr.push(arr1[i][arr1Idx] + arr2[i][arr1Idx]);     
            }
            else {
                secondSumArr.push(arr1[i][arr1Idx] + arr2[i][arr1Idx]);
            }   
        }     
    }
    totalArr.push(firstSumArr);
    totalArr.push(secondSumArr)   
    return totalArr;    
}



  



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]
function matrixMultiply(arr1, arr2){
    let firstMultArr=[];
    let secondMultArr=[];
    let totalArr=[];
    for(i=0; i<2; i++){
        for(arr1Idx=0; arr1Idx<arr1.length; arr1Idx++ ){
            if(i === 0){ 
                firstMultArr.push(arr1[i][arr1Idx] * arr2[i][arr1Idx]);     
            }
            else {
                secondMultArr.push(arr1[i][arr1Idx] * arr2[i][arr1Idx]);
            }   
        }     
    }
    totalArr.push(firstMultArr);
    totalArr.push(secondMultArr);  
    return totalArr;    
}