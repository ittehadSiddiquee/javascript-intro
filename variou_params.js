function evenSizedString(str){
    const length = str.length
    console.log(str,size);
    if(size % 2 ===0){
        console.log('even size');
    }
    else{
        console.log('odd size');
        return false;
    }
}
// evenSizedString('Dhaka');
// evenSizedString('faka');

function doubleorTriple(number, doDouble){
    if(doDouble){
        const result = number * 2
        return result;
    }
    else{
        const result = number * 3;
        return result ;
    }
}
console.log(doubleorTriple(5,true));
console.log(doubleorTriple(5,false));

function numberofElements(numbers){
    const len = numbers.length;
    return len;
}
numbersofElements([12,34,78,56,233444,4,5])

function getAge(person){
    const age = person.age;
    return age;
}