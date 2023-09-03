package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.userRepository;
import com.demo.TheFitClub.model.users;

@Service
public class userServiceImpl implements userService {
		
	@Autowired
	private userRepository userrepository;

	@Override
	public List<users> findAll() {
		
		return userrepository.findAll();
	}

	@Override
	public Optional<users> getById(int login_id) {
		return userrepository.findUserById(login_id);
		
	}

	@Override
	public void addUser(users u) {
		userrepository.save(u);
		
	}

	@Override
	@Transactional
	public void updateTrainerId(int user_id, int trainer_id) {
		userrepository.updateTrainerId(user_id,trainer_id);
		
	}
	
	@Override
	public Optional<List<users>> getUserByTrainer(int trainer_id) {
		Optional<List<users>> ulist=userrepository.getUserByTrainerId(trainer_id);
		
		if(ulist.isEmpty()) {
			return Optional.empty();
		}else
		return ulist;
	}

	@Override
	public Optional<users> getByUserId(int user_id) {
		
		return userrepository.findById(user_id);
	}
	
	
}
