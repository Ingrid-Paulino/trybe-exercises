import RecordStoreModel from "../models/RecordStore";
import Frame, { FrameRecordStoreSchema } from "../interfaces/IStore";
import GenericService, { ServiceError } from "./GenericService";

export default class RecordStoreService extends GenericService<Frame> {
  constructor(public model = new RecordStoreModel()) {
    super(model);
  }

  create = async (obj: Frame):Promise<Frame | ServiceError | null> => {
    const parsed = FrameRecordStoreSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}