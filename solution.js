const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = current;
  }
  return nums;

  // return nums.sort((a, b) => a - b);

};



// sort numbers in descending order
const sortNumsD = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] < current) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = current;
  }
  return nums;

//  return nums.sort((a, b) => b - a);
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
  let n = products.length;

  while (n > 1) {
    let sorted = true;

    for (let i = 0; i < n - 1; i++) {
      const productNameA = products[i].name.toLowerCase();
      const productNameB = products[i + 1].name.toLowerCase();

      if (productNameA > productNameB) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        sorted = false;
      }
    }

    if (sorted) {
      // If no swaps were made in this pass, the array is sorted, and we can break the loop.
      break;
    }

    n--; // Reduce the effective length of the array in each iteration
  }

  return products;
};

// sort products by price, ascending order
const sortProductPriceA = (price) => {
 
  for (let i = 1; i < price.length; i++) {
    let current = price[i];
    let j = i - 1;

    while (j >= 0 && price[j].price > current.price) {
      price[j + 1] = price[j];
      j--;
    }

    price[j + 1] = current;
  }
  return price;

};

// sort products by price, descending order
const sortProductPriceD = (price) => {

  for (let i = 1; i < price.length; i++) {
    let current = price[i];
    let j = i - 1;

    while (j >= 0 && price[j].price < current.price) {
      price[j + 1] = price[j];
      j--;
    }

    price[j + 1] = current;
  }
  return price;
};

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
const mySortFunction = () => {

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
