
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get, remove } from 'firebase/database';
import './ListedBlogs.scss'; // Import your CSS file for styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const db = getDatabase();

function ListedBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const apiRef = ref(db, 'blogs');
            try {
                const snapshot = await get(apiRef);
                if (snapshot.exists()) {
                    const blogData = snapshot.val();
                    const blogList = Object.keys(blogData).map((key) => ({
                        id: key,
                        content: blogData[key].content,
                        timestamp: blogData[key].timestamp,
                    }));
                    setBlogs(blogList);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const removeBlog = (blogId) => {
        const blogRef = ref(db, `blogs/${blogId}`);
        remove(blogRef)
            .then(() => {
                toast.success('Blog removed successfully');
                setBlogs(blogs.filter((blog) => blog.id !== blogId)); // Remove the blog from the state
            })
            .catch((error) => {
                console.error('Error removing blog:', error);
            });
    };

    return (
        <div className="blog-container">
            <h1 className="blog-title"></h1>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div className="remove-button-container">
                            <button className="remove-button" onClick={() => removeBlog(blog.id)}>Remove</button>
                        </div>
                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                        <p className="blog-timestamp">Published on: {blog.timestamp}</p>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default ListedBlogs;
