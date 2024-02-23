import React from 'react';

export const Image = ({
  activeUrl,
  uploadedUrl,
  isLoading,
}: {
  activeUrl: string;
  uploadedUrl: string;
  isLoading: boolean;
}) => {
  return (
    <div className="image-preview-body">
      <img
        src={uploadedUrl || activeUrl}
        alt="product"
        className={isLoading ? 'image-preview image-preview-loading' : 'image-preview '}
      />
      <ImageLoader isLoading={isLoading} />
    </div>
  );
};

const ImageLoader = ({ isLoading }: { isLoading: boolean }) => {
  console.log(isLoading);

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isLoading ? 'image-preview-loader image-preview-loader-visible' : 'image-preview-loader'}
    >
      <path d="M12 3L12 6" stroke="#d1d1d3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 12L18 12" stroke="#d1d1d3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 21L12 18" stroke="#d1d1d3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3 12L6 12" stroke="#d1d1d3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M5.63586 5.63605L7.75718 7.75737"
        stroke="#d1d1d3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3639 5.63605L16.2426 7.75737"
        stroke="#d1d1d3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3641 18.3639L16.2428 16.2426"
        stroke="#d1d1d3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.63623 18.3639L7.75755 16.2426"
        stroke="#d1d1d3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
