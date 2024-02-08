var todo = /** @class */ (function () {
    function todo() {
        this.Task = [];
    }
    todo.prototype.addTasks = function (tasks) {
        throw new Error("Method not implemented.");
    };
    todo.prototype.addTask = function (task) {
        var length = this.arr.push(task);
        console.log(task + " has been added to our Task Array");
        return length;
    };
    todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.arr.length; i++) {
            console.log("array index " + i + " has the value of " + this.arr[i]);
        }
    };
    todo.prototype.deleteTask = function (task) {
        var index = this.arr.indexOf(task);
        this.arr.splice(index, 1);
        console.log(task + " Has been deleted form the array tasks");
        return this.arr.length;
    };
    return todo;
}());
