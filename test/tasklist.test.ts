import { TaskListUsecase } from '../src/UseCases/ITaskListUsecase';
import { TaskUsecase } from '../src/UseCases/ITaskUsecase';
import { TaskAPI } from '../src/Interface/API/TaskAPI';
import { TaskRepository } from '../src/Interface/Repository/TaskRepository';

describe('tasklist', () => {
  it('add task', async () => {
    const api = TaskAPI.getInstance();
    const repo = new TaskRepository();
    const taskService = new TaskUsecase(api, repo);
    const todo = await taskService.createTask('project1- task1');
    console.log(todo);
    const taskListService = new TaskListUsecase();
    const list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
  });
});
