// TIP:
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
function isVowel(char){
    //char = char.toLowerCase();
    if (char.length > 1){
        return false;
    } else if (char === "a"||char === "e"||char === "i"||char === "o"||char === "u"||char === "A"||char === "E"||char === "I"||char === "O"||char === "U") {
       return true;
    }   else {
        return false;
    }

    // if (char.toLowerCase().length() === 1){
    // return (char === "a"||char === "e"||char === "i"||char === "o"||char === "u" ? true :  false);
    // }
    // return false;      
}
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false

function isEven(num){
    return (num % 2 === 0 && Number.isInteger(num) ? true : false)
}

function isOdd(num){
    return (num % 2 !== 0 && Number.isInteger(num) ? true : false)
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
// Hint 3: Can you find this data online in JSON format? How might that be helpful?
//
// Examples:
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false

function isCapitalCity(state, city){
    let capitals = {
        Alabama: 'Montgomery',
        Montana: 'Helena',
        Alaska:	'Juneau',	
        Nebraska: 'Lincoln',
        Arizona: 'Phoenix',	
        Nevada:	'Carson City',
        Arkansas: 'Little Rock',	
        'New Hampshire': 'Concord',
        California:	'Sacramento',	
        'New Jersey': 'Trenton',
        Colorado: 'Denver',	
        'New Mexico': 'Santa Fe',
        Connecticut: 'Hartford',	
        'New York': 'Albany',
        Delaware: 'Dover',	
        'North Carolina': 'Raleigh',
        Florida: 'Tallahassee',	
        'North Dakota': 'Bismarck',
        Georgia: 'Atlanta',	
        Ohio: 'Columbus',
        Hawaii:	'Honolulu',	
        Oklahoma: 'Oklahoma City',
        Idaho: 'Boise',	
        Oregon:	'Salem',
        Illinois: 'Springfield',	
        Pennsylvania: 'Harrisburg',
        Indiana: 'Indianapolis',	
        'Rhode Island': 'Providence',
        Iowa: 'Des Moines',	
        'South Carolina': 'Columbia',
        Kansas:	'Topeka',	
        'South Dakota': 'Pierre',
        Kentucky: 'Frankfort',	
        Tennessee: 'Nashville',
        Louisiana: 'Baton Rouge',
        Texas: 'Austin',
        Maine: 'Augusta',
        Utah: 'Salt Lake City',
        Maryland: 'Annapolis',	
        Vermont: 'Montpelier',
        Massachusetts: 'Boston',	
        Virginia: 'Richmond',
        Michigan: 'Lansing',	
        Washington:	'Olympia',
        Minnesota:	'St. Paul',	
        'West Virginia': 'Charleston',
        Mississippi: 'Jackson',	
        Wisconsin: 'Madison',
        Missouri: 'Jefferson City',	
        Wyoming: 'Cheyenne'
    };

    if (!(capitals.hasOwnProperty(state))) {
        return false;
    } else if (capitals[state] === city){
        return true;
    } 
    return false;
} 