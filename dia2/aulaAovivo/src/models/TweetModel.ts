import { Schema, model as createModel } from 'mongoose';
import ITweet from '../interfaces/ITweet';
import GenericModel from './GenericModel';

const TweetSchema = new Schema<ITweet>({
  text: String,
  likes: Number,
  retweets: Number,
});

export default class TweetModel extends GenericModel<ITweet> {
  constructor(public model = createModel('Tweet', TweetSchema)) {
    super(model);
  }
}