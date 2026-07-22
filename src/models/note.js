import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';


const allowedTags = TAGS;


const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: false,
    default: '',
    trim: true,
  },
  tag: {
    type: String,
    enum: allowedTags,
    default: 'Todo',
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export const Note = model('Note', NoteSchema);
