import { TaskListUsecase } from '../src/UseCases/ITaskListUsecase';
import { TaskUsecase } from '../src/UseCases/ITaskUsecase';
import { TaskAPI } from '../src/Interface/API/TaskAPI';
import { TaskRepository } from '../src/Interface/Repository/TaskRepository';
import { AudioTask } from '../src/core/Entities/ITaskItem';
import { TaskListRepository } from '../src/Interface/Repository/TaskListRepository';

import mockRes from './utils/mockResponse';
jest.mock('node-fetch');

describe('tasklist', () => {
  it('add task', async () => {
    const api = TaskAPI.getInstance();
    const repo = new TaskRepository();
    const taskService = new TaskUsecase(api, repo);
    mockRes({
      id: '1',
      content: '1111',
    });
    const todo = await taskService.createTask('project1- task1');

    const listrepo = new TaskListRepository();
    const taskListService = new TaskListUsecase(listrepo);
    let list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
    mockRes({
      id: '2',
      content: '2222',
    });
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
    const listrepo = new TaskListRepository();
    const taskListService = new TaskListUsecase(listrepo);
    let list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
    const limitedTodo = await taskService.createTask(
      new URL('http://www.baidu.com.xx.mp4'),
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
    const listrepo = new TaskListRepository();
    const taskListService = new TaskListUsecase(listrepo);
    let list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
    const limitedTodo = await taskService.createTask(
      new URL('http://www.baidu.com.xx.mp4'),
      new Date()
    );
    list = taskListService.addTask(limitedTodo);
    expect(list.length).toEqual(2);
  });

  it('get task', async () => {
    const api = TaskAPI.getInstance();
    const repo = new TaskRepository();
    const taskService = new TaskUsecase(api, repo);
    mockRes({
      id: '1',
      content: '1111',
    });
    const todo = (await taskService.createTask(
      new URL('http://www.baidu.com.xx.mp4'),
      null
    )) as AudioTask;
    const listrepo = new TaskListRepository();
    const taskListService = new TaskListUsecase(listrepo);
    let list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
    const result = taskListService.getTask('1');
    expect(result!.content).toEqual(new URL('http://www.baidu.com.xx.mp4'));

    const nothing = taskListService.getTask('3');
    expect(nothing).toBeNull();
  });
});
