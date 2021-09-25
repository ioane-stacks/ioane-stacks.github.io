import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import BlogList from "./BlogList";
import ImageSlider from "./imageSlider/ImageSlider";

const Home = () => {
    //This Wrote for github repository, while website opens with sub-categoty /Donuts-Market/, the algorithm checks it
    //and returns with default page of Home "/";
    const [{id}] = useState(useParams());
    const history = useHistory();
    useEffect(() => {
        id === undefined ? history.push("/") : console.log("Everything Works !");
    }, [id, history]);
    //End Comment;

    return ( 
        <div>
            <ImageSlider />
            <BlogList />
        </div>
    );
}
 
export default Home;