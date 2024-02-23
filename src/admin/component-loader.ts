import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const Components = {
  EditAdvantageImage: componentLoader.add('EditAdvantageImage', '../components/EditAdvantageImage.js'),
  ShowAdvantageImage: componentLoader.add('ShowAdvantageImage', '../components/ShowAdvantageImage.js'),
  EditProductImage: componentLoader.add('EditProductImage', '../components/EditProductImage.js'),
  ShowProductImage: componentLoader.add('ShowProductImage', '../components/ShowProductImage.js'),
};

export { componentLoader, Components };
