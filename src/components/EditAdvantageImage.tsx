import React, { useState, useEffect, ChangeEvent, useRef } from 'react';

import type { TComponentProps } from '../types.js';

const EditAdvantageImage = ({ onChange, record }: TComponentProps) => {
  const [activeUrl, setActiveUrl] = useState<string>(
    record.params.image ||
      'https://i.pinimg.com/736x/e0/9e/cd/e09ecda9147860599156aeb741451bf2--treehouses-food-networktrisha.jpg'
  );

  const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const deleteImage = () => {
    setUploadedUrl('');
    imageInputRef.current.value = null;
  };

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
      <img src={uploadedUrl || activeUrl} alt="product" className="image-preview" />
      <div className="buttons-container">
        <label htmlFor="#get-image" className="image-button image-upload-button">
          Upload
        </label>
        <button onClick={deleteImage} type="button" className="image-button image-delete-button">
          Delete
        </button>
      </div>
      <input ref={imageInputRef} className="image-input" type="file" id="#get-image" onChange={changeImage} />
    </section>
  );
};

export default EditAdvantageImage;
