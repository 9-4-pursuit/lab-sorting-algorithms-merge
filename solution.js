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
const sortProductPriceD = (someProducts) => {
  for (let i = 1; i < someProducts.length; i++) {
    let curr = someProducts[i];
    let j = i - 1;
    // sort products by name
    while(j >= 0 && someProducts[j].price < curr.price) {
      someProducts[j + 1] = someProducts[j];
      j--;
    }
    someProducts[j + 1] = curr;
  }
  return someProducts;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  for (let i = 0; i < someProducts.length; i++) {
    let curr = someProducts[i];
    let j = i - 1;
    //sort first by price then by name then by name ascending
    while (j >= 0 && (someProducts[j].price > curr.price || (someProducts[j].price === curr.price && someProducts[j].name.localeCompare(curr.name) > 0))) {
      someProducts[j + 1] = someProducts[j];
      j--;
  }
  someProducts[j + 1] = curr;
}
return someProducts;
};
// sort catArt by designed by
const catArtSortDesignedByA = (catArt) => {
  for (let i = 1; i < catArt.length; i++) {
    let curr = catArt[i];
    let j = i - 1;
    while (j >= 0 && catArt[j].designedBy.localeCompare(curr.designedBy, undefined, { sensitivity: 'case' }) > 0) {
      catArt[j + 1] = catArt[j];
      j--;
    }
    catArt[j + 1] = curr;
  }
  return catArt;
};



// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  for (let i = 1; i < catArt.length; i++) {
    let curr = catArt[i];
    let j = i - 1;
    while (j >= 0 && convertPrice(catArt[j].price) > convertPrice(curr.price)) {
      catArt[j + 1] = catArt[j];
      j--;
    }
    catArt[j + 1] = curr;
  }
  return catArt;
};

const convertPrice = (price) => {
  if (typeof price === "number") {
    return price;  // If the price is already a number, return it as is
  } else if (typeof price === "string") {
    if (price.includes("♇♇")) {
      return parseFloat(price.replace("♇♇", "")) * 10;  // Convert ♇♇ prices to dollars
    } else {
      return parseFloat(price);  // If the price is a string number, parse it to a float
    }
  }
};


// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order = "asc") => {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      let shouldSwap = false;

      if (typeof arr[j] === "number" && typeof arr[j + 1] === "number") {
        // Sort numbers
        shouldSwap = order === "asc" ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
      } else if (typeof arr[j] === "string" && typeof arr[j + 1] === "string") {
        // Sort words (case-sensitive)
        shouldSwap =
          order === "asc" ? arr[j].localeCompare(arr[j + 1]) > 0 : arr[j].localeCompare(arr[j + 1]) < 0;
      }

      if (shouldSwap) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
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
  catArtSortDesignedByA,
  catArtSortByPriceA,
  mySortFunction,
};
