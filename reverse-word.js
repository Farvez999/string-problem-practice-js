function reverseString(text) {
    const word = text.split(' ');
    const result = [];
    console.log(word);

    for (i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const str = 'i am good boy'
const reversed = reverseString(str);
console.log(reversed);