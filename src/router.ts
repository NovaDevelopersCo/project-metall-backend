import { Router } from 'express';

import { CardAdvantageController } from './controllers/CardAdvantageController.js';
import { CardProductController } from './controllers/CardProductController.js';

const advantagesController = new CardAdvantageController();
const productsController = new CardProductController();

const appRouter = Router();

appRouter.get('/advantages', advantagesController.getAllAdvantages);
appRouter.get('/products', productsController.getAllProducts);

export { appRouter };
