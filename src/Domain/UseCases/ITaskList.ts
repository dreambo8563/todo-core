import {
  ITaskItem,
  TaskContentType,
  TextTask,
  AudioTask,
} from '../Entities/ITaskItem';

// task list use cases
export interface ITaskListUsecase {
  // searchByKeywords(keywords: string): Array<ITaskItem>;
  newTask(
    id: string,
    content: TaskContentType,
    finishDate?: Date | null
  ): ITaskItem;
  // getTask(id: string): ITaskItem;
  // updateTask(t: ITaskItem): ITaskItem;
  // deleteTask(t: ITaskItem): void;
}

export class TaskListUsecase implements ITaskListUsecase {
  // constructor(parameters) {
  //TODO: Dependency Injection - API service...
  // }
  newTask(id: string, content: TaskContentType, finishDate?: Date | null) {
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
