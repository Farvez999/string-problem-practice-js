function maxNumber(jim, dela, cinku) {
    if (jim > dela && jim > cinku) {
        console.log('Jim will gat the cake');
    }
    else if (dela > jim && dela > cinku) {
        console.log('dela will gat the cake');
    }
    else {
        console.log('Cinku will gat the cake');
    }
    return jim, dela, cinku;
}

let jim = 85;
let dela = 97;
let cinku = 99;
let maxNumbers = maxNumber(jim, dela, cinku);
console.log('Max Number:', maxNumbers);