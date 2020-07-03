import { TaskContentType, ITaskItem } from '../core/Entities/ITaskItem';
import { ITaskAPI, TaskAPI } from '../Interface/Http/TaskAPI';
import { ITaskOwner } from '../core/Entities/ICustomer';
import { ITaskRepository } from '../core/Repository/ITaskRepository';
import { ITaskTransfer } from '../core/IServices/ITaskTransfer';
import { TaskTransfer } from '../Interface/Services/TaskTransfer';
import { TaskListRepository } from '../Interface/Memory/TaskLiskRepository';
import { TaskRepository } from '../Interface/Memory/TaskRepository';

export interface ITaskUsecase {
  createTask(
    content: TaskContentType,
    finishDate?: Date | null,
    owner?: ITaskOwner | null
  ): Promise<ITaskItem>;
}

type ITaskService = { api: ITaskAPI; transferS: ITaskTransfer };
export class TaskUsecase implements ITaskUsecase {
  constructor(private s: ITaskService, private repo: ITaskRepository) {
    //* Dependency Injection - API/cache/log service...
  }
  async createTask(
    content: TaskContentType,
    finishDate: Date | null = null,
    owner: ITaskOwner | null = null
  ) {
    // detail to implement the logic
    const res = await this.s.api.createTask(content);
    const id = res.id;
    return this.repo.createTask(id, content, finishDate, owner);
  }
}

export class TaskUsecaseFactory {
  public static create(): TaskUsecase {
    return new TaskUsecase(
      {
        api: TaskAPI.getInstance(),
        transferS: new TaskTransfer(new TaskListRepository()),
      },
      new TaskRepository()
    );
  }
}
