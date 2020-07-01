import { TaskContentType, ITaskItem } from '../Entities/ITaskItem';
import { ITaskOwner } from '../Entities/ICustomer';

export interface ITaskRepository {
  createTask(
    id: string,
    content: TaskContentType,
    finishDate: Date | null,
    owner: ITaskOwner | null
  ): ITaskItem;
}
