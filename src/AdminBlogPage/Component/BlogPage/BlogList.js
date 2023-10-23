import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get, remove } from 'firebase/database';
import './Bloglist.scss'; // Use a unique CSS file for styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const db = getDatabase();

function UniqueBlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading status

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
            } finally {
                setLoading(false); // Update loading status once data is fetched or in case of an error
            }
        };

        fetchData();
    }, []);

    const removeBlog = (blogId) => {
        const blogRef = ref(db, `blogs/${blogId}`);
        remove(blogRef)
            .then(() => {
                toast.success('Blog removed successfully');
                setBlogs(blogs.filter((blog) => blog.id !== blogId));
            })
            .catch((error) => {
                console.error('Error removing blog:', error);
            });
    };

    return (
        <div className="blog-list-container">
            {loading ? (
                <p className="blog-list-title">Loading...</p>
            ) : (
                <div className="blog-list-content">
                    {
                        blogs?.length == 0 ? (<div>No Data</div>) : (
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                width: '100%',
                                gap:'15px'
                            }}>
                                {blogs.map((blog) => (
                                    <div key={blog.id} className="blog-list-card">
                                        <div className="remove-button-container">
                                            <button className="remove-button" onClick={() => removeBlog(blog.id)}>Remove</button>
                                        </div>
                                        <div className="blog-list-item" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                                        <p className="blog-list-timestamp">Published on: {blog.timestamp}</p>
                                    </div>
                                ))}
                            </div>)
                    }

                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default UniqueBlogList;
