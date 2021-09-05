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
}

export default code;