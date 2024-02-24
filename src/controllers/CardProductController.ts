import { CardProductModel } from '../entities/card-product/CardProduct.js';

import type { NextFunction, Request, Response } from 'express';

import { uploadImage } from '../services/uploadImage.js';

export class CardProductController {
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await CardProductModel.find();

      return res.json({ products });
    } catch (e) {
      next(e);
    }
  }

  async uploadImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { image, name } = req.body as { image: string; name: string };

      const { secure_url } = await uploadImage(image, name, 'product');

      return res.json({ image: secure_url });
    } catch (e) {
      next(e);
    }
  }
}
