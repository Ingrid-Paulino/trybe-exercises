import { expect } from "chai";
import Sinon from "sinon";
import ProfileModel from "../../../models/ProfileModel";
import { mockList, mockDocument } from '../mocks/profileMock';

describe('ProfileModel', () => {
  let profileModel = new ProfileModel();

  describe('#read', () => {
    before(() => {
      Sinon.stub(profileModel.model, 'find').resolves(mockList);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna uma lisa de perfis', async () => {
      const profiles = await profileModel.read();
      expect(profiles).to.be.deep.equal(mockList);
    });
  });

  describe('#readOne', () => {
    before(() => {
      Sinon.stub(profileModel.model, 'findOne').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna uma lisa de perfis', async () => {
      const profile = await profileModel.readOne(mockDocument._id);
      expect(profile).to.be.deep.equal(mockDocument);
    });
  });

  describe('#create', () => {
    before(() => {
      Sinon.stub(profileModel.model, 'create').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna o perfil criado', async () => {
      const profile = await profileModel.create(mockDocument);
      expect(profile).to.be.deep.equal(mockDocument);
    });
  });

  describe('#update', () => {
    before(() => {
      Sinon.stub(profileModel.model, 'findOneAndUpdate').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    });

    it('atualiza o perfil e retorna o perfil atualizado', async () => {
      const profileUpdated = await profileModel.update(mockDocument._id, mockDocument);
      expect(profileUpdated).to.be.deep.equal(mockDocument);
    })
  });

  describe('#delete', () => {
    before(() => {
      Sinon.stub(profileModel.model, 'findOneAndDelete').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    });

    it('remove o perfil e retorna o perfil removido', async () => {
      const profileDeleted = await profileModel.delete(mockDocument._id);
      expect(profileDeleted).to.be.deep.equal(mockDocument);
    })
  })
})