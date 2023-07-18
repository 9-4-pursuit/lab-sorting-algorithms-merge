const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
let sorted = false
while (!sorted){
  sorted = true
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]) {
      sorted = false;
      [arr[i], arr[i +1]] = [arr[i+1], arr[i]]
    }
  }
} return arr
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  let sorted = false
  while (!sorted){
    sorted = true
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < arr[i+1]) {
        sorted = false;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }
  } return arr
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
 let sorted = false
 while(!sorted){
  sorted = true
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
      sorted = false;
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
  }
 } return arr
};

// sort words in descending order case insensitive

const sortWordsD = (arr) => {
  //insertionSort
for (let i = 1; i < arr.length; i++){
  let current = arr[i]
  let j = i -1
  while(j >=0 && current.toLowerCase() > arr[j].toLowerCase()){
    arr[j+1] = arr[j]
    j--
  }arr[j+1] = current
} return arr

//or
  // let sorted = false
  // while(!sorted){
  //   sorted = true
  //   for(let i =0; i < arr.length-1; i++){
  //     if (arr[i].toLowerCase() < arr[i+1].toLowerCase()){
  //       sorted = false;
  //       [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
  //     }
  //   }
  // } return arr
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let current = arr[i]
    let j = i -1
    while(j >=0 && current.name.toLowerCase() < arr[j].name.toLowerCase()){
      arr[j+1] = arr[j]
      j--
    }arr[j+1] = current
  } return arr
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let current = arr[i]
    let j = i -1
    while(j >=0 && current.price < arr[j].price){
      arr[j+1] = arr[j]
      j--
    }arr[j+1] = current
  } return arr
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let current = arr[i]
    let j = i -1
    while(j >=0 && current.price > arr[j].price){
      arr[j+1] = arr[j]
      j--
    }arr[j+1] = current
  } return arr
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  sortProductPriceA(sortProductNamesA(arr))
  
  return arr

};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  for 
  (let i = 1; i < arr.length; i++) {
      let current = arr[i]
      let j = i - 1
      while(j >= 0 && current.designedBy < arr[j].designedBy){
          arr[j+1] = arr[j]
          j--
      }
      arr[j+1] = current
  }
  return arr
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {

  for (let i = 1; i < arr.length; i++) {
      let current = arr[i]
      let j = i - 1
      while(j >= 0 && current.price > arr[j].price){
          arr[j+1] = arr[j]
          j--
      }
      arr[j+1] = current
  }
  return arr


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
  //bubble sort
 let sorted = false
 while (!sorted) {
  sorted = true
  for (let i = 0; i<arr.length; i++){
    if (arr[i] > arr[i+1]){
      sorted = false
      const temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
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
