function selReverse(array, length) {
    if (length === 0) return array;
    let arr = [];
    for (let i = 0; i <array.length; i+=length){
        for (j = i+length-1; j>=i; j--){
            arr.push(array[j])
        }
    }
    return arr.filter(function(elem){return elem !== undefined;});
}