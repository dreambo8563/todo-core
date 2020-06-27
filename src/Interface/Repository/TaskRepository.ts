import {
  TaskContentType,
  ITaskItem,
  TextTask,
  AudioTask,
} from '../../core/Entities/ITaskItem';

export interface ITaskRepository {
  createTask(
    id: string,
    content: TaskContentType,
    finishDate?: Date | null
  ): ITaskItem;
}

export class TaskRepository implements ITaskRepository {
  createTask(
    id: string,
    content: TaskContentType,
    finishDate: Date | null = null
  ) {
    if (typeof content === 'string') {
      //* Factory Pattern
      return new TextTask(id, content, finishDate);
    } else {
      return new AudioTask(id, content, finishDate);
    }
  }
}
