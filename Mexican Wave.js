function wave(str){
    let res = [];
    for (let i = 0; i<str.length; i++){
        let n = str[i];
        if (n === ' ') continue;
        let s = n.toUpperCase();
        let z = str.slice(0,i) + s + str.slice(i+1, str.length);
        res.push(z);
    }
    return res;
}

let str = 'Hello hello';
console.log(wave(str));