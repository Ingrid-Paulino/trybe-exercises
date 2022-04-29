import CopaModel from '../models/CopaModel';
import { ICopa } from '../interfaces/ICopa';

class CopaService {
  constructor(private copaModel = new CopaModel()) {}

  public async read(): Promise<ICopa[] | undefined > {
    // const copas = await this.copaModel.find();
    const copas = await this.copaModel.read();
    return copas;
  }

  public async readByYear(year: number): Promise<ICopa[] | undefined > {
    const copa = await this.copaModel.readByYear(year);
    return copa;
  }

  public async create(body: ICopa): Promise<ICopa[] | undefined | unknown> { 
    const copa = await this.copaModel.create(body);
    return copa;
  }

  public async update( updateData: object, year: number): Promise<object | undefined > { 
    const copa = await this.copaModel.update(updateData, year);
    return copa;
  }

  public async delete(year: number): Promise<object | undefined> { 
    const copa = await this.copaModel.delete(year);
    return copa;
  }

  public async filtroUp(country: string): Promise<ICopa[] | null> {
    console.log('oii2');
    
    const copa = await this.filtroUp(country);
    if (!copa || copa.length === 0) {
      return null;
    }
    return copa;
  }
}

export default CopaService;