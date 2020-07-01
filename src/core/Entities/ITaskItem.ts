import { ITaskOwner } from './ICustomer';

/**
 *
 * Task 接口核心类型
 */
export interface ITaskItem {
  id: string;
  content: TaskContentType;
  status: ETaskStatus;

  toggle(): void;
}

/**
 * 可以扩展为有结束日期类型的 task
 */
export interface IPeriodLimit {
  finishDate?: Date | null;
}
/**
 * 可以用来扩展为能够锁定(只读)的 task
 */

export interface IOwnership {
  owner: ITaskOwner | null;
}
export interface ILockable {
  locked: boolean;
}

export type IPeriodTask = ITaskItem & IOwnership & IPeriodLimit;
/**
 * 内容为string 类型的 task
 */
export type TextTaskType = string;
/**
 * 内容为 URL 地址类型的 task, 比如 audio
 */
export type MediaTaskType = URL;
export type TaskContentType = TextTaskType | MediaTaskType;

/**
 * 针对媒体类型的 task 扩展播放内容的能力
 */
export interface IPlayable {
  play(): void;
  pause(): void;
  stop(): void;
}

/**
 * 任务的基本状态
 */
export enum ETaskStatus {
  unFinished,
  Finished,
}

/**
 * Task 基础类
 */
export class Task<T extends TaskContentType> implements ITaskItem {
  id: string = '';
  content: T;
  status = ETaskStatus.unFinished;

  constructor(id: string, content: T) {
    this.id = id;
    this.content = content;
  }

  /**
   * 切换状态
   */
  toggle() {
    this.setStatus(
      this.status === ETaskStatus.unFinished
        ? ETaskStatus.Finished
        : ETaskStatus.unFinished
    );
  }
  /**私有方法,设置状态 */
  private setStatus(s: ETaskStatus) {
    this.status = s;
  }
}
/**
 * 有结束日期的基础类, 大部分使用PeriodTask而不是 Task 去扩展,
 * Task 是为了更高层级扩展而保留的
 */
export class PeriodTask<T extends TaskContentType> extends Task<T>
  implements IPeriodLimit, IOwnership {
  finishDate: Date | null = null;
  owner: ITaskOwner | null = null;
  constructor(
    id: string,
    content: T,
    finishDate: Date | null = null,
    owner: ITaskOwner | null = null
  ) {
    super(id, content);
    this.finishDate = finishDate;
    this.owner = owner;
  }
}
export class TextTask extends PeriodTask<TextTaskType> {
  // constructor(id: string, content: TextTaskType) {
  //   super(id, content);
  // }
}
export class AudioTask extends PeriodTask<MediaTaskType> implements IPlayable {
  // constructor(id: string, content: MediaTaskType) {
  //   super(id, content);
  // }
  play() {
    console.log('play the audio');
  }
  pause() {
    console.log('pause the audio');
  }
  stop() {
    console.log('stop the audio');
  }
}
