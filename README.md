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
```javascript
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
```
* [x] [Banker's Plan](https://www.codewars.com/kata/bankers-plan/train/javascript)
```javascript
function fortune(f0, p, c0, n, i) {
    let f = f0;
    let c = c0;
    for(let k = 1; k < n; k++){
        f = Math.trunc(f + f * p/100 - c);
        c = Math.trunc(c + c * i/100);
     }
    return (f >= 0);
}
```
* [x] [Three added Characters](https://www.codewars.com/kata/three-added-characters/train/javascript)
```javascript
function addedChar(s1, s2){
  let a1 = s1.split('').sort();
  let a2 = s2.split('').sort();
  for(let i = 0; i < a2.length; i++){
    if(a2[i] !== a1[i]) return a2[i];
  }
}
```
* [x] [Dashatize it](https://www.codewars.com/kata/dashatize-it/train/javascript)
```javascript
function dashatize(num) {
  let str = num.toString();
  str = str.replace(/^-/,'');
  let res = '';
  for (let i = 0; i < str.length; i++){
    if (+str[i] % 2 === 1) res = res + '-'+ str[i] + '-';
    else res = res + str[i];
  }
  res = res.replace(/-+/g,'-');
  return res.replace(/-$/,'').replace(/^-/,'');
}
```
* [x] [Consecutive strings](https://www.codewars.com/kata/consecutive-strings/train/javascript)
> You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
```javascript
function longestConsec(arr, k) {
  let max = 0;
  let sub, t;
  let z = '';
  for (let i = 0;  i <= arr.length-k; i++){
    sub = '';
    for (let j = i; j < i+k; j++){
      sub= sub + arr[j];
      t = sub.length;
    }
   if (t > max) { max = t; z = sub;}
  }
  return z;
}
```
* [x] [Replacement](https://www.codewars.com/kata/replacement/train/javascript)
```javascript
function replacement(a){
  a = a.sort((a,b)=>a-b);
  if (a[a.length -1 ] !== 1) a[a.length - 1 ] = 1;
  else a[a.length -1 ] ++;
  return a.sort((a,b)=>a-b);
}
```
* [x] [Find Numbers with Same Amount of Divisors](https://www.codewars.com/kata/55f1614853ddee8bd4000014)
```javascript
function countDiv(n){
  let k = 2; if (n<=2) return k;
  for (let i=2; i <= n/2; i++){
    if (n % i === 0) k++;
  }
  return k;
}

function countPairsInt(diff, nMax) {
  let n = 0; let j;
 for (let i = 2; i < nMax - diff; i++){
   j = i + diff;
   if (countDiv(i) === countDiv(j)) {
       n++;
   }
 }
  return n;
}
```
* [x] [Highest Rank Number in an Array](https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004)

```javascript
function highestRank(arr){
 let obj = {};
 for (let i = 0; i< arr.length; i++){
   if (obj[arr[i]]) obj[arr[i]]++;
   else obj[arr[i]] = 1;
 } 
 let max = 0;
 let ar = [];
 for (let i in obj){
   if (obj[i] > max) {max = obj[i];}
 }
 for (let i in obj){
   if ( obj[i] === max) ar.push(+i);
 }
 return Math.max(...ar)
}
```
* [x] [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c);
```javascript
function duplicateEncode(word){
 word = word.toLowerCase();
 let res = '';
  for (let i = 0; i<word.length; i++){
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i]))
      res +='(';
    else res +=')';
  }
  return res;
}
```
* [x] [Playing on a chessboard](https://www.codewars.com/kata/playing-on-a-chessboard/train/javascript)
```javascript
function game(n){
  let res =[];
  let s = 0;
  for (let i = 1; i<=n; i++){
    s = s + (i-1)+0.5;
   }
  if (Math.trunc(s) === s) res.push(s);
  else {s *=2; res.push(s,2);}
  return res;
}
```
* [x] [PI approximation](https://www.codewars.com/kata/550527b108b86f700000073f)
```javascript
function iterPi(epsilon) {
  let pi = 0; let a = 1; let sign = 1;
  let k =0;
  let q = Math.PI;
  while (Math.abs(q - pi * 4) > epsilon) {
   pi = pi + sign * 1/a;
   a+=2;
   sign = sign* (-1);
   k++;
  }
  return [k, +(pi*4).toFixed(10)];
}
```
* [x] [Complete the table pattern](https://www.codewars.com/kata/5827e2efc983ca6f230000e0)
```javascript
function emp(r){
 let s = '+';
 for (let i = 0; i < r; i++){
   s = s + '---+';
 }
 return s+'\n';
}
function pattern(rows,columns,str){
  let s = ''; let r = '|'; let z = 0;
  let leng = str.length;
  str = str + ' '.repeat(rows*columns-leng);
  s = s + emp(columns);
  for (i = 0; i < rows; i++){
   for (j = 0; j < columns; j++){
     r = r + ' ' + str[z] + ' ' + '|';
     z++;
   }
   r = r +'\n';
   s = s + r + emp(columns);
   r='|';
  }
  s = s.slice(0,s.length-1);
  return s;
}
```
* [x] [Numericals of a String](https://www.codewars.com/kata/5b4070144d7d8bbfe7000001)
```javascript
function numericals(s){
  let obj = {};
  let res = '';
  for (let i = 0; i < s.length; i++){
     if (obj[s[i]]) obj[s[i]]++; 
     else obj[s[i]] = 1;
    res = res + obj[s[i]];
  } 
return res; 
}
```
* [x] [Steps in Primes](https://www.codewars.com/kata/5613d06cee1e7da6d5000055)
```javascript
function isPrime(x){
if (x === 1) return false;
 for (let i=2; i<=x/2; i++){
  if (x % i === 0) return false;
 }
 return true;
}
function step(g, m, n) {
  for (let i = m; i<=n-g; i++){
    if (isPrime(i) && isPrime(i+g)) return [i,i+g]
    
  }
  return null;
}
```
* [x] [Quick (n choose k) calculator](https://www.codewars.com/kata/55b22ef242ad87345c0000b2)
```javascript
function fact(b,n){
if (n === 0) return 1;
 let p = 1;
 for (let i = b; i<=n; i++){
   p = p * i;
 }
 return p;
}
function choose(n,k){
console.log(n,k);
if (k > n) return 0;
  return Math.round(fact(n-k+1,n)/fact(1,k));
}
```
* [x] [Unique In Order](https://www.codewars.com/kata/unique-in-order/train/javascript)
```javascript
var uniqueInOrder=function(str){
  let res = [];
  if (str === '') return [];
  else res.push(str[0]);
  for (let i = 1; i < str.length; i++){
    if (str[i] !== str[i-1]) res.push(str[i]);
  }
  return res;
}
```
* [x] [Pyramid Array](https://www.codewars.com/kata/515f51d438015969f7000013)
```javascript
function pyramid(n) {
  let res = [];  let s = [];
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
      s.push(1);
    }
   res.push(s);
   s=[];
  }
  return res;
}
```
* [x] [Equal Sides Of An Array](https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript)
```javascript
function findEvenIndex(arr){
  let s1 = 0; let s2 = 0;
  for (let i = 0; i < arr.length; i++){
    s1 = 0; s2 = 0;
    for (let j = 0; j < i; j++){
      s1 = s1 + arr[j]
    }
    for (let j = i+1; j < arr.length; j++){
      s2 = s2 + arr[j]
    }
    if (s1 === s2) return i;
  }
  return -1;
}
```
* [x] [Your order, please](https://www.codewars.com/kata/your-order-please/train/javascript)
```javascript
function order(words){
if (words === '') return '';
  let str = words.split(' ');
  let arr = Array(str.length).fill(0);
  for (let i = 0; i < str.length; i++){
    let temp = str[i];
    let digit = +temp.replace(/\D/g,'');
    arr[digit-1] = temp;
  }
  return arr.join(' ');
}
```
* [x] [Delete occurrences of an element if it occurs more than n times](https://www.codewars.com/kata/554ca54ffa7d91b236000023)
```javascript
function deleteNth(arr,n){
 let obj = {};
 for (let i = 0; i < arr.length; i++){
   if (obj[arr[i]]) {obj[arr[i]]++; if (obj[arr[i]]>n) arr[i] = '*';}
   else obj[arr[i]] = 1;
 }
  return arr.filter(elem => elem !== '*');
}
```
* [x] [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009)
```javascript
function array_diff(a, b) {
  return a.filter(elem => !b.includes(elem));
}
```

* [x] [Are they the "same"?](https://www.codewars.com/kata/550498447451fbbd7600041c)
```javascript
function comp(arr1, arr2){
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  arr1 = arr1.sort((a,b) => a-b);
  arr2 = arr2.sort((a,b) => a-b);
  for (let i = 0; i <arr1.length; i++){
    if (arr1[i]*arr1[i] !== arr2[i]) return false;
  }
  return true;
}
```
* [x] [Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)
```javascript
function isValidWalk(walk) {
if (walk.length !== 10) return false;
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;
  for (let i = 0; i < walk.length; i++){
    if (walk[i] === 'n') n++;
    if (walk[i] === 's') s++;
    if (walk[i] === 'e') e++;
    if (walk[i] === 'w') w++;
  }
  if (n === s && e === w) return true; else return false;
}
```
* [x] [Dubstep](https://www.codewars.com/kata/551dc350bf4e526099000ae5)
```javascript
function songDecoder(song){
  let res = song.replace(/WUB/g,' ').replace(/ {2,10}/g,' ').replace(/^ +/,'').replace(/ +$/,'');
  return res;
}
```

* [x] [Dubstep - 2](https://www.codewars.com/kata/551dc350bf4e526099000ae5)
```javascript
function songDecoder(song){
  let res = song.replace(/(WUB)+/g,' ').trim();
  return res;
}
```
* [x] [Tribonacci Sequence](https://www.codewars.com/kata/556deca17c58da83c00002db)
```javascript
function tribonacci(s,n){
  let res = [];
  if (n === 0) return [];
  if (n === 1) {res.push(s[0]); return res;}
  if (n === 2) {res.push(s[0],s[1]); return res;}
  res.push(s[0],s[1],s[2]);
  for (let i = 3; i < n; i++){
    let z = res[i-1] + res[i-2] + res [i-3];
    res.push(z);
  }
   return res;
}
```
* [x] [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272)
```javascript
function high(x){
 let arr = x.split(' ');
 let max = 0; let k; let s;
 for (let i = 0; i < arr.length; i++){
   s =0;
   for (let j = 0; j < arr[i].length; j++){
     s = s + (arr[i].charCodeAt(j)-96);
   }
   if (s > max) {max = s; k = i; }
 } 
  return arr[k]? arr[k] : '';
}
```
* [x] [Simple Encryption #1 - Alternating Split](https://www.codewars.com/kata/57814d79a56c88e3e0000786)
```javascript
function encrypt(str, n) {
  let s = '';
  if (str === null) return null;
  for (let j = 0; j < n; j++){
    for (let i = 1; i < str.length; i+=2){
     s = s + str[i];
    }
   for (let i = 0; i < str.length; i+=2){
    s = s + str[i];
   } 
  str = s; s = '';
  }
 return str;
}

function decrypt(str, n) {
if (str === null) return null;
 let l = str.length/2;
 let s ='';
 let s1 = str.slice(0, l);
 let s2 = str.slice(l, str.length); 
 if (l % 1 !== 0) s1 = s1 +' ';
 for (let j = 0; j < n; j++){
   for (let i = 0; i < l; i++){
      s = s + s2[i] + s1[i];
   }
   str = s; s ='';
   s1 = str.slice(0, l);
   s2 = str.slice(l, str.length);
      if (l % 1 !== 0) s1 = s1 +' ';
 }   
 return str.trim();
}
```

* [x] [Moving Zeros To The End](https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript)
```
//1 way:
var moveZeros = function (arr) {
 let temp;
 let fl;
 do { 
     fl = 0;
     for (let i = 0; i < arr.length-1; i++){
        if (arr[i] === 0) {
          temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          fl = 1;
        } 
     }
 } while (fl !== 0);
  return arr;
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
```
```
//2 way
var moveZeros = function (arr) {
 let res = [];
 for (let i = 0; i < arr.length; i++){
   if (arr[i] !== 0) res.push(arr[i]);
 } 
 let n = arr.length - res.length;
 for (let i = 0; i < n; i++){
   res.push(0);
 } 
 return res;
} 
```
* [x] [Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!](https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka/train/javascript)
```javascript
function sumOfPow(n){
  let str = n.toString();
  let s = 0;
  for (let i = 0; i < str.length; i++){
    s = s + Math.pow(+str[i], i+1);
  }
  return s;
}

function sumDigPow(a, b) {
  let res = [];
  for (let x = a; x <= b; x++){
    if (sumOfPow(x) === x) res.push(x);
  }
  return res;
}
```
* [x] [Permute a Palindrome](https://www.codewars.com/kata/58ae6ae22c3aaafc58000079)
```javascript
function permuteAPalindrome (input) { 
 let obj = {};
 for (let l of input) {
  obj[l] ? delete obj[l] : obj[l] = 1;
 } 
 return Object.keys(obj).length <= 1;
}
```
* [x] [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048) 
```javascript
function isPangram(str){
  let obj = {};
  str = str.toLowerCase().replace(/[^a-z]/g,'');
  for (let i of str){
    obj[i] = obj[i] ? obj[i]++ : 1;
  };
  for (let i in obj){
    if (obj[i] > 1) return false;
  };
  return Object.keys(obj).length === 26;
}
```
* [x] [CamelCase Method](https://www.codewars.com/kata/587731fda577b3d1b0001196)
```javascript
String.prototype.camelCase=function(){
  return this.trim().split(' ').map(el=> el===''? '' : el[0].toUpperCase() + el.slice(1)).join('');
}
```
* [x] [Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003)
```javascript
function toCamelCase(str){
  return (str === '')? '' : str.split(/[^a-zA-Z]/g).map((el, i) => (i>0)? el[0].toUpperCase()+el.slice(1): el).join('');
}
```
* [x] [Converting Measures](https://www.codewars.com/kata/5acfab8d23c81836c90000eb)
```javascript
function convertRecipe(recipe){
 let tbsp = 15, tsp = 5;
 let num;
 let arr = recipe.split(' ');
 for (let i = 1; i < arr.length; i++){
    if (arr[i-1].includes('/')) {
      let ch = +(arr[i-1].split('/')[0]); 
      let zn = +(arr[i-1].split('/')[1]); 
      num = ch/zn;
    } else num = +arr[i-1] 
    if (arr[i] === 'tbsp') {
      arr[i] = `${arr[i]} (${Math.ceil(num * tbsp)}g)`;
    }
    if (arr[i] === 'tsp') {
      arr[i] = `${arr[i]} (${Math.ceil(num * tsp)}g)`;
    }  
 }
return arr.join(' ');
}
```
* [x] [Maximum subarray sum](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c)
```javascript
//5 kyu
var maxSequence = function(arr){
  if (arr.every(el => el<=0)) return 0;
  if (arr.length === 0) return 0;
  let max = -Infinity;
  for (let i = 0; i <= arr.length - 1; i++){
    for (let j = i+1; j <= arr.length; j++){
      let temp = arr.slice(i,j).reduce((a,b) => a+b, 0);
      if (temp > max) max =  temp;
    }
  }
  return max;
}
```

* [x] [Drunk friend](https://www.codewars.com/kata/558ffec0f0584f24250000a0)
```javascript
function decode(str) {
  if (typeof str !== 'string') return 'Input is not a string';
  const dict = 'abcdefghijklmnopqrstuvwxyz';
  const decode = dict.split('').reverse().join('');
  let out = '';
  for (let i = 0; i < str.length; i++) {
    if (!dict.includes(str[i]) && !dict.includes(str[i].toLowerCase())) { out +=str[i]; }
     else {
       if (str[i] === str[i].toUpperCase()) {
         let ind = dict.indexOf(str[i].toLowerCase());
         out +=decode[ind].toUpperCase();
       } else {
           let ind = dict.indexOf(str[i]);
           out +=decode[ind];
         }
     }  
  }
  return out;
}
```

* [x] [Simple Fun #258: Is Divisible By 6](https://www.codewars.com/kata/5911385598dcd432ae000004)
```javascript
function isDivisibleBy6(s) {
  let num = 0;
  let out = []; 
  for (let i = 0; i < 10; i++) {
    num = s.valueOf().replace('*', i);
    if (num.split('').map(el => +el).reduce((a, b) => a+b) % 3 === 0 && num[num.length-1] % 2 === 0) 
      out.push(num);
  }
  return out;
}
```
* [x] [Valid Parentheses](https://www.codewars.com/kata/52774a314c2333f0a7000688)
```javascript
function validParentheses(str){
  let open = 0;
  let close = 0;
  for (let i = 0; i < str.length ; i++){
   if (str[i] === '(' ) open++;
   if (str[i] === ')' ) close ++;
   if (close > open) return false;
  }
  return (close === open);
}

```
* [x] [TV channels](https://www.codewars.com/kata/5836dce6966f8d1d43000007)
```javascript
function redarr(arr) {
let obj = {};
 let res = arr.sort().filter((el,i)=>i === arr.indexOf(el));
 for (let i = 0; i < res.length; i++){
   obj[i] = res[i];
 }
 return obj;
}
//2 case
function redarr(arr) {
 let obj = {};
 arr.sort().filter((el,i)=>i === arr.indexOf(el)).map((el, i) => obj[i] = el);
 return obj;
}
```