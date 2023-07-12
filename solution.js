const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

//sortFunction(a,b) is true if a precedes b in sorted order.
const mergeSort = (arrayIn, sortFunction) => {
  const merge = (bigLeft, smallRight) => {
    const mergeReturn = [];
    while (bigLeft.length && smallRight.length) {
      if (sortFunction(bigLeft[0], smallRight[0])) {
        mergeReturn.push(bigLeft.shift());
      } else {
        mergeReturn.push(smallRight.shift());
      }
    }
    return [...mergeReturn, ...bigLeft, ... smallRight];
  }
  // merge

  if (arrayIn.length <= 1) {
    return arrayIn;
  } else {
    const bigLeftMid = Math.floor(arrayIn.length / 2);
    const bigLeft = mergeSort(arrayIn.slice(0, bigLeftMid), sortFunction);
    const smallRight = mergeSort(arrayIn.slice(bigLeftMid), sortFunction);
    //return merge (mergeSort(bigLeft), mergeSort(smallRight));
    return merge (smallRight, bigLeft);
  }
}
// mergeSort

// sort numbers in ascending order
const sortNumsA = (arrayNum) => {
  const smallToLargeNum = (input1, input2) => {
    return input1 < input2
  }
  return mergeSort(arrayNum, smallToLargeNum)
};

// sort numbers in descending order
const sortNumsD = (arrayNum) => {
  const largeToSmallNum = (input1, input2) => {
    return input1 > input2
  }
  return mergeSort(arrayNum, largeToSmallNum)
};

// sort words in ascending order case sensitive
const sortWordsA = (arrayWord) => {
  const ascCase = (input1, input2) => {
    return input1 < input2
  }
  return mergeSort(arrayWord, ascCase)
};

// sort words in descending order case insensitive
const sortWordsD = (arrayWord) => {
  const descNoCase = (input1, input2) => {
    return input1.toLowerCase() > input2.toLowerCase()
  }
  return mergeSort(arrayWord, descNoCase)
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arrayProduct) => {
  const ascNameNoCase = (input1, input2) => {
    return input1.name.toLowerCase() < input2.name.toLowerCase()
  }
  return mergeSort(arrayProduct, ascNameNoCase)
};

// sort products by price, ascending order
const sortProductPriceA = (arrayProduct) => {
  const ascPrice = (input1, input2) => {
    return input1.price < input2.price
  }
  return mergeSort(arrayProduct, ascPrice)
};

// sort products by price, descending order
const sortProductPriceD = (arrayProduct) => {
  const descPrice = (input1, input2) => {
    return input1.price > input2.price
  }
  return mergeSort(arrayProduct, descPrice)
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arrayProduct) => {
  const ascPriceName = (input1, input2) => {
    if (input1.price < input2.price) {
      return true;
    } else if (input1.price === input2.price && input1.name < input2.name) {
      return true;
    }
    return false;
  }
  return mergeSort(arrayProduct, ascPriceName)
};

// sort catArt by designed by
const catArtSortDesginedByA = (arrayCatArt) => {
  const catArtSortDesignBy = (input1, input2) => {
    return input1.designedBy < input2.designedBy
  }
  return mergeSort(arrayCatArt, catArtSortDesignBy)
};

// sort catArt by price
const catArtSortByPriceA = (arrayCatArt) => {
  const ascPrice = (input1, input2) => {

    const convert = (inputX) => {
      if (typeof(inputX) === "string" && inputX.includes("♇♇")) {
          
        return parseInt(inputX.slice(2)) * 10;
        
      } else {
          return parseInt(inputX);  
      }
    }
    return convert(input1.price) < convert(input2.price)
  }
  return mergeSort(arrayCatArt, ascPrice)
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arrayIn) => {
  const sortByNumOrString = (input1, input2) => {
    if (typeof(input1) === "number") {
      return Number(input1) < Number(input2)
    } else if (typeof(input1) === "string") {
      return input1 < input2
    }
  }
  return mergeSort(arrayIn, sortByNumOrString);
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
