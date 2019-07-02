const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];


let makeAllCaps = (firstInput) => {
    return new Promise((resolve, reject) => {    
        resolve(firstInput.map(firstInput => firstInput.toUpperCase()))
    })
}

let sortWords = (allCaps) => {
    return new Promise((resolve, reject) => {    
        resolve(allCaps.sort())
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log('Ada error!! : ', error))
