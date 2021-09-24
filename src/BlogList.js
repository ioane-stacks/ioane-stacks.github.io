import { Link } from "react-router-dom";
import { BlogData } from "./BlogData";

const BlogList = () => {
    return (
        <div className="content-items">
            {BlogData.map(blog => {
                return (
                    <Link to={`blog/${blog.id}`} key={blog.id} >
                        < div className="item">
                            <div className="item-header">
                                <h2>{blog.title}</h2>
                                <div className="continue-reading">
                                    Continue Reading ...
                                </div>
                                <p>{blog.upload}, {blog.city}, {blog.street}</p>
                            </div>
                            <div className="item-image">
                                <img src={blog.image} alt="no pic" />
                            </div>
                        </div>
                    </Link >
                )
            })}
        </div >
    );
}

export default BlogList;
