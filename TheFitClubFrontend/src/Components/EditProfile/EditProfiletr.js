import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ trainerId }) => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const tr_id = sessionStorage.getItem('trainer_id');
  const Navigate= useNavigate();
  const handleFileChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('specialization', specialization);
    formData.append('experience', experience);
    formData.append('bio', bio);
    formData.append('profile_pic', profilePic);

    try {
      await axios.put(`http://localhost:8080/trainer/updateProfile/${tr_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile updated successfully');
      const tr=sessionStorage.getItem('trainer');
      Navigate(`/TrainerDB/${tr}`);
      
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  return (
    <div>
      <h2>Update Trainer Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="profilePic">Profile Picture:</label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
