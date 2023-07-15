const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  return someNums.sort((a, b) => a - b);

};

// sort numbers in descending order
const sortNumsD = () => {
  return someNums.sort((a, b) => b - a);

};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return someWords.sort();

};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: "base" }));

};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

};

// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => a.price - b.price);

};

// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => b.price - a.price);

};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  return someProducts.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy, undefined, { sensitivity: "base" }));

};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = getPriceValue(arr[i].price);
    let j = i - 1;

    while (j >= 0 && getPriceValue(arr[j].price) > current) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      j--;
    }
  }
  return arr;
};

const getPriceValue = (price) => {
  if (typeof price === "string" && price.includes("♇♇")) {
    return Number(price.substring(2)) * 10;
  }
  return Number(price);
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
