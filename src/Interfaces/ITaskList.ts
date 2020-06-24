import { ITaskItem } from './ITaskItem';

export interface ITaskList {
  tasks: Array<ITaskItem>;
  searchByKeywords(keywords: string): Array<ITaskItem>;
  addTask(t: ITaskItem): ITaskItem;
  getTask(id: string): ITaskItem;
  updateTask(t: ITaskItem): ITaskItem;
  deleteTask(t: ITaskItem): void;
}
