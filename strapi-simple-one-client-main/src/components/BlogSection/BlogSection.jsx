import React from "react";
import useFetch from "../../hooks/useFetch";
import "./BlogSection.scss";

const BlogSection = () => {
    const { data } = useFetch(
        `/api/blogs/?populate=*`
    );
    return (
        <div className="blog-section-content grid">
            {data?.data?.map((post) => (
                <div className="blog-post" key={post.id}>
                    <div className="card-image-container">
                        <img
                            className="card-image"
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                post.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                    <div className="blog-post-details">
                        <h3>{post.attributes.title}</h3>
                        <p>{post.attributes.excerpt}</p>
                        <a href={`/api/blogs?populate=*&filters[id][$ne]=${post.id}&pagination[start]=0&pagination[limit]=4`}>Read more</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogSection;
