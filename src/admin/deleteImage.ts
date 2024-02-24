import { ActionProps } from 'adminjs';

import { Request } from 'express';

import { v2 as cloudinary } from 'cloudinary';

export const deleteImage = (req: Request, ctx: ActionProps) => {
  const { resourceId } = req.params as { resourceId: string; recordId: string };

  const { title } = ctx.record.params;

  const imageId = resourceId === 'CardAdvantage' ? `metall/advantages/${title}` : `metall/products/${title}`;

  cloudinary.uploader.destroy(imageId, (err, res) => {
    if (err) {
      console.log(`${err}, Please, write to developers, Name: ${title}`);
    }
  });

  return req;
};
