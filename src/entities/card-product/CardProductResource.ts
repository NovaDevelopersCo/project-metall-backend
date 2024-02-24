import { Components } from '../../admin/component-loader.js';

import { CardProductModel } from './CardProduct.js';

import { deleteImage } from '../../admin/deleteImage.js';

export const CardProductResource = {
  resource: CardProductModel,
  options: {
    actions: {
      delete: {
        before: [deleteImage],
      },
    },
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
};
