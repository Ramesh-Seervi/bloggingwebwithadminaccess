import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogHeader from './WebHeader/BlogHeader';
import ListedBlogs from '../Components/ListedBlog/ListedBlogs';
import WebAbout from '../Components/About/WebAbout';
import WebContact from '../Components/Contact/WebContact';
import WebFeedback from '../Components/Feedback/WebFeedback';

export default function WebLayout() {
    return (
        <>
            <Routes>
                <Route path="/" element={<><BlogHeader /><ListedBlogs /></>} />
                <Route path="/web-about" element={<><BlogHeader /><WebAbout /></>} />
                <Route path="/web-contact" element={<><BlogHeader /><WebContact /></>} />
                <Route path="/web-feedback" element={<><BlogHeader /><WebFeedback /></>} />
            </Routes>
        </>
    );
}
