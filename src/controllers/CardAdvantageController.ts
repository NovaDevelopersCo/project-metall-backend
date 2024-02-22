import { CardAdvantageModel } from "../entities/card-advantage/CardAdvantage.js";

import type { Request, Response } from 'express';

export class CardAdvantageController {
    async getAllAdvantages(req: Request, res: Response) {
        try {
            const allCards = await CardAdvantageModel.find();

            console.log(allCards);

        } catch (e) {
            console.log(e);
        }
    }
}