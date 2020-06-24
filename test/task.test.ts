import {
  Task,
  ITaskItem,
  TextTask,
  AudioTask,
} from '../src/Interfaces/ITaskItem';
import { ETaskStatus } from '../src/Enums/Status';

describe('task', () => {
  it('constructor', () => {
    const todo: Task = new TextTask('1', 'abc');
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
  });
  it('Audio task playable', () => {
    const todo: AudioTask = new AudioTask(
      '1',
      new URL('http://www.baidu.com/z.mp3')
    );
    expect(todo.play).toBeDefined();
    expect(todo.pause).toBeDefined();
    expect(todo.stop).toBeDefined();
  });
});
