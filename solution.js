const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
//const sortNumsA = () => {};
const sortNumsA = (nums) => nums.sort((a, b) => a - b);

// sort numbers in descending order
//const sortNumsD = () => {};
const sortNumsD = (nums) => nums.sort((a, b) => b - a);

// sort words in ascending order case sensitive
//const sortWordsA = () => {};
const sortWordsA = (words) => words.sort();

// sort words in descending order case insensitive
//const sortWordsD = () => {};
const sortWordsD = (words) => words.sort((a, b) => {
  const wordA = a.toLowerCase();
  const wordB = b.toLowerCase();
  if (wordA < wordB) {
    return 1;
  } else if (wordA > wordB) {
    return -1;
  } else {
    return 0;
  }
});

// sort products by name, ascending order case insensitive
// const sortProductNamesA = () => {};
const sortProductNamesA = (products) => products.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

// sort products by price, ascending order
//const sortProductPriceA = () => {};
const sortProductPriceA = (products) => products.sort((a, b) => a.price - b.price);

// sort products by price, descending order
//const sortProductPriceD = () => {};
const sortProductPriceD = (products) => products.sort((a, b) => b.price - a.price);

// sort products by price, then by name, ascending order
//const sortProducsPriceNameA = () => {};
const sortProducsPriceNameA = (products) => products.sort((a, b) => {
  if (a.price === b.price) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  }
  return a.price - b.price;
});

// sort catArt by designed by
// const catArtSortDesginedByA = () => {};
const catArtSortDesginedByA = (catArt) => catArt.sort((a, b) => {
  const nameA = a.designedBy.toLowerCase();
  const nameB = b.designedBy.toLowerCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});


// sort catArt by price
// const catArtSortByPriceA = () => {};
const catArtSortByPriceA = (catArt) => catArt.sort((a, b) => a.price - b.price);

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
