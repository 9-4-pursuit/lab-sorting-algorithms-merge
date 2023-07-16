/**
 * Bubble Sort: Repeatedly compares adjacent elements and swaps them if they are in the wrong order. It has a time complexity of O(n^2) in the worst and average cases.
 * Selection Sort: Divides the array into sorted and unsorted portions, repeatedly selects the minimum element from the unsorted portion, and places it in the sorted portion. It also has a time complexity of O(n^2) in the worst and average cases.
 * Insertion Sort: Builds the final sorted array one item at a time by inserting each element into its correct position within the sorted portion of the array. Its time complexity is O(n^2) in the worst and average cases, but it performs well on small or nearly sorted arrays.
 * Merge Sort: Divides the array into smaller subarrays, recursively sorts them, and then merges them back together in a sorted manner. It has a time complexity of O(n log n) in all cases, making it efficient for large datasets.
 * Quick Sort: Selects a pivot element, partitions the array into two subarrays (elements smaller than the pivot and elements larger than the pivot), and recursively sorts the subarrays. Its time complexity is O(n log n) in the average case, but it can degrade to O(n^2) in the worst case.
 * Heap Sort: Builds a binary heap from the array and repeatedly extracts the maximum element from the heap, resulting in a sorted array. It has a time complexity of O(n log n) in all cases.
 * Radix Sort: Sorts elements by grouping them based on individual digits or bits, starting from the least significant to the most significant. Its time complexity varies depending on the radix and the number of digits/bits.
*/

class sortMethods{

  //to have the sorting methods reusable in any order condition
  static orderCondition(param1, param2, order) {
    return order === "asc" // ascending order
    ? param1 < param2
    : order === "des" // descending order
    ? param1 > param2
    : order === "ascIns" // ascending order case insensitive
    ? param1.toLowerCase() < param2.toLowerCase()
    : order === "desIns" // descending order case insensitive
    ? param1.toLowerCase() > param2.toLowerCase()
    : null;
  }

  // Bubble Sort Algorithm
  // Big O Complexity: Time: O(n^2) & Space O(1)
  //it compares adjacent elements to see if they're in order
  //if not, those elements are switched
  //and it continues until all elements are in order
  static bubble(arr, order) {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (this.orderCondition(arr[i+1], arr[i], order)) {
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
          sorted = false;
        }
      }
    }
    return arr;
  }

  // Selection Sort Algorithm
  // Big O Complexity: Time: O(n^2) & Space O(1)
  //in-place comparison sorting algorithm
  //it keeps track of the minimum value during each iteration
  //at the end, swap variables with the first element of the loop
  static selection(arr, order) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (this.orderCondition(arr[j].name, arr[min].name, order)) {
          min = j;
        }
      }
      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
    return arr;
  }

  // Insertion Sort Algorithm
  // Big O Complexity: Time: O(n^2) & Space O(1)
  //it sorts a list by repeatedly inserting an unsorted element
  //into the correct position in a sorted sublist
  static insertion(arr, callback) {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && callback(arr[j], arr[j-1])) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        j--;
      }
    }
    return arr;
  }

  // Merge Sort Algorithm
  // Big O Complexity: Time: O(log n) & O(n) (additional space for merging)
  //Divide and Conquer Algorithm (Divide, Conquer, and Combine)
  //it divides the array into two halves, sort each half,
  //and then merge the sorted halves back together.
  static merge(param) {
    function mergeSort(arr) {
      if (arr.length <= 1) return arr;
      let mid = Math.floor(arr.length / 2);
      let left = mergeSort(arr.slice(0, mid));
      let right = mergeSort(arr.slice(mid));
      return mergeLeftRight(left, right);
    }

    function mergeLeftRight(left, right) {
      let sortedArr = [];
      while(left.length && right.length) {
        sortedArr.push(left[0].designedBy <= right[0].designedBy ? left.shift() : right.shift());
      }
      return [...sortedArr, ...left, ...right];
    }

    return mergeSort(param);
  }

  // Quick Sort Algorithm (in-place)
  // Time Complexity:
    // Worst Case: O(n^2)
    // Average Case: O(n log n)
  // Space Complexity:
    // Worst Case: O(n) (due to recursive calls on a skewed partition)
    // Average Case: O(log n) (due to recursive calls on balanced partitions)
  //Divide and Conquer Algorithm (Divide, Conquer, and Combine)
  //it creates two empty arrays to hold elements less than, and greater than the pivot value,
  //and then recursively sort the sub arrays
  static quick(param) {
    function quickSort(arr, start = 0, end = arr.length - 1) {
      if (start < end) {
        const pivot = partition(arr, start, end);
        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end);
      }
      return arr;
    }
    
    function partition(arr, start, end) {
      const pivot = arr[end];
      let i = start;
      for (let j = start; j < end; j++) {
        const indexJPrice = updatePrice(arr[j].price);
        const pivotPrice = updatePrice(pivot.price);        
        if (indexJPrice <= pivotPrice) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
        }
      }
      [arr[i], arr[end]] = [arr[end], arr[i]];
      return i;
    }

    function updatePrice(price) {
      if (typeof price === 'string' && price.includes('♇♇')) {
        return parseInt(price.slice(2) * 10);
      } else {
        return parseInt(price);
      }
    }

    return quickSort(param);
  }
}


module.exports = { sortMethods };