import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import BlogList from "./BlogList";
import ImageSlider from "./imageSlider/ImageSlider";

const Home = () => {
    return ( 
        <div>
            <ImageSlider />
            <BlogList />
        </div>
    );
}
 
export default Home;