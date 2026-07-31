import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  avatar: {
      type: String,
      required: false,
      default: "https://ac.goit.global/fullstack/react/default-avatar.jpg",
    },
},
  { timestamps: true, versionKey: false }
);

UserSchema.pre('save', function (next) {
  if (!this.username) {
    this.username = this.email;
  }
  next();
});

UserSchema.methods.toJSON = function ()  {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = model('User', UserSchema);
