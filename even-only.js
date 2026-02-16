// function evenNumbersOnly(numbers){
//     console.log(numbers)
//     // for(const number of numbers){
//     // console.log(number);
//     // }
        
// }

function evenNumbersOnly(numbers){
    const evens = []
for(const number of numbers){
    if(number % 2 ===0){
        console.log(number);
        evens.push(number);
       
    }
     return evens;
}
}
    

const numbers = [5,3,54,5,3,4];
evenNumbersOnly(numbers);
console.log('even numbers are',evens)

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number
        }
    }
}
const sum = sumOfEvenNumbers(numbers);

console.log('sum of the even numbers is',sum)