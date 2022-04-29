import {Schema, model as createModel, Document } from "mongoose";
import Frame from '../interfaces/IStore';
import RecordStoreSchema from '../schemas/storeSchemas'
import GenericModel from "./GenericModel";

export default class RecordStoreModel extends GenericModel<Frame> {
  constructor(public model = createModel('RecordStore', RecordStoreSchema)) {
    super(model);
  }
}