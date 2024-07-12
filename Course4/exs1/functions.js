function tellFortune(numChildren, partName, location, job){
    console.log(`You will be a ${job} in ${location}, married to ${partName} with ${numChildren} kids.`);
}

function calcCircle(radius){
    let circ = radius*2*Math.PI;
    let area = radius * radius * Math.PI;
    console.log(`The circumference is ${circ.toFixed(2)}, and the area is ${area.toFixed(2)}.`);
}

function basicMath(n1, n2, str){
    switch(str){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1/n2;
        default:
            console.log("ERROR. Invalid operation.");
    }
}

function randomizer(min, max){
    if(min <= max){
        return min + Math.floor(Math.random() * (max-min));
    }
    return min - Math.floor(Math.random()*(min-max));
}

tellFortune(2, "Ana", "Canada", "Software Developer");
calcCircle(2);
console.log(basicMath(6, 3, "*"));
console.log(randomizer(4, 30));