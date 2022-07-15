// menghitung rata2
let myArr = [1,4,3,20]
const countMean = (array,mean) => {
    let total = 0;
    for(i = 0; i < array.length; i++){
        total += array[i];       
    }
    mean = total / array.length
    return mean ;
} 
console.log(countMean(myArr))