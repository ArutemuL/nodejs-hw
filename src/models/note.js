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

NoteSchema.index(
  { title: 'text', content: 'text' },
  { weights: { title: 5, content: 2 } },
  { name: "NoteSchemaIndex"},
  { default_language: "english" }
);

export const Note = model('Note', NoteSchema);
