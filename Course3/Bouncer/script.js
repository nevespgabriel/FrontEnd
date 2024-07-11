const age = Number(prompt("How old are you?"));

if(age < 0 || isNaN(age)){
    alert("ERROR. What you typed is not a number or it's a negative number.");
} else{
    if(age < 16){
        alert("Won't someone PLEASE think of the children");
    } else if(age < 18){
        alert("Sorry, you're not old enough to come in. Drive on home, kid.");
    } else if(age < 21){
        alert("Come on in, but no drinking.");
    } else{
        alert("Okay, get smashed!");
        if(age == 21){
            alert("Happy 21st birthday!");
        }
    }
    if(age%2 == 1){
        alert("You're an odd one...");
    }
    if(age%Math.sqrt(age) == 0){
        alert("Holy crap, you're a perfect square!");
    }
} 