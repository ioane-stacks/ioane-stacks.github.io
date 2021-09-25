import { useState } from "react";
import { useHistory } from "react-router-dom";
import ImageGallery from "./ImageGallery/ImageGallery";

const BlogDetails = (data) => {
    const [blog] = useState(data.data);
    const [hasGallery] = useState(blog.hasGallery);
    const history = useHistory();

    return (
        <div className='details'>
            <div className="blog-details">
                <div className="detailed-image">
                    <img src={blog.image} alt="no pic" />
                </div>
                <div className="detailed-content">
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            </div>
            {hasGallery && <ImageGallery images={blog.images} />}
            <button className="go-back" onClick={() => history.go(-1)}>Back ...</button>
        </div>
    );
}

export default BlogDetails;