import React, {useState, useEffect} from "react";
import Carousel from "../../components/carousel/carousel"
import "./home.css";

function Home(props) {    

    return (
      <div className="home">
        <Carousel />
      </div>
    );

}

export default Home;