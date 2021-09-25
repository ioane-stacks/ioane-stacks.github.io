import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogData } from "./BlogData";
import NotFound from "./NotFound";
import BlogDetails from "./BlogDetails";

const Blog = () => {
    const [{ id }] = useState(useParams());
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setData(BlogData.filter(e => e.id == id).pop());
            setIsPending(false);
            data === undefined ? setError(true) : setError(false);
        }, 300);
    });

    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <div><NotFound /></div>}
            {data && <BlogDetails data={data} />}
        </div>
    );
}

export default Blog;