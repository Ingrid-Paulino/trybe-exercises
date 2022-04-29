import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/InstaTrybeT14');

const ProfileSchema = new mongoose.Schema({
  username: String,
  followers: Number,
  following: Number,
});

const model = mongoose.model('Profile', ProfileSchema);

async function run() {
  // await model.create({ username: '@renatofh', followers: 500, following: 700 });

  // const profiles = await model.find();
  // console.log(profiles);

  const profile = await model.findById('624f3ea046afcedfc9045f0b');
  console.log(profile);
}

run();