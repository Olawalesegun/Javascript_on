function revString2(input){
    lengthOfString = input.length
    let swap = 0
    index_value = 0
    for(let i=lengthOfString; i>=lengthOfString; i--){
        swap = input[i]
        input[index_value] = swap
    }
    return input
}


arg = ['h', 'e', 'l', 'l', 'o']
revString2(arg)
datap = revString2(arg)
console.log(datap)