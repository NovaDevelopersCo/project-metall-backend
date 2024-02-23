import React, { useState, type ChangeEvent } from 'react';

import type { BasePropertyProps } from 'adminjs';

import { Image } from './Image.js';

const EditProductImage = ({ record }: BasePropertyProps) => {
  const [activeUrl, setActiveUrl] = useState<string>(
    record.params.image ||
      'https://i.pinimg.com/736x/e0/9e/cd/e09ecda9147860599156aeb741451bf2--treehouses-food-networktrisha.jpg'
  );

  const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setUploadedUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <section className="section-edit">
      <label htmlFor="#get-image" className="label label-edit">
        <span>*</span>
        Image
      </label>
      <Image isLoading={isLoading} uploadedUrl={uploadedUrl} activeUrl={activeUrl} />
      <label htmlFor="#get-image" className={isLoading ? 'image-button image-button-loading' : 'image-button'}>
        Upload
      </label>
      <input className="image-input" type="file" id="#get-image" onChange={changeImage} />
    </section>
  );
};

export default EditProductImage;
