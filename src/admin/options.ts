import { AdminJSOptions } from 'adminjs';

import { CardProductModel } from '../entities/card-product/CardProduct.js';

import { CardAdvantageModel } from '../entities/card-advantage/CardAdvantage.js';

import { Components, componentLoader } from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  assets: {
    styles: ['/static/index.css'],
  },
  resources: [
    {
      resource: CardProductModel,
      options: {
        properties: {
          image: {
            type: 'string',
            components: {
              edit: Components.EditProductImage,
              show: Components.ShowProductImage,
            },
          },
        },
        navigation: {},
      },
    },
    {
      resource: CardAdvantageModel,
      options: {
        properties: {
          image: {
            type: 'string',
            components: {
              edit: Components.EditAdvantageImage,
              show: Components.ShowAdvantageImage,
            },
          },
        },
        navigation: {},
      },
    },
  ],
  databases: [],
};

export default options;
