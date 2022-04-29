
  
import { expect } from "chai";
import mongoose from "mongoose";
import Sinon from "sinon";
import IProfile from "../../../interfaces/IProfile";
import GenericDAO from "../../../models/GenericDAO";

describe('GenericDAO', () => {
  const GenericSchema = new mongoose.Schema({ title: String });
  let genericDAO = new GenericDAO(mongoose.model('Generic', GenericSchema));

  const profileMock = {
    _id: '1',
    title: 'abc',
  }

  const mockProfiles = [profileMock];

  describe('#read', () => {
    before(() => {
      Sinon.stub(genericDAO.model, 'find').resolves(mockProfiles);
    });

    after(() => {
      Sinon.restore();
    })

    it('retornar uma lista', async() => {
      const profiles = await genericDAO.read();
      expect(profiles).to.deep.eq(mockProfiles);
    });
  });

  describe('#create', () => {
    before(() => {
      Sinon.stub(genericDAO.model, 'create').resolves(profileMock);
    });

    after(() => {
      Sinon.restore();
    });

    it('deve retornar um objeto', async () => {
      const profile = await genericDAO.create(profileMock);
      expect(profile).to.deep.equal(profileMock);
    })
  });

  describe('#readById', () => {
    describe('quando existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(profileMock);
      });
  
      after(() => {
        Sinon.restore();
      })
  
      it('deve retornar um objeto', async () => {
        const profile = await genericDAO.readById(profileMock._id);
        expect(profile).to.deep.equal(profileMock);
      })
    });

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await genericDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(null);
      });
  
      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await genericDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })
    
  });

  describe('#update', () => {
    const profileUpdated = { 
      _id: '1',
      username: '@reeli',
      following: 2000, 
      followers: 300,
    }

    describe('quando existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findByIdAndUpdate').resolves(profileUpdated);
      });
  
      after(() => {
        Sinon.restore();
      });

    
  
      it('deve retornar um objeto', async () => {
        const profile = await genericDAO.update(profileMock._id, profileUpdated);
        expect(profile).to.deep.equal(profileUpdated);
      })
    });

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findByIdAndUpdate').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await genericDAO.update('9999', profileUpdated);
        expect(profile).to.be.null;
      })
    })

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(null);
      });
  
      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await genericDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })
    
  });

  describe('#delete', () => {
    describe('quando existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findByIdAndDelete').resolves(profileMock);
      });
  
      after(() => {
        Sinon.restore();
      })
  
      it('deve retornar um objeto', async () => {
        const profile = await genericDAO.delete(profileMock._id);
        expect(profile).to.deep.equal(profileMock);
      })
    });

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findByIdAndDelete').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await genericDAO.delete('9999');
        expect(profile).to.be.null;
      })
    })

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(null);
      });
  
      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await genericDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })
    
  });
})