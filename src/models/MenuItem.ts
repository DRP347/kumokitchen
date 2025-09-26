// src/models/MenuItem.ts
import mongoose, { Schema, Document, models } from 'mongoose';

export interface IMenuItem extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const MenuItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

export default models.MenuItem || mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);