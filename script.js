const testNum = (num) => {
    return new Promise((success, reject) => {
        if (num < 10) {
            success("Yay! Success!");
        } else {
            reject("Bummer! No Luck this time!");
        }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
testNum(9);
testNum(15);

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];


const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === "string")) {
            resolve(sortWords(words.map(word => word.toUpperCase())))

        } else {
            reject('error error error not all strings!')
        }
    })
    //.then(res => console.log(res))
    //.catch(err => console.log(err));
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject('hahahaha no go')
        }
    })
}

makeAllCaps(arrayOfWords)
    //.then(sortWords(arrayOfWords))
    .then(res => console.log(res))
    .catch(err => console.log(err));

makeAllCaps(complicatedArray)
    //.then(sortWords(complicatedArray))
    .then(res => console.log(res))
    .catch(err => console.log(err));


console.log('test')