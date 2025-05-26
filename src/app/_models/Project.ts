// v5gd8NudpazGTqFK password

import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IProject extends Document {
  id: string;
  name: string;
  description: string;
  overview: string;
  imageUrl: string;
  skills: string[];
}

const ProjectSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  overview: { type: String, required: true },
  imageUrl: { type: String, required: true },
  skills: [{ type: String, required: true }],
});

const Project = models.Project || model<IProject>("Project", ProjectSchema);

export default Project;
