import React, { useState, useEffect } from "react";

export const One = () => {
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth < 640
      ? "https://image.hm.com/content/dam/regional-local-activities/seu/master-mcf/2024-season-9/ladies/TCL_ladies_whiteddress_1x1.png?imwidth=1260"
      : "https://image.hm.com/content/dam/regional-local-activities/seu/master-mcf/2024-season-9/ladies/TCL_ladies_whiteddress_3x2.png?imwidth=1536"
  );

  useEffect(() => {
    const updateImageSrc = () => {
      setImageSrc(
        window.innerWidth < 640
          ? "https://image.hm.com/content/dam/regional-local-activities/seu/master-mcf/2024-season-9/ladies/TCL_ladies_whiteddress_1x1.png?imwidth=1260"
          : "https://image.hm.com/content/dam/regional-local-activities/seu/master-mcf/2024-season-9/ladies/TCL_ladies_whiteddress_3x2.png?imwidth=1536"
      );
    };

    // Add a resize event listener to handle window resize
    window.addEventListener("resize", updateImageSrc);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

  return (
    <div className="relative">
      <img
        className="h-[370px] md:h-[660px] w-full"
        src={imageSrc}
        alt="Dreamy dress"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-4">
        <p className="md:text-2xl font-bold">Dreamy dress edit</p>
        <p className="text-md">Season's most coveted in-trend dresses</p>
        <button className="mt-2 shadow text-black bg-white font-bold py-2 px-4 rounded hidden md:block">
          Shop Now
        </button>
      </div>
    </div>
  );
};
