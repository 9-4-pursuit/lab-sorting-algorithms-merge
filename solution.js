const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        sorted = false;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
  return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[i + 1]) {
        sorted = false;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
  return nums;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < words.length; i++) {
      if (words[i] > words[i + 1]) {
        sorted = false;
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }
  return words;
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].toLowerCase() < words[i + 1].toLowerCase()) {
        sorted = false;
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }
  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= products.length - 2; i++) {
      if (products[i].name > products[i + 1].name) {
        sorted = false;
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
      }
    }
  }
  return products;
};


// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= products.length - 2; i++) {
      if (products[i].price > products[i + 1].price) {
        sorted = false;
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
      }
    }
  }
  return products;
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= products.length - 2; i++) {
      if (products[i].price < products[i + 1].price) {
        sorted = false;
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
      }
    }
  }
  return products;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= products.length - 2; i++) {
      if (products[i].price > products[i + 1].price ||
          (products[i].price === products[i + 1].price && products[i].name > products[i + 1].name)) {
        sorted = false;
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
      }
    }
  }
  return products;
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= catArt.length - 2; i++) {
      if (catArt[i].designedBy > catArt[i + 1].designedBy) {
        sorted = false;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
      }
    }
  }
  return catArt;
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  for (let i = 0; i < catArt.length - 1; i++) {
    for (let j = 0; j < catArt.length - i - 1; j++) {
      const numericA = parseFloat(catArt[j].price);
      const numericB = parseFloat(catArt[j + 1].price);

      if (numericA > numericB) {
        [catArt[j], catArt[j + 1]] = [catArt[j + 1], catArt[j]];
      }
    }
  }
  return catArt;

};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
  }
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
