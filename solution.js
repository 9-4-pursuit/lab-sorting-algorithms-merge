const { catArt, someNums, someProducts, sortWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  for (let i = 1; i < someNums.length; i++){
    let curr = someNums[i];
    let j = i - 1;
    while (j >= 0 && someNums[j] > curr) {
      someNums[j + 1] = someNums[j];
      j--;
    }
    someNums[j + 1] = curr;
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  for (let i = 1; i < someNums.length; i++){
    let curr = someNums[i];
    let j = i - 1;
    while (j >= 0 && someNums[j] < curr) {
      someNums[j + 1] = someNums[j];
      j--;
    }
    someNums[j + 1] = curr;
  }
  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = (sortWords) => {
  // START AT 1 compare and sort elements from the second position.
  for (let i = 1; i < sortWords.length; i++) {
    let curr = sortWords[i];
    let j = i - 1;
    while (j >= 0 && sortWords[j].localeCompare(curr) > 0) {
      sortWords[j + 1] = sortWords[j];
      j--;
    }
    sortWords[j + 1] = curr;
  }
  console.log(sortWords)
  return sortWords;
};

// sort words in descending order case insensitive
const sortWordsD = (sortWords) => {
    // START AT 1 compare and sort elements from the second position.
    for (let i = 1; i < sortWords.length; i++) {
      let curr = sortWords[i];
      let j = i - 1;
      while (j >= 0 && sortWords[j].localeCompare(curr) < 0) {
        sortWords[j + 1] = sortWords[j];
        j--;
      }
      sortWords[j + 1] = curr;
    }
    console.log(sortWords)
    return sortWords;
  };

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  for (let i = 1; i < someProducts.length; i++) {
    let curr = someProducts[i];
    let j = i - 1;
    // sort products by name
    while(j >= 0 && someProducts[j].name.localeCompare(curr.name, undefined, {sensitivity: 'base'}) > 0) {
      someProducts[j + 1] = someProducts[j];
      j--;
    }
    someProducts[j + 1] = curr;
  }
  return someProducts;
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  for (let i = 1; i < someProducts.length; i++) {
    let curr = someProducts[i];
    let j = i - 1;
    // sort products by name
    while(j >= 0 && someProducts[j].price > curr.price) {
      someProducts[j + 1] = someProducts[j];
      j--;
    }
    someProducts[j + 1] = curr;
  }
  return someProducts;
};

// sort products by price, descending order
const sortProductPriceD = () => {};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {};

// sort catArt by designed by
const catArtSortDesginedByA = () => {};

// sort catArt by price
const catArtSortByPriceA = () => {};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => {};

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
