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
const sortProductPriceA = (products) => {
  for (let i = 1; i < products.length; i++) {
    let current = products[i];
    let j = i - 1;

    while (j >= 0 && products[j].price > current.price) {
      products[j + 1] = products[j];
      j--;
    }

    products[j + 1] = current;
  }
  return products;
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
const sortProducsPriceNameA = (products) => {
  products.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name, undefined, { sensitivity: "case" });
    } else {
      return a.price - b.price;
    }
  });
  return products;
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy, undefined, { sensitivity: "case" }));
  return catArt;
};


// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  // Create a copy of the catArt array to avoid modifying the original data
  const catArtCopy = catArt.map((item) => ({ ...item }));

  // Convert prices to numeric values and round to two decimal places before sorting
  catArtCopy.forEach((item) => {
    if (typeof item.price === "string") {
      // Remove non-numeric characters (like "♇") from the price string and parse as a float
      item.price = parseFloat(item.price.replace(/[^0-9.-]/g, ""));
    } else if (typeof item.price !== "number") {
      // Set invalid price values to 0
      item.price = 0;
    }

    // Round the price to two decimal places
    item.price = parseFloat(item.price.toFixed(2));
  });

  catArtCopy.sort((a, b) => a.price - b.price);
  return catArtCopy;
};



// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (data, sortOrder = "asc") => {
  // Convert data to an array (if it's not already an array)
  const dataArray = Array.isArray(data) ? data : Object.values(data);

  // Helper function to swap elements in the array
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  // Bubble sort algorithm
  const bubbleSort = (arr) => {
    const n = arr.length;
    let sorted = false;

    for (let i = 0; i < n - 1; i++) {
      sorted = true;
      for (let j = 0; j < n - i - 1; j++) {
        if (sortOrder === "asc" ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
          swap(arr, j, j + 1);
          sorted = false;
        }
      }

      if (sorted) {
        // If no swaps were made in this pass, the array is sorted, and we can break the loop.
        break;
      }
    }

    return arr;
  };

  return bubbleSort(dataArray);
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
