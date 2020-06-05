import React from "react";
import image from './images/img_forest.jpg'
import PinchZoomPan from "fungo-pinch-zoom-pan";

function PinchZoomPanComponentTest() {

  return (
    <div>
      <PinchZoomPan>
        <img src={image} alt="image"/>
      </PinchZoomPan>
    </div>
  )
}

export default PinchZoomPanComponentTest;