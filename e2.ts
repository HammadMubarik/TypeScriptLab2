interface TasksInterface
{
    arr:Array<string>;
    addTasks(tasks:string):number;
    listAllTasks():void;
    deleteTask(task: string): number;

}
class todo implements TasksInterface
{
    arr: string[];
    addTasks(tasks: string): number {
        throw new Error("Method not implemented.");
    }
    Task:Array<string> = [];

    addTask(task: string): number 
    {
        let length: number = this.arr.push(task)
        console.log(task + " has been added to our Task Array");
        return length;
    }


    listAllTasks() 
    {
        for (let i = 0; i < this.arr.length; i++) 
        {
            console.log("array index " + i + " has the value of " + this.arr[i])
        }
    }

    deleteTask(task: string): number 
    {   
        let index: number = this.arr.indexOf(task);
        this.arr.splice(index, 1)
        console.log(task + " Has been deleted form the array tasks");
        return this.arr.length;
    }
}
