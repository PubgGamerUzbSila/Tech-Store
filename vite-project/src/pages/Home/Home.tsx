import React from "react";
import { Hero } from "../../components/pages/home-component/Hero/Hero";
import { Products } from "../../components/pages/home-component/Products/Products";

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};
