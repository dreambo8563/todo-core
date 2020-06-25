import { TaskListUsecase } from '../src/Domain/UseCases/ITaskListUsecase';
import { TaskUsecase } from '../src/Domain/UseCases/ITaskUsecase';

describe('tasklist', () => {
  it('add task', () => {
    const taskService = new TaskUsecase();
    const todo = taskService.createTask('1', 'project1- task1');
    const taskListService = new TaskListUsecase();
    const list = taskListService.addTask(todo);
    expect(list.length).toEqual(1);
  });
});
