import React from 'react';

interface IframeProps {
  src: string;
  width?: string;
  height?: string;
  title: string;
}

export const Iframe: React.FC<IframeProps> = ({ src, width = '100%', height = '100%', title }) => {
  const handleIframeLoad = () => {
  };

  return (

    <iframe
      src={src}
      width={width}
      height={height}
      title={title}
      onLoad={handleIframeLoad}
    >

    </iframe >
  );
};


