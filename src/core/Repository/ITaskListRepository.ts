import { ITaskItem } from '../Entities/ITaskItem';

export interface ITaskListRepository {
  instance(list: Array<ITaskItem>): ITaskListRepository;
  addTask(t: ITaskItem): ITaskListRepository;
  getTask(id: string): ITaskItem | null;
  delTask(id: string): ITaskListRepository;
  updateTask(id: string, t: ITaskItem): ITaskListRepository;
  taskList: Array<ITaskItem>;
}
