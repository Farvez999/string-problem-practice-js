//Tallest number in array
function maxInArray(numbers) {
    console.log('array number: ', numbers);
    let tallests = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element > tallests) {
            tallests = element;
        }
    }
    return tallests;
}

const tallestNumber = [167, 190, 130, 165, 137];
const tallest = maxInArray(tallestNumber);
console.log(tallest);