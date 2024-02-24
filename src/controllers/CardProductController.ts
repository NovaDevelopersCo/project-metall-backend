import { CardProductModel } from '../entities/card-product/CardProduct.js';

import type { NextFunction, Request, Response } from 'express';

import { uploadImage } from '../services/uploadImage.js';

export class CardProductController {
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const allProducts = await CardProductModel.find();
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

  async deleteImage(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      next(e);
    }
  }
}
