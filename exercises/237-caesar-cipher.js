// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher(str, shift){
    let alphabetCode = {
        a: 1,  
        b: 2,
        c: 3,  //3-11= -8,  =>26 - (8+1)
        d: 4,  //4-11= -7   =>26 - (7+1)
        e: 5,  //5-11 = -6  =>26 - (6+1)
        f: 6, 
        g: 7, 
        h: 8, 
        i: 9, 
        j: 10, 
        k: 11, 
        l: 12, 
        m: 13, 
        n: 14, 
        o: 15, 
        p: 16, 
        q: 17, 
        r: 18, 
        s: 19, 
        t: 20, 
        u: 21, 
        v: 22, 
        w: 23, 
        x: 24, 
        y: 25, 
        z: 26

    }

    for(let idx =0; idx < str.length; idx++){
        let charPos = alphabetCode[str];
        let cypherPos = charPos - shift;
        let deciphered = '';
        console.log (charPos)
        console.log (cypherPos)
         if (cypherPos === 0){
             cypherPos = 26
        }
         else if (cypherPos < 0) {
            cypherPos = 26 + (cypherPos - 1)
        }
        
        for (key in alphabetCode)
            //console.log ('cypherPos: ', cypherPos, ' | ' ,'key: ', key,  ' | ', 'key.cypherPos: ', alphabetCode[key])
            if (alphabetCode[key] === cypherPos){
            deciphered += this.key;
            console.log(deciphered)
            }console.log(deciphered)
            return deciphered
         }
         //console.log(deciphered)
       //  return deciphered
    } 


decipher('he', 11)