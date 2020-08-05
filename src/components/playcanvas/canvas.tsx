import React, { useRef, useEffect } from 'react';
import * as pc from 'playcanvas';

const Canvas: React.FC = () => {
  const canvasEl = useRef(null);
  useEffect(() => {
    if (process.browser) {
      const app = new pc.Application(canvasEl.current, {});

      app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
      app.setCanvasResolution(pc.RESOLUTION_AUTO);

      window.addEventListener('resize', () => app.resizeCanvas());

      const box = new pc.Entity('cube');
      box.addComponent('model', {
        type: 'box',
      });

      app.root.addChild(box);

      const camera = new pc.Entity('camera');

      camera.addComponent('camera', {});

      app.root.addChild(camera);

      camera.setPosition(0, 0, 3);

      const light = new pc.Entity('light');
      light.addComponent('light');

      app.root.addChild(light);
      light.setEulerAngles(45, 0, 0);
      app.on('update', (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt));
      app.start();
    }
  }, [canvasEl.current]);
  return <canvas ref={canvasEl} />;
};
export default Canvas;
