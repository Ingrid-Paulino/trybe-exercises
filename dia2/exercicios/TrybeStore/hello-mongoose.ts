import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/InstaTrybe');

const ProfileSchema = new mongoose.Schema({ 
  username: String,
  followers: Number,
  following: Number,
});

const profileModel = mongoose.model('Profile', ProfileSchema);

// inserir
profileModel.create({ 
  _id: 1,
  username: '@rl',
  followers: 5000,
  following: 1000,
});

// listar
profileModel.find().then((data) => console.log(data));

// buscar
profileModel.findOne({ _id: 1 }).then((data) => console.log(data));

// editar
profileModel.findOneAndUpdate({ _id: '1' }, { followeres: 100 });

// remover
profileModel.findOneAndDelete({ _id: '1' });