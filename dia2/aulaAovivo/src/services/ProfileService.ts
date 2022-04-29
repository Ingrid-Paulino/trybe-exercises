import ProfileModel from '../models/ProfileModel';
import { IProfile } from '../interfaces/IProfile';
import GenericService from './GenericService';

export default class ProfileService extends GenericService<IProfile> {
  constructor(public model = new ProfileModel()) {
    super(model);
  }

  // public async read(): Promise<IProfile[]> {
  //   const profiles = await this.model.read();
  //   return profiles;
  // }

  // public async create(obj: IProfile): Promise<IProfile> {
  //   const profile = await this.model.create(obj);
  //   return profile;
  // }

  // public async readOne(id: string): Promise<IProfile | null> {
  //   const profile = await this.model.readOne(id);
  //   return profile;
  // }

  // public async update(id: string, obj: IProfile): Promise<IProfile | null> {
  //   const profile = await this.model.update(id, obj);
  //   return profile;
  // }

  // public async delete(id: string): Promise<IProfile | null> {
  //   const profile = await this.model.delete(id);
  //   return profile;
  // }
}