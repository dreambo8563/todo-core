import {
  TaskContentType,
  ITaskItem,
  TextTask,
  AudioTask,
} from '../Entities/ITaskItem';

export interface ITaskUsecase {
  createTask(
    id: string,
    content: TaskContentType,
    finishDate?: Date | null
  ): ITaskItem;
}

export class TaskUsecase implements ITaskUsecase {
  // constructor(parameters) {
  //TODO: Dependency Injection - API service...
  // }
  createTask(id: string, content: TaskContentType, finishDate?: Date | null) {
    // detail to implement the logic
    //* Factory Pattern
    if (typeof content === 'string') {
      // text task
      return new TextTask(id, content, finishDate);
    } else {
      return new AudioTask(id, content, finishDate);
    }
  }
}
