const { catArt, someNums, someProducts, someWords } = require("./data/data.js");
const { sortMethods } = require("./sortMethods.js");

// sort numbers in ascending order
const sortNumsA = numsArr => {
  return sortMethods.bubble(numsArr, "asc");
};

// sort numbers in descending order
const sortNumsD = numsArr => {
  return sortMethods.bubble(numsArr, "des");
};

// sort words in ascending order case sensitive
const sortWordsA = wordsArr => {
  return sortMethods.bubble(wordsArr, "asc");
};

// sort words in descending order case insensitive
const sortWordsD = wordsArr => {
  return sortMethods.bubble(wordsArr, "desIns");
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = products => {
  return sortMethods.selection(products, "ascIns");
};

// sort products by price, ascending order
const sortProductPriceA = products => {
  const priceAsc = (param1, param2) => param1.price < param2.price;
  return sortMethods.insertion(products, priceAsc);
};

// sort products by price, descending order
const sortProductPriceD = products => {
  const priceDes = (param1, param2) => param1.price > param2.price;
  return sortMethods.insertion(products, priceDes);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = products => {
  const priceThenNameAsc = (param1, param2) => {
    if (param1.price === param2.price) return param1.name < param1.name;
    else return param1.price < param2.price;
  };
  return sortMethods.insertion(products, priceThenNameAsc);
};

// Sort catArt by designedBy, ascending order
const catArtSortDesginedByA = catArts => {
  return sortMethods.merge(catArts);
};

// sort catArt by price, ascending order
const catArtSortByPriceA = catArts => {
  return sortMethods.quick(catArts);
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = arr => {
  // Quicksort (takes up extra space using two extra arrays to store data)
  // worst case: O(n^2)
  // average case: O(nlogn)
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...mySortFunction(left), pivot, ...mySortFunction(right)];
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