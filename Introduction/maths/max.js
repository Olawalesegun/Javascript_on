function maxAr(input){
    let lengthOfInput = input.length;
    let swap = 0;
    let max, min = 0
    for(let count=0; count<lengthOfInput; count++){
        if(swap < input[count]){
            swap = input[count];
            max = swap;
        }
    }
    return max;
}


let newIntake = [1, 4, 6, 7];
let output = maxAr(newIntake);
console.log(output);

function minAr(input){
    let lengthOfInput = input.length;
    let swap = 0;
    let max, min = 0
    for(let count=0; count<lengthOfInput; count++){
        if(input[count] > swap){
            swap = input[count];
            max = swap;
        }
        else{
            min = swap;
        }
    }
    return min;
}

let newIntake2 = [1, 4, 6, 7];
let output2 = maxAr(newIntake);
console.log(output2);




function revArr(input){
    argLength = input.length
    console.log(argLength)
    let newCollector = [];
    let j = 0
    for(let i=argLength; i>=0; i--){
        newCollector[j] = input[i]
        j++
    }
    //newCollector = input
    input = newCollector
    return input
}

function sortAr(input){
    let arrLength = input.length;
    let collector = [];
    for(let count = arrLength; count<arrLength; count--){
        for(let count=0; count<arrLength; count++){
            if()
        }
    }
}

