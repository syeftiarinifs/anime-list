import React from 'react';
import { cx, css } from '@emotion/css';
import { styStaticLoader } from './styles';

interface StaticLoaderProps {
  width: string;
  height: string; 
  marginBottom: string
}

const StaticLoader = ({ width, height, marginBottom }: StaticLoaderProps) => {
  const style = css`
    width: ${width};
    height: ${height};
    margin-bottom: ${marginBottom};
  `;

  const finalClassName = cx(styStaticLoader, style);

  return <div className={finalClassName}  />;
};


export default StaticLoader;
