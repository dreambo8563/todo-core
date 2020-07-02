import { TaskOwner } from '../src/core/Entities/ICustomer';
import { AudioTask } from '../src/core/Entities/ITaskItem';
import { TaskListRepository } from '../src/Interface/Memory/TaskLiskRepository';
import { TaskListUsecase } from '../src/UseCases/ITaskListUsecase';
import { TaskUsecase } from '../src/UseCases/ITaskUsecase';
import mockRes from './utils/mockResponse';
// import { TaskAPI } from '../src/Interface/Http/TaskAPI';
// import { TaskTransfer } from '../src/Interface/Services/TaskTransfer';

jest.mock('node-fetch');

describe('tasklist', () => {
  it('add task', async () => {
    const taskService = new TaskUsecase();
    mockRes({
      id: '1',
      content: '1111',
    });
    const owner = new TaskOwner('owner1');
    const todo = await taskService.createTask('project1- task1', null, owner);

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
    const taskService = new TaskUsecase();
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
    const taskService = new TaskUsecase();
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
    const taskService = new TaskUsecase();
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
  it('del task', async () => {
    const taskService = new TaskUsecase();
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
    taskListService.delTask('2');
    expect(list.length).toEqual(1);
    taskListService.delTask('1');
    expect(list.length).toEqual(0);
  });

  it('update task', async () => {
    const taskService = new TaskUsecase();
    mockRes({
      id: '1',
      content: '1111',
    });
    let todo = (await taskService.createTask(
      new URL('http://www.baidu.com.xx.mp4'),
      null
    )) as AudioTask;
    const listrepo = new TaskListRepository();
    const taskListService = new TaskListUsecase(listrepo);
    taskListService.addTask(todo);
    expect(todo.content.toString()).toEqual(
      new URL('http://www.baidu.com.xx.mp4').toString()
    );
    const newTodo = await taskService.createTask('project1- task1');
    let list = taskListService.updateTask('2', newTodo);
    expect(todo.content.toString()).toEqual(
      new URL('http://www.baidu.com.xx.mp4').toString()
    );
    list = taskListService.updateTask('1', newTodo);
    expect(list[0].content.toString()).toEqual('project1- task1');
  });

  it('create new instance task list', async () => {
    const repo = new TaskListRepository();
    repo.taskList = [];
    const instance = repo.instance();
    new TaskListUsecase(instance);
  });
});
