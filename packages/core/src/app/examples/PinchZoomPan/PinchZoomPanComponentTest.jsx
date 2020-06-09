import React from "react";
import image from '../images/img_forest.jpg'
import PinchZoomPan from "@groupefungo/react-responsive-pinch-zoom-pan";
import useUiContext from '../../../ui/UseContext';
import { Stage, Layer, Image, Arrow } from 'react-konva';
import icnSwitch from '../images/icn_switch.svg';
import {DraggableItem} from './DraggableItem';

function PinchZoomPanComponentTest() {
  const [numberItem, setNumberItem] = React.useState(0)
  const [items, setItems] = React.useState([]);
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const {Box, Button} = useUiContext();
  const imageHeight = 1000;
  const imageWidth = 1000;

  const updatedPlansItems = (plansItem) => {
    const newPlansItems = items.filter((e) => e.id !== plansItem.id || e.key !== plansItem.key);
    setItems(
      newPlansItems.concat([
        {
          id: plansItem.id,
          planId: plansItem.planId,
          itemId: plansItem.itemId,
          iconX: plansItem.iconX,
          iconY: plansItem.iconY,
          src: plansItem.src,
          key: plansItem.key,
          iconDraggable: plansItem.iconDraggable,
          iconClassName: plansItem.iconClassName,
        },
      ]),
    );
  };

  const handleOnDrop = (e) => {
    console.log('handleOnDrop', e);
    setNumberItem(numberItem + 1);
    // register event position
    stageRef.current.setPointersPositions(e);
    // add item
    setItems(
      items.concat([
        {
          iconX: stageRef.current.getPointerPosition().x,
          iconY: stageRef.current.getPointerPosition().y,
          src: dragUrl.current,
          key: numberItem,
          iconDraggable: true,
          iconClassName: 'Image',
        },
      ]),
    );
  };
  console.log('items', items);
  return (
    <div>
      <div style={{width: '100%', minHeight: 500, height: '60vh', overflow: 'hidden'}}>
        <PinchZoomPan position="center">
          <div style={{width: 1000, height: 'auto'}}>
          <Box
            style={{
              border: 'solid 1px',
              height: `${imageHeight}px`,
              width: `${imageWidth}px`,
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <DraggableItem
              stageRef={stageRef}
              items={items}
              parentWidth={imageWidth}
              parentHeight={imageHeight}
              updatedPlansItems={updatedPlansItems}
            />
          </Box>
          </div>
        </PinchZoomPan>
      </div>
      <Button           style={{
        touchAction: 'none'
      }}>
        <img
          alt=""
          src={icnSwitch}
          draggable="true"
          onTouchMove={(e) => {
            console.log('onTouchMove', e);
            // e.preventDefault();
            dragUrl.current = e.target.src;
          }}
          onTouchStart={(e) => {
            console.log('onTouchStart', e);
            dragUrl.current = e.target.src;
          }}
          onTouchEnd={(e) => {
            console.log('onTouchEnd', e);
            handleOnDrop(e);
          }}
          onDragStart={(e) => {
            console.log('onDragStart', e);

            dragUrl.current = e.target.src;
          }}
          onDragEnd={(e) => {
            console.log('onDragEnd', e);

            handleOnDrop(e);
          }}
        />
      </Button>
    </div>
  )
}

export default PinchZoomPanComponentTest;