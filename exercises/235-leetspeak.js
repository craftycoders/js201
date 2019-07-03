// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"
let conversionList = {
    A: 4,
    E: 3,
    G: 6,
    I: 1,
    O: 0,
    S: 5,
    T: 7
}

function leetspeak(str){
    //create array of keys
    let convListArr = Object.keys(conversionList);         
    let convStr = '';

    //loop through  string
    for(let idx = 0; idx < str.length; idx++){             
        let upperChar = str[idx].toUpperCase()
       
        //if character is NOT a key, concatenate original character to new string
       if((convListArr.indexOf(upperChar)) === -1){convStr += str[idx]}
    
       //otherwise character IS a key, concatenate the key:value to new string
       else {convStr += conversionList[upperChar]}
    }
    return convStr.toLowerCase();
}