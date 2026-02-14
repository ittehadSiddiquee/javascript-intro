function doubleIt (number){
    const doubled = number * 2 ;
    console.log(number,doubled);
}

console.log('i will call the fucntion');
doubleIt(15);
console.log('---------');
doubleIt(77);
console.log('-------');
doubleIt(334);
const number = 55 ;
doubleIt(number);
const money = 112;
doubleIt(money);

function difference (num1,num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'differnce is ',diff);
    
}

const fatherAge =  40 ;
const myAge = 10 ;
difference(fatherAge,myAge);