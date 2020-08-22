import React, {useState, useEffect} from "react";
import LazyLoad from "react-lazy-load";
import "./product-box.css";

function ProductBox(props) {    
    const {product} = props;

    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        if(!product || !product.name){
            return;
        }
      fetch(`https://pokeapi.co/api/v2/pokemon/${product.name}`)
        .then((data) => data.json())
        .then((data) => setPokemon(data));
    }, [product]);

    if(!pokemon){
        return "loading";
    }

    if(!pokemon.id){
        return null;
    }

    return (
      <LazyLoad height={300}>
        <div className="product-box">
          {pokemon.name} - {pokemon.weight}
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>
      </LazyLoad>
    );

}

export default ProductBox;