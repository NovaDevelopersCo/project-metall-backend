import type { TCardAdvantage } from "./types.js";
import { Schema, model } from "mongoose";

const CardAdvantage = new Schema<TCardAdvantage>({
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true, unique: true },
    description: { type: String, required: true }
})

export const CardAdvantageModel = model<TCardAdvantage>("CardAdvantage", CardAdvantage)