function div(firstVariable, secondVariable){
    let result = 0;
    if(firstVariable > secondVariable){
        result = firstVariable/secondVariable;
    }
    else{
        secondVariable/firstVariable;
    }
    return result;
}

console.log(div(2, 3))
