import React from 'react';
import { Stage, Layer, Image, Arrow } from 'react-konva';
import useImage from 'use-image';
import icnSwitch from '../images/icn_switch.svg';

function ItemImage({ shapeProps, onDragEnd }) {
  console.log(shapeProps, onDragEnd);
  const [img] = useImage(shapeProps.src);
  // const [img] = useImage(shapeProps.src);

  return (
    <Image
      style={{ zIndex: 9999 }}
      x={shapeProps.iconX}
      y={shapeProps.iconY}
      id={shapeProps.key}
      key={shapeProps.key}
      draggable={shapeProps.iconDraggable}
      image={img}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      onDragEnd={(e) => {
        onDragEnd(e, shapeProps);
      }}
      // onTouchEnd={onDragEnd}
    />
  );
};

// const ItemLine = ({ shapeProps, onDragEnd, isSelected, onSelect }) => {
//   return (
//     <>
//       <Line
//         x={shapeProps.iconX}
//         y={shapeProps.iconY}
//         // key={shapeProps.key}
//         points={shapeProps.points}
//         stroke={shapeProps.stroke}
//         strokeWidth={shapeProps.strokeWidth}
//         dash={shapeProps.dash}
//         draggable={shapeProps.iconDraggable}
//         onDragEnd={onDragEnd}
//         // onTouchEnd={onDragEnd}
//         isSelected={isSelected}
//         onClick={onSelect}
//       />
//     </>
//   );
// };

// function to generate arrows between targets
// const generateConnectors = (selectedItems) => {
//   // const result = [];
//   // selectedItems.maplength < number) {
//   //   var from = 'target-' + Math.floor(Math.random() * targets.length);
//   //   var to = 'target-' + Math.floor(Math.random() * targets.length);
//   //   if (from === to) {
//   //     continue;
//   //   }
//   const result = [];
//   selectedItems && selectedItems.length === 2 && (
//     result.push({
//       id: `connector-${result.length}`,
//       from: selectedItems[0],
//       to: selectedItems[1],
//     })
//   )
//   return result;
// }

const NodesArrow = ({ node1, node2 }) => {
  const dx = node1.iconX - node2.iconX;
  const dy = node1.iconY - node2.iconY;
  const angle = Math.atan2(-dy, dx);

  const radius = 20;

  const arrowStart = {
    x: node2.iconX + -radius * Math.cos(angle + Math.PI),
    y: node2.iconY + radius * Math.sin(angle + Math.PI),
  };

  const arrowEnd = {
    x: node1.iconX + -radius * Math.cos(angle),
    y: node1.iconY + radius * Math.sin(angle),
  };

  return (
    <Arrow
      tension={0.2}
      points={[
        arrowStart.x,
        arrowStart.y,
        arrowEnd.x,
        arrowEnd.y,
      ]}
      stroke="#000"
      fill="#000"
      strokeWidth={3}
      pointerWidth={6}
    />
  );
};

export const DraggableItem = ({ stageRef, items, parentWidth, parentHeight, updatedPlansItems }) => {
  // const [selectedId, selectShape] = React.useState(null);
  // const [selectedItems, setSelectedItems] = React.useState([]);
  // const [connectors, setConnectors] = React.useState([]);
  const layerRef = React.useRef();

  const handleDragEnd = (e, shapeProps) => {
    shapeProps.iconX = e.target.attrs.x;
    shapeProps.iconY = e.target.attrs.y;
    updatedPlansItems(shapeProps);
  };

  return (
    <Stage width={parentWidth} height={parentHeight} ref={stageRef}>
      <Layer ref={layerRef}>
        {items.map((item) => {
          if (item.iconClassName == 'Image') {
            return <ItemImage shapeProps={item} key={`plan_item_${item.id ? item.id : item.key}`} onDragEnd={handleDragEnd} />;
          }
          // if (item.iconClassName == 'Line') {
          //   return <ItemLine shapeProps={item}
          //                    key={`plan_item_${item.id ? item.id : item.key}`}
          //                    onDragEnd={handleDragEnd}
          //                    isSelected={item.key === selectedId}
          //                    onSelect={() => {
          //                      selectShape(item.key);
          //                    }}
          //   />;
          // }
        })}
        {/* {items && items.length === 2 && ( */}
        {/*  <NodesArrow node1={items[0]} node2={items[1]} /> */}
        {/* )} */}
      </Layer>
    </Stage>
  );
};

