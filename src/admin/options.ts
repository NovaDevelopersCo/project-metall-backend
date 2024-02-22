import { AdminJSOptions } from 'adminjs';

import { CardProductModel } from '../entities/card-product/CardProduct.js';

import { CardAdvantageModel } from '../entities/card-advantage/CardAdvantage.js';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    {
      resource: CardProductModel,
      options: {
        navigation: {}
      }
    },
    {
      resource: CardAdvantageModel,
      options: {
        navigation: {}
      }
    }
  ],
  databases: [],
};

export default options;
