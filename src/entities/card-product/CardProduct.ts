import { Schema, model } from 'mongoose';

import type { TCardProduct } from './types.js';

const CardProduct = new Schema<TCardProduct>({
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String },
    count: { type: Number, default: 0 }
});

export const CardProductModel = model<TCardProduct>("CardProduct", CardProduct)