function reverseString(text) {
    console.log(text);
    let revers = '';
    for (i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        revers = revers + element;
        console.log(element, revers);
    }
    return revers;
}

const str = 'i am good boy'
const reversed = reverseString(str);
console.log(reversed);