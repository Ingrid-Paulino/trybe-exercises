import { expect } from "chai";
import Sinon from "sinon";
import ProfileService from "../../../services/ProfileService";
import { mockList, mockDocument } from '../mocks/profileMock';

describe('ProfileService', () => {
  let profileService = new ProfileService();

  describe('#read', () => {
    before(() => {
      Sinon.stub(profileService.model, 'read').resolves(mockList);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna uma lista de perfis', async () => {
      const profiles = await profileService.read();
      expect(profiles).to.be.deep.equal(mockList);
    });
  });

  describe('#create', () => {
    before(() => {
      Sinon.stub(profileService.model, 'create').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna o perfil criado', async () => {
      const profile = await profileService.create(mockDocument);
      expect(profile).to.be.deep.equal(mockDocument);
    });
  });

  describe('#readOne', () => {
    before(() => {
      Sinon.stub(profileService.model, 'readOne').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna um perfil', async () => {
      const profile = await profileService.readOne(mockDocument._id);
      expect(profile).to.be.deep.equal(mockDocument);
    });
  });

  describe('#update', () => {
    before(() => {
      Sinon.stub(profileService.model, 'update').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna o perfil atualizado', async () => {
      const profile = await profileService.update(mockDocument._id, mockDocument);
      expect(profile).to.be.deep.equal(mockDocument);
    });
  });

  describe('#delete', () => {
    before(() => {
      Sinon.stub(profileService.model, 'delete').resolves(mockDocument);
    });

    after(() => {
      Sinon.restore();
    })

    it('retorna o perfil removido', async () => {
      const profile = await profileService.delete(mockDocument._id);
      expect(profile).to.be.deep.equal(mockDocument);
    });
  });
})