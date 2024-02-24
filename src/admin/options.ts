import { AdminJSOptions } from 'adminjs';

import { CardAdvantageResource } from '../entities/card-advantage/CardAdvantageResource.js';
import { CardProductResource } from '../entities/card-product/CardProductResource.js';

import { componentLoader } from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  assets: {
    styles: ['/static/index.css'],
  },
  resources: [CardAdvantageResource, CardProductResource],
  databases: [],
};

export default options;
