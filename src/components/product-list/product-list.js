import React, {useState, useEffect} from "react";
import ProductBox from "../product-box/product-box";
import "./product-list.scss";

function ProductList(props) {   
    const { type, search } = props;

    const [products, setProducts] = useState();
    useEffect(() => {
      if (!type) {
        return setProducts([]);
      }
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((data) => data.json())
        .then((data) => setProducts(data.pokemon));
    }, [type]);

    if (!products) {
      return "loading";
    }

    if (!products.length) {
      return null;
    }

    return (
      <div className="product-list">
        {products
          .filter((product) =>
            search.length > 2
              ? product.pokemon.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : true
          )
          .map((product) => (
            <ProductBox key={product.pokemon.url} product={product.pokemon} />
          ))}
      </div>
    );

}

export default ProductList;