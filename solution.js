const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) =>
    b.toLowerCase().localeCompare(a.toLowerCase())
  );
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => b.price - a.price); //
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  // return someProducts.sort((a,b) => a.price - b.price).sort((a,b) =>
  //   a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  // )
  return someProducts.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) =>
    a.designedBy.toLowerCase().localeCompare(b.designedBy.toLowerCase())
  );
};

// sort catArt by price
const catArtSortByPriceA = () => {
  return catArt.sort((a, b) => {
    a = a.price;
    b = b.price;
    if (typeof a === "string" && a.length === 1) a = Number(a);
    if (typeof b === "string" && b.length === 1) b = Number(b);
    if (typeof a === "string") a = Number(a[2]) * 10;
    if (typeof b === "string") b = Number(b[2]) * 10;
    return a - b;
  });
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
