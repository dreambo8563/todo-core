import { IPeriodTask } from 'core/Entities/ITaskItem';
import { ITaskOwner } from 'core/Entities/ICustomer';

export interface ITaskTransfer {
  transfer(t: IPeriodTask, o: ITaskOwner): void;
}
