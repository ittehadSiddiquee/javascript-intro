// //objective: write a function to give me the sum of all numbers in an array
// step 1 : declare a function
// step 2 : call check whether the function is called properly
// step 3: set a parameter(s)
// step 4 : pass the parameter check whether parameter is passed in a proper format



function sumOfNumbers(numbers){
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
        return sum;
    }
return 5 ;
}

const nums = [43,545,433,3]
const sum = sumOfNumbers(numbers);
console.log('sum of numbers is',sum);
