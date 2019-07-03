// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels(str){
    let regex = /(aa|ee|oo|ii|uu)/g                     //regex of all 'long' vowels

    if (!str.match(regex)) {return str;}                //if string has no long vowels, return string
    else {
        let longVow = str.match(regex).toString('');    //find the long vowel in string
        let longerVow = longVow[0].repeat(5);           //create an even longer vowel
        return str.replace(longVow, longerVow);         //replace long vowel with even longer vowel
   }
}