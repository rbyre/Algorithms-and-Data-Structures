const code = {
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
}

export default code;