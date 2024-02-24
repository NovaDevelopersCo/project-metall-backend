import React from 'react';

import type { BasePropertyProps } from 'adminjs';

const ShowAdvantageImage = ({ record }: BasePropertyProps) => {
  return (
    <section className="section-show">
      <label className="label label-show">Image</label>
      <img className="image-preview" src={record.params.image} alt={record.params.title} />
    </section>
  );
};

export default ShowAdvantageImage;
