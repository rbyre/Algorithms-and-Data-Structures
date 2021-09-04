// Selection Sort
// Similar to bubble sort, but first place smallest items in the sorted section
//
// Store first element as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be then new 'minimum' and continue until the end of the array.
// if the 'minimum' is not the value (index) you initially began with, swap the two values.
// repeat this with the next element until the array is sorted. 

function selectionSort(arr){
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
}
export default selectionSort;