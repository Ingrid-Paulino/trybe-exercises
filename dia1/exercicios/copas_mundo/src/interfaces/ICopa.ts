import { Types } from 'mongoose';

export interface ICopa extends Document {
  // id: Types.ObjectId ,
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: Array<string>,
  bestPlayer?: string,
  bestGoalkeeper?: string,
  bestYoungPlayer?: string,
}