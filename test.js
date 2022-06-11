function MathChallenge(num) { 

    // code goes here
    var numberArray = num.toString().split('').map((e) => parseInt(e))

    if(numberArray.length == 1){
        return -1
    }

    // console.log(numberArray.length)

    var i = 0

    for (var i = numberArray.length - 1; i >= 0 ; i--){
      if (numberArray[i] > numberArray[i -1]){
        // let temp = numberArray[i]
        // numberArray[i] = numberArray[i - 1]
        // numberArray[i - 1] = temp
        break
      }
    }

    if(i == 0){
        return - 1
    }

    var j 

    for(j = numberArray.length - 1; j>= i; j--){
        if(numberArray[i - 1] < numberArray[j]){
            let temp = numberArray[i-1]
            numberArray[i-1] = numberArray[j]
            numberArray[j] = temp
            break
        }
    }

    newArray = numberArray.slice(i, numberArray.length)

    for (let i = 0; i < newArray.length; i++){
        for(let j = 0; j < newArray.length; j++){
            if(newArray[j] > newArray[j + 1]){
                let temp = newArray[j]
                newArray[j] = newArray[j+1]
                newArray[j+1] = temp
            }
        }
    }

    console.log(newArray)

    numberArray = numberArray.slice(0, i)
    numberArray = numberArray.concat(newArray)

    return parseInt(numberArray.map(e => e.toString()).join('')); 
  
}
  console.log(MathChallenge(41352))