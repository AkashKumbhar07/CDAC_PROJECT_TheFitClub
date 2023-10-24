package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.trainer;

public interface trainerService {

	List<trainer> findAll();

	Optional<trainer> getById(int trainer_id);

	void addTrainer(trainer t);

	trainer savetr(trainer tr);

	Optional<trainer> getBytrid(int trainer_id);

	trainer acceptTrainerRegistration(int trainer_id);

	void rejectTrainerRegistration(int trainer_id);

	List<trainer> findAllActive();

}
