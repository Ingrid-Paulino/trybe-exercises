import mongoose from 'mongoose';

import { IProfile } from '../interfaces/IProfile';

const ProfileSchema = new mongoose.Schema<IProfile>();

export default ProfileSchema;