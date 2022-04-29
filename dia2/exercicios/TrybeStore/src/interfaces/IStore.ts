import { z } from 'zod';
// export interface IStore {
//   artist: String,
//   title: String,
//   format: String,
//   yearPublished: Number,
//   new: Boolean
// }

const FrameRecordStoreSchema = z.object({
  artist: z.string({
    required_error: 'artist is required',
    invalid_type_error: 'artist must be a string',
  }).min(3, { message: 'artist must be 3 or more characters long' }),
  title: z.string(),
  format: z.string(),
  yearPublished: z.number(),
  new: z.boolean(),
}) 

type Frame = z.infer<typeof FrameRecordStoreSchema>;

export default Frame;
export { FrameRecordStoreSchema };