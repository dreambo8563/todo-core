import {
  TaskContentType,
  ITaskItem,
  TextTask,
  AudioTask,
} from '../../core/Entities/ITaskItem';
import { ITaskOwner } from '../../core/Entities/ICustomer';
import { ITaskRepository } from '../../core/Repository/ITaskRepository';

export class TaskRepository implements ITaskRepository {
  createTask(
    id: string,
    content: TaskContentType,
    finishDate: Date | null,
    owner: ITaskOwner | null
  ): ITaskItem {
    if (typeof content === 'string') {
      //* Factory Pattern
      return new TextTask(id, content, finishDate, owner) as TextTask;
    } else {
      return new AudioTask(id, content, finishDate, owner) as AudioTask;
    }
  }
}
