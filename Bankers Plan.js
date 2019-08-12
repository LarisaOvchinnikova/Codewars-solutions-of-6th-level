function fortune(f0, p, c0, n, i) {
    let f = f0;
    let c = c0;
    for(let k = 1; k < n; k++){
        f = Math.trunc(f + f * p/100 - c);
        c = Math.trunc(c + c * i/100);
     }
    return (f >= 0);
}