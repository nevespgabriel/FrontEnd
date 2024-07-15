const todos = [];

let input = prompt("What would you like to do?").toLowerCase();

const addNewTodo = () => {
    todos.push(prompt("What would you like to add?"));
}

const removeTodo = () => {
    const toBeRemoved = prompt("What would you like to remove?");
    const i = todos.indexOf(toBeRemoved);
    if(i !== -1){
        console.log(`Item removed ${todos[i]}`);
        todos.splice(i, 1);
    } else{
        console.log("That's not an item on your list. Sorry!");
    }
}

while(input !== "quit"){
    if(input === "show"){
        console.log(todos);
    } else if(input === "new"){
        addNewTodo();
    } else if(input == "remove"){
        removeTodo();
    }

    input = prompt("Okay. What would you like to do now?").toLowerCase();
}

console.log("All done.");