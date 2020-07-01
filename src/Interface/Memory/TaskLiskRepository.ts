import { ITaskItem } from '../../core/Entities/ITaskItem';
import { ITaskListRepository } from '../../core/Repository/TaskListRepository';
export class TaskListRepository implements ITaskListRepository {
  private _taskList: Array<ITaskItem> = [];
  getTask(id: string): ITaskItem | null {
    const index = this._taskList.findIndex(t => t.id === id);
    return index >= 0 ? this._taskList[index] : null;
  }
  addTask(t: ITaskItem) {
    this._taskList.push(t);
    return this._taskList;
  }
  delTask(id: string): void {
    const index = this._taskList.findIndex(t => t.id === id);
    if (index >= 0) {
      this._taskList.splice(index, 1);
    }
  }
  updateTask(id: string, t: ITaskItem): Array<ITaskItem> {
    const index = this._taskList.findIndex(i => i.id === id);
    if (index >= 0) {
      this._taskList.splice(index, 1, t);
    }
    return this._taskList;
  }
  public set taskList(list: Array<ITaskItem>) {
    this._taskList = list;
  }
  public get taskList(): Array<ITaskItem> {
    return this._taskList;
  }
}
