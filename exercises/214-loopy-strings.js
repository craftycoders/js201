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
    //let cleanSentenceArr = []
    //console.log(sentenceArr);
    sentenceArr.forEach(function(word, idx){
        //console.log(typeof(word))

        if (word === 'heck' || word === 'darn' || word === 'dang' || word === 'crappy'){
            console.log(word, idx)
            sentenceArr.slice(1, 10);
            console.log(sentenceArr)
        }
        
    })
    return sentenceArr.join(' ');
    
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'



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
