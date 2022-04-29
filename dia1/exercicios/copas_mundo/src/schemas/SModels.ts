import { Schema, Document, Types } from 'mongoose';
import { ICopa } from '../interfaces/ICopa';

const copaSchema = new Schema<ICopa>({
  // id: { type: Types.ObjectId },
  year: { type: Number, required: true},
  hostCountry: { type: String, required: true},
  champions: { type: String, required: true},
  runnerUp: { type: String, required: true},
  editionGoals: { type: Number, required: true},
  editionStrikers: { type: [{type: String}], required: true},
  bestPlayer: { type: String, required: false},
  bestGoalkeeper: { type: String, required: false},
  bestYoungPlayer: { type: String, required: false},
});

export default copaSchema;