import { ITaskItem } from '../core/Entities/ITaskItem';

// task list use cases
export interface ITaskListUsecase {
  // searchByKeywords(keywords: string): Array<ITaskItem>;
  addTask(t: ITaskItem): Array<ITaskItem>;
  // getTask(id: string): ITaskItem;
  // updateTask(t: ITaskItem): ITaskItem;
  // deleteTask(t: ITaskItem): void;
}

export class TaskListUsecase implements ITaskListUsecase {
  taskList: Array<ITaskItem> = [];
  // constructor(parameters) {
  //TODO: Dependency Injection - API service...
  // }
  addTask(t: ITaskItem) {
    this.taskList.push(t);
    return this.taskList;
  }
}
