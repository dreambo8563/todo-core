import { ETaskStatus } from '../Enums/Status';

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

type RichTaskType = string;
export type TaskContentType = string | URL | RichTaskType;

export interface Playable {
  play(): void;
  pause(): void;
  stop(): void;
}
export class Task implements ITaskItem {
  id: string = '';
  content: TaskContentType;
  status = ETaskStatus.unFinished;
  constructor(id: string, content: TaskContentType) {
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
export class PeriodTask extends Task implements IPeriodLimit {
  finishDate: Date | null = null;
  constructor(
    id: string,
    content: TaskContentType,
    finishDate: Date | null = null
  ) {
    super(id, content);
    this.finishDate = finishDate;
  }
}
export class TextTask extends Task {
  // constructor(id: string, content: string) {
  //   super(id, content);
  // }
}
export class AudioTask extends Task implements Playable {
  // constructor(id: string, content: URL) {
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

export class VideoTask extends Task {
  // constructor(id: string, content: URL) {
  //   super(id, content);
  // }
}
