import mongoose from 'mongoose';
import { IProfile } from '../interfaces/IProfile';
import ProfileSchema from '../schemas/ProfileSchema';
import GenericModel from './GenericModel';

export default class ProfileModel extends GenericModel<IProfile> {
  constructor(public model = mongoose.model('Profile', ProfileSchema)) {
    super(model);
  }

  // public async read(): Promise<IProfile[]> {
  //   const profiles = await this.model.find();
  //   return profiles;
  // }

  // public async readOne(id: string): Promise<IProfile | null> {
  //   const profile = await this.model.findOne({ _id: id });
  //   return profile;
  // }

  // public async create(obj: IProfile): Promise<IProfile> {
  //   const profile = await this.model.create(obj);
  //   return profile;
  // }

  // public async update(id: string, obj: IProfile): Promise<IProfile | null> {
  //   const profile = await this.model.findByIdAndUpdate({ _id: id }, obj);
  //   return profile;
  // }

  // public async delete(id: string): Promise<IProfile | null> {
  //   const profile = await this.model.findByIdAndDelete({ _id: id });
  //   return profile;
  // }
}