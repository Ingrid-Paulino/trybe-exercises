import { model as createModel } from 'mongoose';
import { ICopa } from '../interfaces/ICopa';
import copaSchema from '../schemas/SModels';

class CopaModel {
  // public model;

  constructor(public copaModel = createModel<ICopa>('tournaments', copaSchema)) {}

  // constructor() {
  //   this.model = mongoose.model('Profile', ProfileSchema);
  // }

  public async read(): Promise<ICopa[] | undefined> {
    const copas = await this.copaModel.find();
    return copas; 
  }

  public async readByYear(year: number): Promise<ICopa[] | undefined> {
    const copa = await this.copaModel.find({ year });
    return copa; 
  } 

  public async create(body: ICopa): Promise<ICopa[] | undefined| unknown> {
    const copa = await this.copaModel.create(body);
    return copa; 
  } 

  public async update(updateData: object, year: number): Promise<object | undefined> {
    const copa = await this.copaModel.updateOne({ year }, { ...updateData });
    return copa; 
  }


  public async delete(year: number): Promise<object | undefined> {
    const copa = await this.copaModel.deleteOne({ year });
    return copa; 
  } 

  public async filtroUp(term: string): Promise<ICopa[] | null> {
    const copa = await this.copaModel.find(
      { filtro: { $regex: term, $options: 'i' } },
    );
    return copa;
  }
}
// qual a diferença desse para o de cima:
// const copaModel = model<ICopa>('tournaments', copaSchema);

export default CopaModel;