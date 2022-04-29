// import GenericModel from "../models/GenericModel";

import { ZodError } from 'zod';
import IModel from '../models/IIndex';

export interface ServiceError {
  error: ZodError;
}

export default abstract class GenericService<T> {
  constructor(protected model: IModel<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    const item = await this.model.create(obj);
    return item;
  }

  public async read(): Promise<T[]> {
    const items = await this.model.read();
    return items;
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    const item = await this.model.readOne(id);
    return item;
  }

  public async update(): Promise<T[]> {
    const item = await this.model.update();
    return item;
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    const item = await this.model.delete(id);
    return item;
  }
}