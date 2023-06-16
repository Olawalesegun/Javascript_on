function div(firstVariable, secondVariable){
    let result = 0;
    if(firstVariable > secondVariable){
        result = firstVariable/secondVariable;
    }
    else{
        result = secondVariable/firstVariable;
    }
    return result;
}

console.log(div(2, 3))
console.log(div(4, 2))
console.log(div(3, 6))
