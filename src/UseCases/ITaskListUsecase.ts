import { ITaskItem } from '../core/Entities/ITaskItem';
import { ITaskLiskRepository } from '../Interface/Repository/TaskListRepository';

// task list use cases
export interface ITaskListUsecase {
  // searchByKeywords(keywords: string): Array<ITaskItem>;
  addTask(t: ITaskItem): Array<ITaskItem>;
  getTask(id: string): ITaskItem | null;
  // updateTask(t: ITaskItem): ITaskItem;
  // deleteTask(t: ITaskItem): void;
}

export class TaskListUsecase implements ITaskListUsecase {
  //* Dependency Injection - API service...
  constructor(private repo: ITaskLiskRepository) {}
  addTask(t: ITaskItem) {
    return this.repo.addTask(t);
  }
  getTask(id: string) {
    return this.repo.getTask(id);
  }
}
