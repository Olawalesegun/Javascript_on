function subtr(firstVariable, secondVariable){
    let result = 0;
    if(firstVariable<secondVariable){
        result = secondVariable - firstVariable;
    }
    else{
        result = firstVariable - secondVariable;
    }
    return result;
}

console.log(subtr(30, 10))
console.log(subtr(41, 47))