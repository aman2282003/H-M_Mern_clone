import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Spage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="h-[700px] w-[100%] md:w-[50%]"
        />
        <div className="md:ml-6 mt-5">
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-gray-500">MRP inclusive of all taxes</p>
          <p className="mt-4 text-lg">Rs. {product.price}</p>
          <p className="mt-4">{product.description}</p>

          <div className="mt-6">
            <p className="font-semibold">Sizes</p>
            <div className="flex mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`border border-gray-400 px-3 py-1 mx-1 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-black text-white px-4 py-2 w-[300px]">
              Add
            </button>
          </div>

          <div className="mt-6">
            <p>
              <p>Find in store</p>
            </p>
            <p>Delivery Time: 2-7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};
