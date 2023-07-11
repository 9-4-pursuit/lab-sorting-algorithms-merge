const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] < current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].toLowerCase();
        let j = i - 1;

        while (j >= 0 && arr[j].toLowerCase() < current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].name.toLowerCase();
        let j = i - 1;

        while (j >= 0 && arr[j].name.toLowerCase() > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].price;
        let j = i - 1;

        while (j >= 0 && arr[j].price > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
    return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
    return arr;
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
    return arr;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
    return arr;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order) => {
    return arr;
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
