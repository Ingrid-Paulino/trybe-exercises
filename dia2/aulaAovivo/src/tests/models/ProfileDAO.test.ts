import { expect } from "chai";
import Sinon from "sinon";
import IProfile from '../../../interfaces/IProfile';
import ProfileDAO from '../../../models/ProfileDAO';

describe('ProfileDAO', () => {
  let profileDAO = new ProfileDAO();

  const profileMock = {
    _id: '1',
    username: '@rl',
    followers: 100,
    following: 100,
  }

  const mockProfiles = [profileMock];

  describe('#read', () => {
    before(() => {
      Sinon.stub(profileDAO.model, 'find').resolves(mockProfiles);
    });

    after(() => {
      Sinon.restore();
    })

    it('retornar uma lista', async() => {
      const profiles = await profileDAO.read();
      expect(profiles).to.deep.eq(mockProfiles);
    });
  });

  describe('#create', () => {
    before(() => {
      Sinon.stub(profileDAO.model, 'create').resolves(profileMock);
    });

    after(() => {
      Sinon.restore();
    });

    it('deve retornar um objeto', async () => {
      const profile = await profileDAO.create(profileMock);
      expect(profile).to.deep.equal(profileMock);
    })
  });

  describe('#readById', () => {
    describe('quando existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findById').resolves(profileMock);
      });
  
      after(() => {
        Sinon.restore();
      })
  
      it('deve retornar um objeto', async () => {
        const profile = await profileDAO.readById(profileMock._id);
        expect(profile).to.deep.equal(profileMock);
      })
    });

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findById').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await profileDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findById').resolves(null);
      });
  
      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await profileDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })
    
  });

  // describe('#readById', () => {
  //   describe('quando existe o documento', () => {
  //     before(() => {
  //       Sinon.stub(profileDAO.model, 'findById').resolves(profileMock);
  //     });
  
  //     after(() => {
  //       Sinon.restore();
  //     })
  
  //     it('deve retornar um objeto', async () => {
  //       const profile = await profileDAO.readById(profileMock._id);
  //       expect(profile).to.deep.equal(profileMock);
  //     })
  //   });

  //   describe('quando não existe o documento', () => {
  //     before(() => {
  //       Sinon.stub(profileDAO.model, 'findById').resolves(null);
  //     });

  //     after(() => {
  //       Sinon.restore();
  //     });

  //     it('deve retornar null', async () => {
  //       const profile = await profileDAO.readById('9999');
  //       expect(profile).to.be.null;
  //     })
  //   })

  //   describe('quando não existe o documento', () => {
  //     before(() => {
  //       Sinon.stub(profileDAO.model, 'findById').resolves(null);
  //     });
  
  //     after(() => {
  //       Sinon.restore();
  //     });

  //     it('deve retornar null', async () => {
  //       const profile = await profileDAO.readById('9999');
  //       expect(profile).to.be.null;
  //     })
  //   })
    
  // });


  describe('#update', () => {
    const profileUpdated = { 
      _id: '1',
      username: '@reeli',
      following: 2000, 
      followers: 300,
    }

    describe('quando existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findByIdAndUpdate').resolves(profileUpdated);
      });
  
      after(() => {
        Sinon.restore();
      });

    
  
      it('deve retornar um objeto', async () => {
        const profile = await profileDAO.update(profileMock._id, profileUpdated);
        expect(profile).to.deep.equal(profileUpdated);
      })
    });

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findByIdAndUpdate').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await profileDAO.update('9999', profileUpdated);
        expect(profile).to.be.null;
      })
    })

    describe('quando não existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findById').resolves(null);
      });
  
      after(() => {
        Sinon.restore();
      });

      it('deve retornar null', async () => {
        const profile = await profileDAO.readById('9999');
        expect(profile).to.be.null;
      })
    })
    
  });
})