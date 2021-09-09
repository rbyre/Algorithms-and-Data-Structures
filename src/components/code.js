const code = {
    naivestringsearch: 
    `const NaiveStringSearch = (longString, shortString) => {
        let count = 0;
        for (let i = 0; i < longString.length; i++) {
            for (let j = 0; j < shortString.length; j++) {
                console.log(shortString[j], longString[i+j]);
                if (longString[i+j] !== shortString[j]) {
                    console.log('BREAK!');
                    break;
                }
                if (j === shortString.length - 1) {
                    console.log('FANT EIN!');
                    count++;
                }
            }
        }
        return count;
    }
    `,
    divideandconquer: 
    `search(array, val) {
        let min = 0;
        let max = array.length - 1;
    
        while (min <= max) {
            let middle = Math.floor((min+max) /2);
            let currentElement = array[middle];
    
            if(array[middle] < val) {
                min = middle + 1;
            }
            else if (array[middle] > val) {
                max = middle -1;
            }
            else {
                return middle;
            }
        }
    
        return -1;
    }`,
    selectionSort: 
    `function selectionSort(arr){
        const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
      
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i+1; j < arr.length; j++ ){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
            if(i !== min) swap(arr, i, min);
            
        }
        return arr;
      }`,
      insertionSort: `
      function insertionSort(arr){
        let j = 0;
        for (let i = 1; i < arr.length; i++) {
            let currentVal = arr[i];
            for (j=i-1; j>=0 && arr[j] > currentVal; j--) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = currentVal;
        }
        return arr;
    }`,
    mergeSort: `
    // merge 2 sorted arrays
const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results; 
}
// split an array into smaller arrays until only 1 or 0 item arrays(always sorted).
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
`,
quickSort:`function quickSort(arr, left = 0, right = arr.length -1) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    const pivot = (arr, start=0, end=arr.length - 1) => {
        let pivot = arr[start];
        let swapIdx = start;
        
        for (let i = start + 1; i <= end; i++) {
            if (pivot > arr[i]) {
                swapIdx++;
                swap(arr, swapIdx, i);          
            }
        }
        swap(arr, start, swapIdx)
        return swapIdx;
    }

    if(left < right) {

    let pivotIndex = pivot(arr, left, right)

    //left
    quickSort(arr, left, pivotIndex -1);

    //right
    quickSort(arr, pivotIndex +1, right);
    }
    return arr;
}`,
radixSort: `function radixSort (arr) {

    //getDigit function is working only for base ten numbers
    const getDigit = (num, pos) => {
        return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
    }

    const digitCount = (num) => {
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) +1;
    }

    const mostDigits = (nums) => {
        let maxDigits = 0;
        for (let i = 0; i < nums.length; i++) {
            maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        }
        return maxDigits;
    }

    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }

        arr = [].concat(...digitBuckets);
    }


    return arr;
}
export default radixSort;`,
}

export default code;