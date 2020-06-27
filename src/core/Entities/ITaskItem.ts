export interface ITaskItem {
  id: string;
  content: TaskContentType;
  status: ETaskStatus;
  toggle(): void;
}

export interface IPeriodLimit {
  finishDate: Date | null;
}

export interface ILockable {
  locked: boolean;
}

export type TextTaskType = string;
export type MediaTaskType = URL;
export type TaskContentType = TextTaskType | MediaTaskType;

export interface Playable {
  play(): void;
  pause(): void;
  stop(): void;
}
export enum ETaskStatus {
  unFinished,
  Finished,
}

export class Task<T extends TaskContentType> implements ITaskItem {
  id: string = '';
  content: T;
  status = ETaskStatus.unFinished;
  constructor(id: string, content: T) {
    this.id = id;
    this.content = content;
  }

  toggle() {
    this.setStatus(
      this.status === ETaskStatus.unFinished
        ? ETaskStatus.Finished
        : ETaskStatus.unFinished
    );
  }
  private setStatus(s: ETaskStatus) {
    this.status = s;
  }
}
export class PeriodTask<T extends TaskContentType> extends Task<T>
  implements IPeriodLimit {
  finishDate: Date | null = null;
  constructor(id: string, content: T, finishDate: Date | null = null) {
    super(id, content);
    this.finishDate = finishDate;
  }
}
export class TextTask extends PeriodTask<TextTaskType> {
  // constructor(id: string, content: TextTaskType) {
  //   super(id, content);
  // }
}
export class AudioTask extends PeriodTask<MediaTaskType> implements Playable {
  // constructor(id: string, content: MediaTaskType) {
  //   super(id, content);
  // }
  play() {
    console.log(this.content.toString());
    console.log('play the audio');
  }
  pause() {
    console.log('pause the audio');
  }
  stop() {
    console.log('stop the audio');
  }
}
