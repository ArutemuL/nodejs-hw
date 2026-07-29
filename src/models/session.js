import { model, Schema } from 'mongoose';

const SessionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  accesstoken: { type: String, required: true },
  refreshtoken: { type: String, required: true },
  accessTokenValidUntil: { type: Date, required: true },
  refreshTokenValidUntil: { type: Date, required: true },
},
  { timestamps: true, versionKey: false },
);

export const Session = model('Session', SessionSchema);
