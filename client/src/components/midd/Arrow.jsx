import React from "react";

const Arrow = ({ className, onClick, direction }) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 1,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      ...(direction === "left" ? { left: 10 } : { right: 10 }),
      color: "black", // Arrow color
      fontSize: "24px", // Arrow size
    }}
  >
    {direction === "left" ? "<" : ">"}
  </div>
);

export default Arrow;
