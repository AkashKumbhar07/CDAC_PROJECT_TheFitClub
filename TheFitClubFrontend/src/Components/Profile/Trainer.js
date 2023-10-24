import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Trainer.css";
import Header2 from '../Header/Header2';
import SubscriptionPlans from '../Subscription/SubscriptionPlans';

const TrainersList = () => {
  const [originalTrainers, setOriginalTrainers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const userid = sessionStorage.getItem('user');

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:8080/trainer/getTrainersActive');
      setTrainers(response.data);
      setOriginalTrainers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching trainers:', error);
      setIsLoading(false);
    }
  };

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    const sortedTrainers = [...trainers];

    if (selectedSort === 'name') {
      sortedTrainers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === 'experience') {
      sortedTrainers.sort((a, b) => b.experience - a.experience);
    }

    setTrainers(sortedTrainers);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilterBy(selectedFilter);

    if (selectedFilter === '') {
      setTrainers(originalTrainers);
    } else {
      const filteredTrainers = originalTrainers.filter(trainer => trainer.specialization === selectedFilter);
      setTrainers(filteredTrainers);
    }
  };

  const handleSubscribe = (trainer) => {
    setSelectedTrainer(trainer);
  };

  return (
    <div className="main-container">
      <Header2 />
      <div className="filter-sort-container">
        <h2>Filter</h2>
        <div className="filter">
          <label htmlFor="filterSelect">Filter by Specialization:</label>
          <select id="filterSelect" value={filterBy} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Strength">Strength</option>
            <option value="Yoga">Yoga</option>
            <option value="Athlete">Athlete</option>
            <option value="Marathon">Marathon</option>
          </select>
        </div>
        <div className="sort">
          <label htmlFor="sortSelect">Sort by:</label>
          <select id="sortSelect" value={sortBy} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="experience">Experience</option>
          </select>
        </div>
      </div>

      <div className="card-container">
        {isLoading && <p>Loading...</p>}

        {trainers.length > 0 && (
          <ul>
            {trainers.map(trainer => (
              <li className="card" key={trainer.trainer_id}>
                <img src={`data:image/jpeg;base64,${trainer.profile_pic}`} alt="ProfilePic" /><br />
                <strong>Name:</strong> {trainer.name}<br />
                <strong>Specialization:</strong> {trainer.specialization}<br />
                <strong>Experience:</strong> {trainer.experience} years<br />
                <strong>Bio:</strong> {trainer.bio}
                <button onClick={() => handleSubscribe(trainer)}>Subscribe</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Conditionally render the SubscriptionPlans component */}
      {selectedTrainer && (
        <SubscriptionPlans
          trainerId={selectedTrainer.trainer_id}
          name={selectedTrainer.name}
        />
      )}
    </div>
  );
};

export default TrainersList;
