import mongoose from "mongoose";

import { FrameRecordStoreSchema } from '../interfaces/IStore';
import Frame from '../interfaces/IStore';

interface RecordStoreDocument extends Frame, mongoose.Document { }


const RecordStoreSchema = new mongoose.Schema<RecordStoreDocument>()

// ou

// const RecordStoreSchema = new mongoose.Schema<RecordStoreDocument>({
//   title: String,
//   artist: String,
//   format: String,
//   yearPublished: Number,
//   new: Boolean});

export default RecordStoreSchema;