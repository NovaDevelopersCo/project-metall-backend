import React, { useState, useEffect } from 'react';

import type { TComponentProps } from '../types.js';

const EditProductImage = ({ onChange, record }: TComponentProps) => {
  const [activeUrl, setActiveUrl] = useState<string>(
    record.params.image ||
      'https://i.pinimg.com/736x/e0/9e/cd/e09ecda9147860599156aeb741451bf2--treehouses-food-networktrisha.jpg'
  );

  const deleteImage = () => {};

  useEffect(() => {}, []);

  return (
    <section className="section-edit">
      <label htmlFor="#get-image" className="label label-edit">
        <span>*</span>
        Image
      </label>
      <img src={activeUrl} alt="product" className="image-preview" />
      <div className="buttons-container">
        <label htmlFor="#get-image" className="image-button image-upload-button">
          Upload
        </label>
        <button type="submit" onClick={deleteImage} className="image-button image-delete-button">
          Delete
        </button>
      </div>
      <input className="image-input" type="file" id="#get-image" />
    </section>
  );
};

export default EditProductImage;
