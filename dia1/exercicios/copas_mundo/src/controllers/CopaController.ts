import { Request, Response } from 'express';
import CopaService from '../services/CopaService';

class CopaController {
  constructor(private copaService = new CopaService()) {}

  internalError = 'Internal server error';
  notFound = 'Copa not found';

  public read = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const copas = await this.copaService.read();
      return res.status(200).json(copas)
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError })
    }
  }

  public readByYear = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { year } = req.params;
    console.log(req.body);
    
    try {
      const copa = await this.copaService.readByYear(+year);
      if (copa?.length === 0) return res.status(404).json({message: this.notFound })
      return res.status(200).json(copa)
    } catch (err: unknown) {
      return res.status(500).json({ message: this.internalError })
    }
  }

  public create = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { body } = req;
    
    try {
      const copa = await this.copaService.create(body);
      return res.status(201).json(copa)
    } catch ({ _message }) {
      if (_message === 'Tournaments validation failed') {
        return res.status(400).send(_message);
      }
      return res.status(500).json({ message: this.internalError })
    }
  }

  public update = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    // Não entendi esse update
    const { body: updateData, params: { year }} = req;
    
    try {
      const copa = await this.copaService.update(updateData, Number(year));
      return res.status(200).json(copa)
    } catch (error) {
      return res.status(500).json({ message: this.internalError })
    }
  }

  public delete = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { year } = req.params;
 
    try {
      const copa = await this.copaService.delete(+year);
      return res.status(200).json(copa)
    } catch (error) {
      return res.status(500).json({ message: this.internalError })
    }
  }

  public filtroUp = async (req: Request, res: Response):
Promise<Response> => {
  console.log('oii1');
  
  try {
    const { runnerUp } = req.query;
    if (typeof runnerUp !== 'string') {
      return res.status(400).send({ message: 'Bad request' });
    }
    const country = await this.copaService.filtroUp(runnerUp);
    return res.status(200).send(country);
  } catch (err: unknown) {
    return res.status(500).send({ message: this.internalError });
  }
};
}

export default CopaController;