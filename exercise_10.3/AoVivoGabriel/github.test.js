const github = require('./github');
const { getRepositoryInfoFromUsername, getUserReposUrl } = github;
const fetch = require('node-fetch');

jest.mock('node-fetch');

//Assim seria se focemos usar promise
// describe('When calling getRepositoryInfoFromUsename function', () => {
//   it('Should parse the response into an object with name, company, location and twitter', async () => {

//     expect.assertions(1);

//     getRepositoryInfoFromUsername('gfpoliva')
//       .then((repositoryInfo) => {
//         expect(repositoryInfo).toEqual({
//           name: 'gfpoliva',
//           company: '@betrybe',
//           twitter_Username: 'gfpoliva',
//           location: 'Belo Horizonte'
//         });
//       })
//   })
// })


describe('When calling getRepositoryInfoFromUsename function', () => {
  it('Should parse the response into an object with name, company, location and twitter', async () => {

    expect.assertions(1);

    //TEMOS QUE MOCKAR A FUNÇÃO getRepositoryInfoFromUsername

    fetch.mockImplementation(async () => {
      return {
        json: async () => {
          return {
          name: 'gfpoliva',
          company: '@betrybe',
          twitter_username: 'gfpoliva',
          location: 'Belo Horizonte'
          }
        }
      }
    });


    const repositoryInfo = await getRepositoryInfoFromUsername('gfpoliva');

    expect(repositoryInfo).toEqual({
      name: 'gfpoliva',
      company: '@betrybe',
      twitter: 'gfpoliva',
      location: 'Belo Horizonte'
    });

  })


  it('should call a function named getUserReposUrl', () => {
    const  spiedGetUserReposUrl = jest.spyOn(github, 'getUserReposUrl');

    spiedGetUserReposUrl('xablau');

    expect(spiedGetUserReposUrl).toHaveBeenCalledTimes(1);

    expect(spiedGetUserReposUrl('xablau')).toBe('https://api.github.com/users/xablau');

    spiedGetUserReposUrl('victormartins');

    expect(spiedGetUserReposUrl).toHaveBeenCalledWith('victormartins');
  });
})