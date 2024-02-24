import { v2 as cloudinary } from 'cloudinary';
import { ApiError } from '../api-error/ApiError.js';

export const uploadImage = (image: string, cardName: string, folder: 'advantage' | 'product') =>
  cloudinary.uploader.upload(
    image,
    {
      public_id: cardName,
      folder: folder === 'advantage' ? 'metall/advantages' : 'metall/products',
    },
    (err, res) => {
      if (err) {
        throw ApiError.badRequest(err.message);
      }

      return res;
    }
  );
