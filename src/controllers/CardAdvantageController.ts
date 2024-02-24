import { CardAdvantageModel } from '../entities/card-advantage/CardAdvantage.js';

import type { NextFunction, Request, Response } from 'express';

import { uploadImage } from '../services/uploadImage.js';

export class CardAdvantageController {
  async getAllAdvantages(req: Request, res: Response, next: NextFunction) {
    try {
      const allCards = await CardAdvantageModel.find();
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
      console.log(e);
      next(e);
    }
  }

  async deleteImage(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      next(e);
    }
  }
}
