import { TaskListUsecase } from '../src/Domain/UseCases/ITaskListUsecase';
import { TaskUsecase } from '../src/Domain/UseCases/ITaskUsecase';
import { TaskAPI } from '../src/Interface/API/TaskAPI';

describe('tasklist', () => {
  it('add task', async () => {
    const api = TaskAPI.getInstance();
    const taskService = new TaskUsecase(api);
    const todo = await taskService.createTask('project1- task1');
    console.log(todo);
    const taskListService = new TaskListUsecase();
    const list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
  });
});
