import { ITaskItem } from '../core/Entities/ITaskItem';
import { ITaskListRepository } from '../core/Repository/ITaskListRepository';

// task list use cases
export interface ITaskListUsecase {
  // searchByKeywords(keywords: string): Array<ITaskItem>;
  addTask(t: ITaskItem): Array<ITaskItem>;
  getTask(id: string): ITaskItem | null;
  updateTask(id: string, t: ITaskItem): Array<ITaskItem>;
  delTask(id: string): void;
}

export class TaskListUsecase implements ITaskListUsecase {
  //* Dependency Injection - API service...
  constructor(private repo: ITaskListRepository) {}
  updateTask(id: string, t: ITaskItem): Array<ITaskItem> {
    return this.repo.updateTask(id, t).taskList;
  }
  delTask(id: string) {
    return this.repo.delTask(id);
  }
  addTask(t: ITaskItem) {
    return this.repo.addTask(t).taskList;
  }
  getTask(id: string) {
    return this.repo.getTask(id);
  }
}
