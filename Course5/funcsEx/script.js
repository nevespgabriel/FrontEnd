const addToArray = (array, string) => {
    array.push(string);
    return array;
}

const removeFromArray = (array) => {
    element = array[array.length - 1];
    array.pop();
    return element;
}

const addToBeggining = (array, string) => {
    array.unshift(string);
    return array;
}

const removeFromBeggining = (array) => {
    element = array[0];
    array.shift();
    return element;
}

const returnNext = (array, string) => {
    if(array.includes(string)){
        if(array.indexOf(string) == (array.length - 1)){
            return "";
        }
        return array[array.indexOf(string) + 1];
    }
    return false;
}

const returnChunk = (array, firstStr, lastStr) => {
    if(array.includes(firstStr) && array.includes(lastStr)){
        return array.slice(array.indexOf(firstStr), array.indexOf(lastStr)+1);
    }
    return false
}

const sumValues = (array) => {
    let sum=0;
    array.forEach((element) => {
        sum += element;
    })
    return sum;
}

const joinStrings = (array, string) => {
    const newArray = [];
    array.forEach((element) => {
        newArray.push(element + string)
    })
    return newArray;
}

let array1 = ["eu", "sou", "legal"];
let nums = [2, 5, 7, 3]
console.log(addToArray(array1, "Muito"));
console.log(removeFromArray(array1));
console.log(addToBeggining(array1, "Muito"));
console.log(removeFromBeggining(array1));
console.log(returnNext(array1, "sou"));
console.log(returnChunk(array1, "eu", "legal"));
console.log(sumValues(nums));
console.log(joinStrings(array1, "lie"));
