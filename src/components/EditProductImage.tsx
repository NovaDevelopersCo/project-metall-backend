import React, { useState, type ChangeEvent } from 'react';

import type { BasePropertyProps } from 'adminjs';

import { Image } from './Image.js';

import { uploadImage } from '../api/uploadImage.js';

const EditProductImage = (props: BasePropertyProps) => {
  const [imageUrl, setImageUrl] = useState<string>(props.record.params.image);

  const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setUploadedUrl(URL.createObjectURL(e.target.files[0]));
    uploadImage(e.target.files[0], setIsLoading, setImageUrl, setUploadedUrl, props, 'product');
  };

  return (
    <section className="section-edit">
      <label htmlFor="#get-image" className="label label-edit">
        <span>*</span>
        Image
      </label>
      <Image isLoading={isLoading} uploadedUrl={uploadedUrl} activeUrl={imageUrl} />
      <label htmlFor="#get-image" className={isLoading ? 'image-button image-button-loading' : 'image-button'}>
        Upload
      </label>
      <input className="image-input" type="file" id="#get-image" onChange={changeImage} />
    </section>
  );
};

export default EditProductImage;
