import { ITaskItem } from './ITaskItem';

/**
 * 用户的基本模型
 */
export interface ICustormer {
  id: string;
}
/**
 * 基于 Task Owner
 * Owner 可有添加自己的好友
 * friends 在Todo 里也是 Owner 角色
 */
export interface ITaskOwner extends ICustormer {
  ownedTasks: Array<ITaskItem>;
  friends: Array<ITaskOwner>;
}

export interface ITransferTask {
  transfer(t: ITaskItem, o: ITaskOwner): void;
}
/**
 *
 * Task Owner 的实现类
 */
export class TaskOwner implements ITaskOwner {
  ownedTasks: Array<ITaskItem> = [];
  friends: Array<ITaskOwner> = [];
  id: string;
  constructor(
    id: string,
    friends?: Array<ITaskOwner>,
    ownedTasks?: Array<ITaskItem>
  ) {
    this.id = id;
    this.friends = friends ?? [];
    this.ownedTasks = ownedTasks ?? [];
  }
}
