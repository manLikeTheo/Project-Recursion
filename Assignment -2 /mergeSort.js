function merge(array1, array2) {
    let m  = array1.length;
    let n = array2.length;
    const mergedArray = [];

    //index for array traversal
    let i  = 0; let j = 0;

    while(i < m && j < n) {
        // If element in array1 is less than element in array2; add the element in array1 to new array - mergedArray
        if(array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++; //move to next index;
        } else {
            //else add element in array2 to new array - mergedArray
            mergedArray.push(array2[j]);
            j++; // move to next index
        }
    }

    while(i < m) {
        mergedArray.push(array1[i]);
        i++;
        // console.log(mergedArray);
    }

    while(j < n) {
        mergedArray.push(array2[j]);
        j++;
        // console.log(mergedArray);
    }

    return mergedArray;
}

function mergeSort(array) {
    if(array.length === 0) return "Array is empty!";
    if(array.length === 1) return array;

    const mid = array.length / 2;
    const startArr = array.slice(0, mid);
    const endArr = array.slice(mid, array.length);

    //merge left and right array;
    return merge(mergeSort(startArr), mergeSort(endArr));
}

console.log(mergeSort([2,6,3,5,11,9,18])); // [2,3,5,6,9,11,18 ]