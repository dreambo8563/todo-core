import { ValueObject } from '../../shared/valueObject';

interface FinishDateProps {
  value: Date | null;
}

export class FinishDate extends ValueObject<FinishDateProps> {
  get value(): Date | null {
    return this.props.value;
  }

  // Can't use the `new` keyword from outside the scope of the class.
  private constructor(props: FinishDateProps) {
    super(props);
  }

  public static create(finishDate: Date | null): FinishDate {
    if (finishDate && finishDate.getTime() < Date.now()) {
      //FIXME: should refactor with
      throw new Error('finishDate is not allowed earlier than now');
    } else {
      return new FinishDate({ value: finishDate });
    }
  }
}
