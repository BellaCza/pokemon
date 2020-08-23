import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/carousel";
import ProductList from "../../components/product-list/product-list";
import "./home.scss";

function Home(props) {    

  const type = "normal";

  const { search } = props;

  return (
    <div className="home">
      <Carousel />
      <div className="container">
        <ProductList type={type} search={search} />
      </div>
    </div>
  );

}

export default Home;