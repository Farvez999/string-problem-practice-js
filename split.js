//Split
const lyrice = 'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay bolte pari ni. Kala Kala sada sada meg jomece sada kala';

const parts = lyrice.split(' ');
const sentence = lyrice.split('.');
const chars = lyrice.split('');
console.log(parts);
console.log(sentence);
console.log(chars);

//slice
const partial = lyrice.slice(5, 11);
console.log(partial);

//substring
const partial1 = lyrice.slice(5, 16);
console.log(partial1);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tomay bolte pari ni',
    'Kala Kala sada sada meg jomece sada kala'
]
const newSong = lines.join('. ')
console.log(newSong);
