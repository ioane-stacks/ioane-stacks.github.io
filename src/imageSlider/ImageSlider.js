import { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import  { SliderData } from './SliderData';


const ImageSlider = () => {

    const [images] = useState(
        SliderData.map((slide) => {
            return {url: slide.image}
        })
    );

    return (
        
        <div className="image-slider">
            <SimpleImageSlider
                width={1000}
                height={562}
                images={images}
                showNavs
                navStyle={1}
                bgColor="#fff"
            />
        </div>
    );
}

export default ImageSlider;