import React, { useState, useEffect } from "react";
import denim1 from "../../assets/denim11.jpg";
export const Four = () => {
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth < 640
      ? denim1
      : "https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=264%20264w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=396%20396w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=564%20564w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=657%20657w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=768%20768w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=820%20820w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=1260%201260w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=1536%201536w"
  );

  useEffect(() => {
    const updateImageSrc = () => {
      setImageSrc(
        window.innerWidth < 640
          ? denim1
          : "https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=264%20264w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=396%20396w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=564%20564w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=657%20657w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=768%20768w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=820%20820w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=1260%201260w,%20https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=1536%201536w"
      );
    };

    updateImageSrc();

    // Add a resize event listener to handle window resize
    window.addEventListener("resize", updateImageSrc);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

  return (
    <div className="relative my-8">
      <img
        className="h-[370px] md:h-[660px] w-full"
        src={imageSrc}
        alt="Dreamy dress"
      />
      <div className="absolute inset-0 flex flex-col  justify-end text-white p-4">
        <p className="md:text-2xl font-bold">The denim roundup</p>
        <p className="text-md">Up your jeans wardrobe</p>
        <button className=" w-[130px] text-sm  mt-2 shadow text-black bg-white font-bold py-2 px-4 rounded hidden md:block">
          Shop Now
        </button>
      </div>
    </div>
  );
};
