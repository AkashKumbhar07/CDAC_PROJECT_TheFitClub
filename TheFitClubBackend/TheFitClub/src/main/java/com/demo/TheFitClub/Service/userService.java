package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.users;

public interface userService {

	List<users> findAll();

	Optional<users> getById(int login_id);

	void addUser(users u);

	void updateTrainerId(int user_id, int trainer_id);
	
	Optional<List<users>> getUserByTrainer(int trainer_id);

	Optional<users> getByUserId(int user_id);

}
