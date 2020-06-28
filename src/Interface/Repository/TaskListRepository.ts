import { ITaskItem } from '../../core/Entities/ITaskItem';

export interface ITaskLiskRepository {
  addTask(t: ITaskItem): Array<ITaskItem>;
  getTask(id: string): ITaskItem | null;
  delTask(id: string): void;
  updateTask(t: ITaskItem): Array<ITaskItem>;
}

export class TaskListRepository implements ITaskLiskRepository {
  updateTask(t: ITaskItem): ITaskItem[] {
    const index = this._taskList.findIndex(i => i.id === t.id);
    if (index >= 0) {
      this._taskList.splice(index, 1, t);
    }
    return this._taskList;
  }

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
}
