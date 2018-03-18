function merge (leftArray, rightArray, arr) {

    var Left = leftArray.length,
    Right = rightArray.length,
    a = 0, b = 0, c = 0;
    
    while(a < Left && b < Right) {
    if(leftArray[a] <= rightArray[b]) {
    arr[c] = leftArray[a]; 
    a++;
    }
    else {
    arr[c] = rightArray[b];
    b++;
    }
    c++;
    }
    while(a < Left) {
    arr[c] = leftArray[a];
    a++;
    c++;
    }
    while(b < Right) {
    arr[c] = rightArray[b];
    b++;
    c++;
    }
    }
    
    function mergeSort (arr) {
    if (arr.length < 2) return arr;
    else {
    var p = 0,
    r = arr.length - 1;
    var mid = (p+r)/2|0;
    
    var left = arr.slice(0,mid+1),
    right = arr.slice(mid+1,arr.length);
    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr);
    }
    return arr;
    }
    
    console.log(mergeSort([18, 7, 9, 11, 27, 14, 33, 12, 8]));
    