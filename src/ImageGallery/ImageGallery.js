import { useState } from 'react';

const ImageGallery = ({images}) => {

    const [currentImage, setCurrentImage] = useState(null);

    const Resize = (index) => {
        setCurrentImage(images[index].url);
    }

    return (
        <div className='gallery'>
            {currentImage && 
            <div className="image-resized">
                <span onClick={() => setCurrentImage(null)}>&#9932;</span>
                <img src={currentImage} alt="nopic" />
            </div>}
            <div className="image-gallery">
                    {images.map((image, i) => {
                        return <img src={image.url} alt="no pic" key={i} onClick={() => Resize(i)} />
                    })}
            </div>
        </div>
    );
}

export default ImageGallery;