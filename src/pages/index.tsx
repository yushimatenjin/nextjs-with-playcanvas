import React, { useRef, useEffect } from 'react';
import * as pc from 'playcanvas';

const Page: React.FC = () => {
  const canvasEl = useRef(null);
  useEffect(() => {
    if (process.browser) {
      const app = new pc.Application(canvasEl.current, {
          
      });
      app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
      app.setCanvasResolution(pc.RESOLUTION_AUTO);

      // ensure canvas is resized when window changes size
      window.addEventListener('resize', () => app.resizeCanvas());

      // create box entity
      const box = new pc.Entity('cube');
      box.addComponent('model', {
        type: 'box',
      });
      app.root.addChild(box);

      // create camera entity
      const camera = new pc.Entity('camera');
      camera.addComponent('camera', {
      });
      app.root.addChild(camera);
      camera.setPosition(0, 0, 3);

      // create directional light entity
      const light = new pc.Entity('light');
      light.addComponent('light');
      app.root.addChild(light);
      light.setEulerAngles(45, 0, 0);

      // rotate the box according to the delta time since the last frame
      app.on('update', (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt));

      app.start();
    }
  }, [canvasEl.current]);
  return <canvas ref={canvasEl} />;
};
export default Page;
