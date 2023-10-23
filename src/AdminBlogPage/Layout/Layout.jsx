import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTable from '../Component/UserForm/UserTable';
import BlogPage from '../Component/BlogPage/Blogpage'
import BlogList from '../Component/BlogPage/BlogList';
import ListedBlogs from '../../WebBlogs/Components/ListedBlog/ListedBlogs';
import Header1 from './AdminHeader/Header';
import BlogHeader from '../../WebBlogs/WebLayout/WebHeader/BlogHeader';
import WrongURL from './WrongURL';
import WebLayout from '../../WebBlogs/WebLayout/WebLayout';
import WebAbout from '../../WebBlogs/Components/About/WebAbout';
import WebContact from '../../WebBlogs/Components/Contact/WebContact';
import WebFeedback from '../../WebBlogs/Components/Feedback/WebFeedback';

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<><Header1 /><BlogList /></>} />
      <Route path="/about" element={<><Header1 /><About /></>} />
      <Route path="/add-user" element={<><Header1 /><AddUser /></>} />
      <Route path="/add-blog" element={<><Header1 /><AddBlog /></>} />
      <Route path="/blog-web" element={<><WebLayout /></>} />
      <Route path="*" element={<><Header1 /><WrongURL /> </>} />
      <Route path="/web" element={<><BlogHeader /><ListedBlogs /></>} />
      <Route path="/web-about" element={<><BlogHeader /><WebAbout /></>} />
      <Route path="/web-contact" element={<><BlogHeader /><WebContact /></>} />
      <Route path="/web-feedback" element={<><BlogHeader /><WebFeedback /></>} />
    </Routes>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function AddUser() {
  return <UserTable />;
}

function AddBlog() {
  return <BlogPage />;
}
