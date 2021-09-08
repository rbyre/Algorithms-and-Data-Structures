function radixSort (arr) {

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
export default radixSort;