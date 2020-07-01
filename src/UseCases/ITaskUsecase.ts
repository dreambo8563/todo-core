import { TaskContentType, ITaskItem } from '../core/Entities/ITaskItem';
import { ITaskAPI, TaskAPI } from '../Interface/Http/TaskAPI';
import { ITaskOwner } from '../core/Entities/ICustomer';
import { ITaskRepository } from '../core/Repository/TaskRepository';
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
  //* Dependency Injection - API/cache/log service...
  // static getInstance() {
  //   const listRepo = new TaskListRepository();
  //   const repo = new TaskRepository();
  //   return new TaskUsecase(
  //     {
  //       api: TaskAPI.getInstance(),
  //       transferS: new TaskTransfer(listRepo),
  //     },
  //     repo
  //   );
  // }
  private s: ITaskService;
  private repo: ITaskRepository;
  constructor(s?: ITaskService, repo?: ITaskRepository) {
    // default injection
    this.s = s ?? {
      api: TaskAPI.getInstance(),
      transferS: new TaskTransfer(new TaskListRepository()),
    };
    this.repo = repo ?? new TaskRepository();
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
