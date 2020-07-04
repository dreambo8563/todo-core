import {
  TaskContentType,
  ITaskItem,
  PeriodTaskFactory,
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
    return PeriodTaskFactory.create(id, content, finishDate, owner);
  }
}
