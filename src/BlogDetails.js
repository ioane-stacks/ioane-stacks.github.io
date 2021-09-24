import { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogDetails = (data) => {
    const [blog] = useState(data.data);
    const history = useHistory();

    return (
        <div>
            <div className="blog-details">
                <div className="detailed-image">
                    <img src={blog.image} alt="no pic" />
                </div>
                <div className="detailed-content">
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
                <button className="go-back" onClick={() => history.go(-1)}>Back ...</button>
            </div>
            
        </div>
    );
}

export default BlogDetails;