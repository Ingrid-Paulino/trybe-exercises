import { Model as M, Document  } from 'mongoose';
import IModel from './IIndex'; 

export default abstract class GenericModel<T> implements IModel<T>{
  constructor(protected model:M<T & Document>) {}

  public async create(obj: T): Promise<T> {
    const objCreated = await this.model.create(obj);
    return objCreated;
  }

  public async read(): Promise<T[]> {
    const list = await this.model.find();
    return list;
  }

  public async readOne(id: string): Promise<T | null> {
    const obj = await this.model.findOne({ _id: id });
    return obj;
  }
  
  // Porque o id é passado como um objeto? -- ex do professor
  public async update(): Promise<T[]> {
    const objUpdated = await this.model.updateMany(
      { $and:
      [{ yearPublished: { $lte: 1997 } }, { format: 'CD' }] },
      { $set: { new: false } },
    );

    return this.model.find({
      $and: [{ yearPublished: { $lte: 1997 } }, { format: 'CD' }] });
  };

  public async delete(id: string): Promise<T | null> {
    const objRemoved = await this.model.findByIdAndDelete({ _id: id });
    return objRemoved;
  }
}