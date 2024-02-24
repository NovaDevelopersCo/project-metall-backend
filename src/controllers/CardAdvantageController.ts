import { CardAdvantageModel } from '../entities/card-advantage/CardAdvantage.js';

import type { NextFunction, Request, Response } from 'express';

import { uploadImage } from '../services/uploadImage.js';

export class CardAdvantageController {
  async getAllAdvantages(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await CardAdvantageModel.find();

      return res.json({ cards });
    } catch (e) {
      next(e);
    }
  }

  async uploadImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { image, name } = req.body as { image: string; name: string };

      const { secure_url } = await uploadImage(image, name, 'advantage');

      return res.json({ image: secure_url });
    } catch (e) {
      next(e);
    }
  }
}
