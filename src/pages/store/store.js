import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Carousel from "../../components/carousel/carousel";
import ProductList from "../../components/product-list/product-list";
import "./store.scss";

function Store(props) {    
  
  const {type} = useParams();

  const {search} = props;

    return (
      <main className="store">
        <Carousel />
        <div className="container">
          <h2 className="store__title">
            Pokémon tipo <i>{type}</i>
          </h2>
          <ProductList type={type} search={search} />
        </div>
      </main>
    );

}

export default Store;