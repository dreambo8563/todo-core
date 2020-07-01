import { ITaskItem } from '../Entities/ITaskItem';

export interface ITaskListRepository {
  addTask(t: ITaskItem): Array<ITaskItem>;
  getTask(id: string): ITaskItem | null;
  delTask(id: string): void;
  updateTask(id: string, t: ITaskItem): Array<ITaskItem>;
  taskList: Array<ITaskItem>;
}
