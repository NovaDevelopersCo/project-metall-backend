import { BasePropertyProps } from 'adminjs';
import React from 'react';

const ShowProductImage = ({ record }: BasePropertyProps) => {
  return (
    <section className="section-show">
      <label className="label label-show">Image</label>
      <img className="image-preview" src={record.params.image} alt={record.params.title} />
    </section>
  );
};

export default ShowProductImage;
