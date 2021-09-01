const NaiveStringSearch = (longString, shortString) => {
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

export default NaiveStringSearch;