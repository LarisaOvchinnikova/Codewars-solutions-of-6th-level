# Codewars-solutions-of-6th-level

* [x] [Mexican Wave](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029)
```javascript
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
```
* [x] [Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word](https://www.codewars.com/kata/57fb04649610ce369a0006b8)
```javascript
function remove(s){
    let a = s.split(' ');
    let word;
    let k1,k2, j;
    for (let i = 0; i <a.length; i++){
        k1=0; k2=0;
        j = 0;
        while (a[i][j] === '!'){
            k1++;
            j++
        }
        j=a[i].length-1;
        while  (a[i][j] === '!'){
            k2++;
            j--;
        }
        console.log(k1+' '+k2);
        if (k1 > k2) {
            word = a[i].slice(k1-k2,a[i].length);
            a[i] = word;
        } else
        if (k2 > k1){
            word = a[i].slice(0, a[i].length-(k2-k1));
            a[i] = word;
        }
    }
    return a.join(' ');
}
```

* [x] [Selective Array Reversing](https://www.codewars.com/kata/selective-array-reversing/train/javascript)
* [x] [Banker's Plan](https://www.codewars.com/kata/bankers-plan/train/javascript)
