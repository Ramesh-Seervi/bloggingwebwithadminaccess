import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDatabase, ref, push, set } from 'firebase/database'; // Import Firebase Realtime Database functions
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BlogPage = () => {
  const [text, setText] = useState('');
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setText(value);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }],
      ['link'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      [{ 'align': [] }],
      ['clean'],
    ],
  };


  const SubmitBlog = () => {
    const db = getDatabase();
    const blogRef = ref(db, 'blogs');

    const newBlog = {
      content: text,
      timestamp: new Date().toString(),
    };

    push(blogRef, newBlog)
      .then(() => {
        toast.success("Blog uploaded to Firebase");
        setBlogs([...blogs, newBlog]);
        setText('');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error);
        console.error('Error uploading the blog to Firebase', error);
      });
  };

  return (
    <div style={{ background: 'lightgrey', height: '100%', padding: '20px' }}>
      <div style={{ paddingBottom: '30px' }}>
        <h1 style={{ textAlign: 'center' }}>Create Your Blog</h1>
        <ReactQuill style={{ background: '#fff', height: 500 }} modules={modules} value={text} onChange={handleChange} />
      </div>
      {text && (
        <div>
          <div style={{ background: 'lightblue', padding: '20px', marginBottom: '30px' }}>
            <h1 style={{ textAlign: 'center' }}>Your Blog for Web</h1>
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={SubmitBlog} style={{ background: 'blue', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Upload Your Blog</button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default BlogPage;
