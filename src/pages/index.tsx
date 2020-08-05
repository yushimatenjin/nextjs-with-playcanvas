import React from 'react';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('../components/playcanvas/canvas'), {
  ssr: false,
});

const Page: React.FC = () => {
  return <Canvas />;
};
export default Page;
