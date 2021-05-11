export let tribonacci = ( [a,b,c]:[number,number,number],n : number) : number[]=>{
    let initArray = [a,b,c]
    if (n == 0) return []
    if (n <=3) return initArray.slice(0,n)
    for (let i = 0 ; i < n-3; i++){
        initArray = [...initArray,initArray.slice(-3).reduce((a,b)=>a+b)]
    }
    return initArray
}

console.log(tribonacci([1, 1, 1], 10))