import React from "react";
import image from './images/img_forest.jpg'
import PinchZoomPan from "react-responsive-pinch-zoom-pan/src/PinchZoomPan";

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