import { ITaskItem } from '../core/Entities/ITaskItem';
import { ITaskLiskRepository } from '../Interface/Repository/TaskListRepository';

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
  constructor(private repo: ITaskLiskRepository) {}
  updateTask(id: string, t: ITaskItem): ITaskItem[] {
    return this.repo.updateTask(id, t);
  }
  delTask(id: string): void {
    return this.repo.delTask(id);
  }
  addTask(t: ITaskItem) {
    return this.repo.addTask(t);
  }
  getTask(id: string) {
    return this.repo.getTask(id);
  }
}
