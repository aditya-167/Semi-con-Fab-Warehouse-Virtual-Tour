// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
 

  const customLocation = new Location([-70, -30, 50]);
  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e,r360,customLocation)
  );



  r360.renderToLocation(
  r360.createRoot('ArtGallery'),
  customLocation);

  r360.compositor.setBackground(r360.getAssetURL('img2.jpg'));
}
function onMessage(e,r360,customLocation){
  if(e.data.type==='newPosition'){
    customLocation.setWorldPosition(e.data.x,-30,e.data.z);
  }
  
}


window.React360 = {init};
