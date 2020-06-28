import { ITaskItem } from '../../core/Entities/ITaskItem';

export interface ITaskLiskRepository {
  addTask(t: ITaskItem): Array<ITaskItem>;
  getTask(id: string): ITaskItem | null;
}

export class TaskListRepository implements ITaskLiskRepository {
  private _taskList: Array<ITaskItem> = [];
  getTask(id: string): ITaskItem | null {
    const index = this._taskList.findIndex(t => t.id === id);
    return index >= 0 ? this._taskList[index] : null;
  }
  addTask(t: ITaskItem) {
    this._taskList.push(t);
    return this._taskList;
  }
}
