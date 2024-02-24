import { CardAdvantageModel } from './CardAdvantage.js';

import { Components } from '../../admin/component-loader.js';

import { deleteImage } from '../../admin/deleteImage.js';

export const CardAdvantageResource = {
  resource: CardAdvantageModel,
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
          edit: Components.EditAdvantageImage,
          show: Components.ShowAdvantageImage,
        },
      },
    },
    navigation: {},
  },
};
