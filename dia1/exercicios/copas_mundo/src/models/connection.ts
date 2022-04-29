import { connect } from 'mongoose';

// Qual forma esta correta?
// na url é mongodb ou mongosedb

// export default connect('mongoosedb://localhost:27017/world_cups')

const connection = (mongodatabaseURI = 'mongodb://localhost:27017/world_cups') => connect(mongodatabaseURI);

// OU 

// const connection = (uri: string) => {
//   try {
//     connect(uri);
//     console.log(`Conectado ao mongodb em: ${uri}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default connection;
