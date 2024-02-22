import { CardProductModel } from '../entities/card-product/CardProduct.js';

import type { Request, Response } from 'express';

export class CardProductController {
    async getAllProducts(req: Request, res: Response) {
        try {
            const allProducts = await CardProductModel.find();

            console.log(allProducts)
        } catch (e) {
            console.log(e)
        }

    }
}