import type { BasePropertyProps } from 'adminjs';
import { convertToBase64 } from '../admin/convertToBase64.js';

import { $api } from './http.js';

export const uploadImage = async (
  file: File,
  setIsLoading: (l: boolean) => void,
  setImageUrl: (u: string) => void,
  setUploadedUrl: (u: string) => void,
  baseProps: BasePropertyProps,
  entity: 'advantage' | 'product'
) => {
  const { onChange, record } = baseProps;

  const convertedFile = await convertToBase64(file);

  setIsLoading(true);
  $api
    .post<{ image: string }>(`/${entity === 'advantage' ? 'advantages' : 'products'}/image`, {
      image: convertedFile,
      name: record.params.title,
    })
    .then((res) => {
      const { image } = res.data;
      setImageUrl(image);
      onChange('image', image);
    })
    .catch((err) => {
      alert(err);
      setUploadedUrl('');
    })
    .finally(() => setIsLoading(false));
};
