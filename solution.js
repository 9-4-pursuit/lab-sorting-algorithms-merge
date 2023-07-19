const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

const swap = (arr, left, right) => {
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  let len = someNums.length
  let sorted = false

  for (let i = 0; i < len; i++) {
    sorted = false
    for (let j = 0; j < len; j++) {
      if (someNums[j] > someNums[j + 1]) {
        swap(someNums, j, j + 1)
        sorted = true
      }
    }
    if (!sorted) {
      break
    }
  }
  return someNums
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  let len = someNums.length
  let sorted = false

  for (let i = 0; i < len; i++) {
    sorted = false
    for (let j = 0; j < len; j++) {
      if (someNums[j] < someNums[j + 1]) {
        swap(someNums, j, j + 1)
        sorted = true
      }
    }
    if (!sorted) {
      break
    }
  }
  return someNums
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return sortNumsA(someWords)
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  let len = someWords.length
  let sorted = false

  for (let i = 0; i < len; i++) {
    sorted = false
    for (let j = 0; j < len; j++) {
      if (someWords[j].toLowerCase() < someWords[j + 1]) {
        swap(someWords, j, j + 1)
        sorted = true
      }
    }
    if (!sorted) {
      break
    }
  }
  return someWords
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  // let len = someProducts.length
  // let sorted = false

  // for (let i = 0; i < len; i++) {
  //   sorted = false
  //   for (let j = 0; j < len; j++) {
  //     let z = j + 1
  //     if (someProducts[j].name.toLowerCase() > someProducts[z].name.toLowerCase()) {
  //       swap(someProducts, j, j + 1)
  //       sorted = true
  //       console.log(someProducts[j], someProducts[j+1])
  //     }
  //   }
  //   if (!sorted) {
  //     break
  //   }
  // }
  // return someProducts
  return someProducts.sort((a,b)=>a.name.toLowerCase() - b.name.toLowerCase())
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  for (let i = 1; i < someProducts.length; i++){
    let current = someProducts[i].price;
    let j = i - 1;

    while (j >= 0 && someProducts[j].price > current){
        swap(someProducts, j, j+1)
        j--;
    }
} return someProducts
};

// sort products by price, descending order
const sortProductPriceD = () => {
  for (let i = 1; i < someProducts.length; i++){
    let current = someProducts[i].price;
    let j = i - 1;

    while (j >= 0 && someProducts[j].price < current){
        swap(someProducts, j, j+1)
        j--;
    }
} return someProducts
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  someProducts.sort((a,b)=>{
    if(a.price === b.price){
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    }
    return a.price - b.price
  })
  return someProducts
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  for (let i = 1; i < catArt.length; i++){
    let current = catArt[i].designedBy;
    let j = i - 1;

    while (j >= 0 && catArt[j].designedBy > current){
        swap(catArt, j, j+1)
        j--;
    }
} return catArt
};

// sort catArt by price
const catArtSortByPriceA = () => {
  for (let i = 1; i < catArt.length; i++){
    let current = catArt[i].price;
    let j = i - 1;

    while (j >= 0 && catArt[j].price > current){
        swap(catArt, j, j+1)
        j--;
    }
} return catArt
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
  let len = arr.length
  let sorted = false

  for (let i = 0; i < len; i++) {
    sorted = false
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        sorted = true
      }
    }
    if (!sorted) {
      break
    }
  }
  return arr
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
