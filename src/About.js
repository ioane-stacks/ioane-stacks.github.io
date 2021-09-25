import { useState } from "react";
import { AboutData } from "./AboutData";
import ImageGallery from "./ImageGallery/ImageGallery";

const About = () => {
    const [hasGallery] = useState(AboutData.hasGallery);

    return ( 
        <div className="about-page">
            <h2>** About us **</h2>
            <p>{ AboutData.body }</p>
            {hasGallery && <ImageGallery images={AboutData.images} />}
        </div>
    );
}
 
export default About;