//let strs = ["alic3", "4", "bob", "3", "000000"]
function max_value(strs){
    let max_length =0;
    let max_value;
    for(let counter = 0; counter<strs.length; counter++){
        //for(let counter2 = 0; counter2<strs[counter].length; counter2++){
        if(strs[counter].match(/{0-9}/ && /[a-z]/)){
        max_length = strs[counter].length
        return max_length
        }
        else{
            if(strs.length < Number(strs[counter])){
            max_value = Number(strs[counter])
            return max_value
        }
                    // if(strs[counter][counter] > strs[counter][counter -1])
                    // max_value = strs[counter][counter2]
                    // return max_length
        //        }
           
           
        }
        
    }
}
let strs = ["alic3", "4", "bob", "3", "000000"]
console.log(max_value(strs))
let strs2 = ["01", "001", "1", "0001",]
console.log(max_value(strs2))