// exercise 1
// In this exercise you are required to create an array, and then create functions to add,
// remove and display the items in this array. To complete this exercise you will need to
// do the following:
// Create an array of strings.
// Create an addTask function:
// i. It receives a string as a parameter called task.
// ii. It adds the task to the array.
// iii. It prints a message in the console indicating the insertion.
// iv. It returns the number of elements in the array after the insertion.
var arr = [];
function addTask(task) {
    var length = arr.push(task);
    console.log(task + " has been added to our Task Array");
    return length;
}
// Create a listAllTasks function:
// i. It iterates over all the tasks in the array.
// ii. It prints each array item in the console.
function listAllTasks() {
    for (var i = 0; i < arr.length; i++) {
        console.log("array index " + i + " has the value of " + arr[i]);
    }
}
// Create a deleteTask function:
// i. It receives a string as a parameter called task.
// ii. It removes that string from the array.
// iii. It prints in console a message indicating the deletion.
// iv. It returns the number of elements in the array after the deletion.
function deleteTask(task) {
    var index = arr.indexOf(task);
    arr.splice(index, 1);
    console.log(task + " Has been deleted form the array tasks");
    return arr.length;
    // this is another way of doing it
    // for(let i = 0; i<arr.length; i++)
    // {
    //     if(arr[i] == task)
    //     {
    //         arr[i].trim;
    //         let length:number = arr.length;
    //         console.log("The value of the task: " + task + " has been deleted from index " + arr[i])
    //     }
    //     return length;
    // }
}
addTask("Homework");
addTask("Work");
listAllTasks();
deleteTask("Work");
listAllTasks();
