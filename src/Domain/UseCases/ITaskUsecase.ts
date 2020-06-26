import {
  TaskContentType,
  ITaskItem,
  TextTask,
  AudioTask,
} from '../Entities/ITaskItem';
import { TaskAPI } from '../../Interface/API/TaskAPI';

export interface ITaskUsecase {
  createTask(
    content: TaskContentType,
    finishDate?: Date | null
  ): Promise<ITaskItem>;
}

export class TaskUsecase implements ITaskUsecase {
  //TODO: Dependency Injection - API/cache/log service...
  constructor(private api: TaskAPI) {}
  async createTask(content: TaskContentType, finishDate?: Date | null) {
    // detail to implement the logic
    const res = await this.api.createTask(content);
    const id = res.id;
    //* Factory Pattern
    if (typeof content === 'string') {
      // text task
      return new TextTask(id, content, finishDate);
    } else {
      return new AudioTask(id, content, finishDate);
    }
  }
}
