function revString(input){
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

arg = ['h', 'e', 'l', 'l', 'o']
revString(arg)
datap = revString(arg)
console.log(datap)

arg = ['H', 'a', 'n', 'n', 'a', 'h']
revString(arg)
datap = revString(arg)
console.log(datap)


