import {
  Task,
  ITaskItem,
  TextTask,
  AudioTask,
  ETaskStatus,
} from '../src/core/Entities/ITaskItem';

describe('task', () => {
  it('constructor', () => {
    const todo: Task<string> = new TextTask('1', 'abc', new Date());
    expect(todo.id).toEqual('1');
    expect(todo.content).toEqual('abc');
    expect(todo instanceof Task).toBe(true);
    expect(todo instanceof TextTask).toBe(true);
  });

  it('sub class', () => {
    const todo: ITaskItem = new TextTask('1', 'abc');
    expect(todo instanceof Task).toBe(true);
    expect(todo instanceof TextTask).toBe(true);
    expect(todo instanceof AudioTask).toBe(false);
  });
  it('task status', () => {
    const todo: ITaskItem = new TextTask('1', 'abc');
    expect(todo.status).toEqual(ETaskStatus.unFinished);
    todo.toggle();
    expect(todo.status).toEqual(ETaskStatus.Finished);
    todo.toggle();
    expect(todo.status).toEqual(ETaskStatus.unFinished);
  });
  it('Audio task playable', () => {
    const todo: AudioTask = new AudioTask(
      '1',
      new URL('http://www.baidu.com/z.mp3')
    );
    expect(todo.play).toBeDefined();
    expect(todo.pause).toBeDefined();
    expect(todo.stop).toBeDefined();
    const consoleSpy = jest.spyOn(console, 'log');
    todo.play();
    todo.pause();
    todo.stop();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });
});
