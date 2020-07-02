import { ITaskItem } from '../../core/Entities/ITaskItem';
import { ITaskListRepository } from '../../core/Repository/ITaskListRepository';
export class TaskListRepository implements ITaskListRepository {
  private _taskList: Array<ITaskItem> = [];
  instance(list: Array<ITaskItem> = []) {
    // iterface 里写构造没搞通, 暂时这样
    return new TaskListRepository(list);
  }
  constructor(list: Array<ITaskItem> = []) {
    this._taskList = list;
  }
  getTask(id: string): ITaskItem | null {
    const index = this._taskList.findIndex(t => t.id === id);
    return index >= 0 ? this._taskList[index] : null;
  }
  addTask(t: ITaskItem) {
    this._taskList.push(t);
    return this;
  }
  delTask(id: string) {
    const index = this._taskList.findIndex(t => t.id === id);
    if (index >= 0) {
      this._taskList.splice(index, 1);
    }
    return this;
  }
  updateTask(id: string, t: ITaskItem) {
    const index = this._taskList.findIndex(i => i.id === id);
    if (index >= 0) {
      this._taskList.splice(index, 1, t);
    }
    return this;
  }
  public set taskList(list: Array<ITaskItem>) {
    this._taskList = list;
  }
  public get taskList(): Array<ITaskItem> {
    return this._taskList;
  }
}
