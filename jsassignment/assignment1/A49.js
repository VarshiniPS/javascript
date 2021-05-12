/*function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        console.log(newStr);
    }
}

translatePigLatin("The")
translatePigLatin("quick")
translatePigLatin("brown")
translatePigLatin("fox")*/

function letters(word) {
    return word.split('')
}

function pigLatinizeWord(word) {
    var chars = letters(word);
    return chars.slice(1).join('') + chars[0] + 'ay';
}

function pigLatinizeSentence(sentence) {
    console.log(sentence.replace(/\w+/g, pigLatinizeWord));
}

pigLatinizeSentence('The quick brown fox')
