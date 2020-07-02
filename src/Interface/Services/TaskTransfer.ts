import { ITaskTransfer } from '../../core/IServices/ITaskTransfer';
import { IPeriodTask } from '../../core/Entities/ITaskItem';
import { ITaskOwner } from '../../core/Entities/ICustomer';
import { ITaskListRepository } from '../../core/Repository/ITaskListRepository';
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
    o.ownedTasks = this.repo.instance(o.ownedTasks).addTask(t).taskList;

    if (t.owner) {
      // rm task from origin owner
      const originTasks = t.owner.ownedTasks;
      t.owner.ownedTasks = this.repo
        .instance(originTasks)
        .delTask(t.id).taskList;
    }
  }
}
