const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (thoseNums) => {
  return thoseNums.sort((a, b) => a - b)
};
// sort numbers in descending order
const sortNumsD = (thoseNums) => {
  return thoseNums.sort((a, b) => b - a)
};

// sort words in ascending order case sensitive
const sortWordsA = (thoseWords) => thoseWords.sort();

// sort words in descending order case insensitive
const sortWordsD = (thoseWords) => {
  return thoseWords.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (b > a) return 1;
    if (a > b) return -1;
    return 0;
  })
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  return products.sort((a, b) => {
    const productA = a.name.toLowerCase();
    const productB = b.name.toLowerCase();
    if (productA < productB) {
      return -1;
    }
    if (productA > productB) {
      return 1;
    }
    return 0;
  })
};
// sort products by price, ascending order
const sortProductPriceA = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  return products.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  return products.sort((a, b) => {
    if (a.price === b.price) {
      const productA = a.name.toLowerCase();
      const productB = a.name.toLowerCase();

      if (productA < productB) {
        return -1;
      }
      if (productA > productB) {
        return 1;
      }
      return 0;
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesignedByA = (catArt) => {
  return catArt.sort((a, b) => {
    const designedByA = a.designedBy.toLowerCase();
    const designedByB = b.designedBy.toLowerCase();

    if (designedByA < designedByB) {
      return -1;
    }
    if (designedByA > designedByB) {
      return 1;
    }
    return 0;
  });
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return catArt.sort((a, b) => a.price - b.price);
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr,) => {
  return arr.sort((a,b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
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
  catArtSortDesignedByA,
  catArtSortByPriceA,
  mySortFunction,
};
