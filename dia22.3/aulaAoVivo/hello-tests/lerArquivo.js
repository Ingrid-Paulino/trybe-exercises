const fs = require('fs');

module.exports = { 
  // readFile: async (fileName) => {
  //   // try {
  //   //   const content = await fs.promises.readFile(fileName, 'utf-8');
  //   //   return content;
  //   // } catch (_e) {
  //   //   return null;
  //   // }

  //   // jeito 2
  //   const content = await fs.promises.readFile(fileName, 'utf-8')
  //     .catch((_e) => { return null });
  //   return content;
  // },

  lerArquivo: (fileName) => {
    return fs.promises.readFile(fileName, 'utf-8')
      .then((content) => { return content })
      .catch((_e) => { return null });
  }
};