import React from "react";
import "../Dropdown.css";

const dropdownData = {
  Ladies: [
    "View all",
    "Tops",
    "Dresses",
    "Shirts and Blouses",
    "Jeans",
    "Shoes",
    "Trousers",
    "Accessories",
    "Swimwear",
    "Skirts",
    "Shorts",
    "Basics",
    "Nightwear",
  ],
  Men: [
    "View all",
    "Polos",
    "Dresses",
    "T-shirts",
    "Trousers",
    "Jeans",
    "Shoes",
    "Accessories",
    "Swimwear",
    "Hoodies & Sweatshirts",
    "Shorts",
    "Basics",
    "Nightwear",
    "Sportswear",
    "Underwear",
  ],
  Baby: [
    "View all",
    "New Arrivals",
    "Clothing",
    "Outerwear",
    "Accessories",
    "Party & Occasion",
    "Sale",
    "Jeans",
    "Shoes",
  ],
  Kid: [
    "View all",
    "New Arrivals",
    "Clothing",
    "Outerwear",
    "Accessories",
    "Party & Occasion",
    "Sale",
    "Jeans",
    "Shoes",
  ],
  "H&M HOME": [
    "View all",
    "Decorations",
    "Cushions",
    "Bed Linen",
    "Wall Decoration",
    "Cookware",
    "Storage",
    "Bath & Shower",
    "Curtains",
    "Sleepwear",
    "Blankets",
    "Sale",
  ],
  Sport: [
    "Shop by Activity",
    "View All",
    "New Arrivals",
    "Clothing",
    "Active Swimwear",
    "Outerwear",
    "Accessories & Equipment",
    "Maternity",
  ],
  Sale: [
    "Save Big: Min 50% off",
    "View All",
    "Bedroom",
    "Living Room",
    "Bathroom",
    "Cushions",
    "Bed Linen",
    "Decorations",
    "Storage",
    "SALE STYLES UNDER RS. 599",
    "Tops and Tees- Best price",
  ],
  Sustainability: [
    "H&M GROUP Sustainability Strategy",
    "H&M GROUP Sustainability Report",
    "H&M GROUP Sustainability Foundation",
    "Let's innovate",
    "Let's be fair",
    "Let's clear up",
    "Let's close the loop",
    "Let's be transparent",
  ],
};

export const Dropdown = () => {
  return (
    <div className="dropdown-container hidden md:flex">
      {Object.keys(dropdownData).map((section) => (
        <div key={section} className="dropdown">
          <div className="dropdown-header ">{section}</div>
          <ul className="dropdown-menu bg-white ">
            {dropdownData[section].map((item, index) => (
              <li key={index} className="dropdown-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
