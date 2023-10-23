import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import './UserFormdata.css'
import { toast } from 'react-toastify';
const db = getDatabase();

function UserFormdata({setOne}) {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    mobile_number: '',
    name: '',
    position: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.age.trim() || !formData.gender.trim() || !formData.mobile_number.trim() || !formData.name.trim() || !formData.position.trim()) {
      toast.error('All fields are required');
      return;
    }
    const usersRef = ref(db, 'user');
    push(usersRef, formData);
    setFormData({
      age: '',
      gender: '',
      mobile_number: '',
      name: '',
      position: '',
    });
    toast.success('Data added successfully');
    setOne(1);
  };
  

  return (
    <div className="user-form-container">
      <h1 className="form-title">User Data Form</h1>
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile_number">Mobile Number:</label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserFormdata;
