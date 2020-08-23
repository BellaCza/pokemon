import React, {useState, useEffect} from "react";
import LazyLoad from "react-lazy-load";
import "./product-box.scss";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Default from "../../images/not-found.png";

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
      <LazyLoad>
        <article className="product-box">
          <div className="badge">Novo</div>
          <div className="wishlist">
            <Heart className="icon icon-heart" />
            <HeartFill className="icon icon-heartfill" />
          </div>
          <div className="product-box__img">
            <img
              onError={(ev) =>
                ev.target.src !== Default ? (ev.target.src = Default) : null
              }
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>
          <div className="product-box__name">{pokemon.name}</div>
          <div className="product-box__code">Código: {pokemon.id}</div>
          <div className="product-box__price">R${pokemon.weight},00</div>
          <button className="btn">Comprar</button>
        </article>
      </LazyLoad>
    );

}

export default ProductBox;