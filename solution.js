const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b)
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort((a, b) => b - a)
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => words.sort();


// sort words in descending order case insensitive
const sortWordsD = (words) => {
  return words.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (b > a) return 1;
    if (a > b) return -1;
    return 0
  })
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  return products.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a > b) return 1;
    if (b > a) return -1;
    return 0
  })
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  return products.sort((a, b) => {
    a = a.price;
    b = b.price;
    return a - b;
  })
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  return products.sort((a, b) => {
    a = a.price;
    b = b.price;
    return b - a;
  })
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  return products.sort((a, b) => {
    if (a.price === b.price) {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0
    } 
    return a.price - b.price;
  })
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => {
    a = a.designedBy
    b = b.designedBy
    if (a > b) return 1;
    if (b > a) return -1;
    return 0
  })
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return catArt.sort((a, b) => {
    a = a.price;
    b = b.price;
    if (typeof a === 'string' && a.length === 1) a = Number(a);
    if (typeof b === 'string' && b.length === 1) b = Number(b);
    if (typeof a === 'string') a = Number(a[2]) * 10;
    if (typeof b === 'string') b = Number(b[2]) * 10;
    return a - b;
  })
};

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
