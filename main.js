const todos = [
    {
        id: 1,
        activity: 'study for work',
        isComplete: false
    },
    {
        id: 2,
        activity: 'learn Javascript',
        isComplete: true
    },
    {
        id: 3,
        activity: 'exercise',
        isComplete: false
    }

]

for(let todo of todos) {
    if(todo.isComplete == true) {
        console.log(`The '${todo.activity}' activity is complete`)
    }
    else {
        console.log(`Get your ass in gear on '${todo.activity}'`)
    }
    //console.log(todo.activity, todo.isComplete)
}


