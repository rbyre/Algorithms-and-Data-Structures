const BSearch = (arr, element) => {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start+end)/2);

    while(middle !== element && start <= end) {
        if(element < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start+end)/2);
    }

    return arr[middle] === element ? middle : -1;


}
export default BSearch;