import { ITaskTransfer } from '../../core/IServices/ITaskTransfer';
import { IPeriodTask } from '../../core/Entities/ITaskItem';
import { ITaskOwner } from '../../core/Entities/ICustomer';
import { ITaskListRepository } from '../../core/Repository/TaskListRepository';
export class TaskTransfer implements ITaskTransfer {
  constructor(private repo: ITaskListRepository) {}
  /**
   *
   * transfet task t to owner o
   * @param {IPeriodTask} t
   * @param {ITaskOwner} o
   * @memberof TaskTransfer
   */
  transfer(t: IPeriodTask, o: ITaskOwner): void {
    // add task to owner
    this.repo.taskList = o.ownedTasks;
    o.ownedTasks = this.repo.addTask(t);

    if (t.owner) {
      // rm task from origin owner
      this.repo.taskList = t.owner.ownedTasks;
      this.repo.delTask(t.id);
      t.owner.ownedTasks = this.repo.taskList;
    }
  }
}
