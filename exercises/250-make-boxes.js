// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
    let square = '';
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            square += ('*')
        }
        if(i < num-1){square += '\n'}
    }
    return square;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

// MY NOTES
//i = 0 j = 0 to width   ******
//i = 1 j = 1 *  j-... = ' '  j = width *
//i = height j = to width *****
//return asterisk when heightIndex = 0 or height -1, when widthIndex = 0 or width -1
//all other times, return space


function makeBox(width, height) {
    let box = '';
   
    for (let heightIndex = 0; heightIndex < height; heightIndex++){
        for(let widthIndex = 0; widthIndex < width; widthIndex++){
            if (heightIndex === 0 || heightIndex === height-1 || widthIndex === 0 || widthIndex === width-1)
                {box += '*'}
            else
                {box += ' '}
        }
        if(heightIndex < height-1){box += '\n'}
    }
    return box;

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(str) {
    let banner = '';
    banner += '*'.repeat((str.length)+4) + '\n';  //top border & go to new line
    banner += `* ${str} *` + '\n';                // * text *
    banner += '*'.repeat((str.length)+4);         //bottom border
    return banner;
}