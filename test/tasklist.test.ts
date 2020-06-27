import { TaskListUsecase } from '../src/UseCases/ITaskListUsecase';
import { TaskUsecase } from '../src/UseCases/ITaskUsecase';
import { TaskAPI } from '../src/Interface/API/TaskAPI';
import { TaskRepository } from '../src/Interface/Repository/TaskRepository';
import { AudioTask } from '../src/core/Entities/ITaskItem';

describe('tasklist', () => {
  it('add task', async () => {
    const api = TaskAPI.getInstance();
    const repo = new TaskRepository();
    const taskService = new TaskUsecase(api, repo);
    const todo = await taskService.createTask('project1- task1');
    const taskListService = new TaskListUsecase();
    let list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
    const limitedTodo = await taskService.createTask(
      'project1- task2',
      new Date()
    );
    list = taskListService.addTask(limitedTodo);
    expect(list.length).toEqual(2);
  });
  it('add audio task', async () => {
    const api = TaskAPI.getInstance();
    const repo = new TaskRepository();
    const taskService = new TaskUsecase(api, repo);
    const todo = (await taskService.createTask(
      new URL('http://www.baidu.com.xx.mp4'),
      null
    )) as AudioTask;
    const taskListService = new TaskListUsecase();
    let list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
    const limitedTodo = await taskService.createTask(
      new URL('http://www.baidu.com.xx.mp4'),
      new Date()
    );
    list = taskListService.addTask(limitedTodo);
    expect(list.length).toEqual(2);
  });
});
