// menghitung faktorial sebuah angka 
function Factorial(n){
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
}

console.log(Factorial(5))