const lyrice = 'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay bolte pari ni. Kala Kala sada sada meg jomece sada kala';

const searchString = 'Pakhi'
const string = lyrice.toLowerCase().includes(searchString.toLowerCase());
console.log(string);


//index of
console.log(lyrice.indexOf('kala'));
if (lyrice.indexOf('sada') !== -1) {
    console.log('Exist inside the String');
}
else {
    console.log('Can not find it');
}