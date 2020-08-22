import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProductList from "../../components/product-list/product-list";
import "./store.css";

function Store(props) {    
  
  const {type} = useParams();

  const {search} = props;

    return (
      <main>
        <div className="container">
          <ProductList type={type} search={search} />
        </div>
        <link
          rel="stylesheet"
          type="text/css"
          href={`/style-type/${type}.css`}
        />
      </main>
    );

}

export default Store;