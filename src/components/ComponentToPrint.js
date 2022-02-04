import React from "react";
const ComponentToPrint = React.forwardRef((props, ref) => {
  return <div ref={ref}>tttt</div>;
});
export default ComponentToPrint;
