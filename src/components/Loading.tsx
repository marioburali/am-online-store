import React from 'react';
import { ClipLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <ClipLoader />
    </div>
  );
}

export default Loading;
