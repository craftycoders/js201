// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
    function reverse(str){
        return str.split('').reverse().join('');
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
    function findLongestWord(str) {
        let strArr = str.split(' ')
        let longestWord = ''
        for (let idx=0; idx < strArr.length; idx++){
            if (strArr[idx].length > longestWord.length){
                longestWord = strArr[idx];
            } 
        }
        return longestWord;
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'



function nicer(sentence){
    let sentenceArr = sentence.split(' ');
    let cleanSentenceArr = [];
    let forbidden = ['heck', 'darn', 'dang', 'crappy']
    sentenceArr.forEach(function(word, idx){
        if (!(forbidden.includes(word))){
            cleanSentenceArr.push(word)
        }       
    })
    return cleanSentenceArr.join(' ');    
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

//** NOT using array **
function capitalizeAll(sentence){
    sentence = sentence.replace(sentence[0], sentence[0].toUpperCase()) //captializes first char
    return sentence.replace(/\s\w/gi, letter => letter.toUpperCase()) //replaces every char after a space
}

//** USING array **
// function capitalizeAll(sentence){
//     let sentArr = sentence.split(' ');
//     let capArr =[];
//     sentArr.forEach(function(word, idx){
//         capArr.push(word.replace(word[0], word[0].toUpperCase()))
//     })
//     return capArr.join(' ');
    
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split(str, del){
    let regex = new RegExp(del, 'g');
    let newStr = (str.replace(regex, ' '))  // replace delimeter with a single character, I used space
    let arr=[];
    let splitStr = '';
  
    for (let i = 0; i < newStr.length; i++){                //loop through new string
        if (newStr[i] === ' ' && splitStr !== ''){          //conditional will push a concatenated string once it encounters a space
            arr.push(splitStr)                             // then it will reset the concatenated string
            splitStr = '';                                 
        }
       if (newStr[i] !== ' '){splitStr += newStr[i];} //if new string char was not a space, concatenate char to string 
       if (newStr[i] === newStr[newStr.length-1]){arr.push(splitStr)} //if last character is not a space, it will push  split instring into array
    }

     return arr;    
    }