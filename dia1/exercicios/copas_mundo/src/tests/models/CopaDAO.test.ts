import { expect } from 'chai';
import Sinon from 'sinon';
import { ICopa } from '../../interfaces/ICopa';
import CopaModel from '../../models/CopaModel';

describe('Copa Mundo', () => { 
  let copaDAO = new CopaModel() ;

  const copaMock = 	{
		_id: "6251762b223a15c2d5ec5269",
		year: 2018,
		hostCountry: "Russia",
		champions: "France",
		runnerUp: "Croatia",
		editionGoals: 169,
		editionStrikers: [
			"Harry Kane"
		],
		bestPlayer: "Luka Modric",
		bestGoalkeeper: "Thibaut Courtois",
		bestYoungPlayer: "Kylian Mbappe"
	}

  const mockCopas = [copaMock];

  describe('read', () => { 
    before(() => {
      Sinon.stub(copaDAO.copaModel, 'find').resolves(mockCopas)
    })
   })




 })
