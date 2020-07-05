import { v4 as uuidv4 } from 'uuid';
class UniqueEntityID {
  constructor(private _id?: string) {
    this._id = _id ?? uuidv4();
  }
  equals(id: UniqueEntityID) {
    return this._id === id._id;
  }
}

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;
  protected props: T;

  // Take note of this particular nuance here:
  // Why is "id" optional?
  constructor(props: T, id?: UniqueEntityID) {
    // when Entity creaction, no id assigned
    this._id = id ? id : new UniqueEntityID();
    this.props = props;
  }

  // Entities are compared based on their referential
  // equality.
  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
