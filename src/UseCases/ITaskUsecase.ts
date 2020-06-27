import { TaskContentType, ITaskItem } from '../core/Entities/ITaskItem';
import { ITaskAPI } from '../Interface/API/TaskAPI';
import { ITaskRepository } from '../Interface/Repository/TaskRepository';

export interface ITaskUsecase {
  createTask(
    content: TaskContentType,
    finishDate?: Date | null
  ): Promise<ITaskItem>;
}

export class TaskUsecase implements ITaskUsecase {
  //TODO: Dependency Injection - API/cache/log service...
  constructor(private api: ITaskAPI, private repo: ITaskRepository) {}
  async createTask(content: TaskContentType, finishDate: Date | null = null) {
    // detail to implement the logic
    const res = await this.api.createTask(content);
    const id = res.id;

    return this.repo.createTask(id, content, finishDate);
  }
}
