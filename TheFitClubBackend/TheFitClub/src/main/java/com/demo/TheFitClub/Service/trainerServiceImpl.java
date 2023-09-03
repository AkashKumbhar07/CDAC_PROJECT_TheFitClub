package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.trainerRepository;
import com.demo.TheFitClub.model.trainer;

@Service
public class trainerServiceImpl implements trainerService{
	
	@Autowired
	private trainerRepository trainerrepository;

	@Override
	public List<trainer> findAll() {
		return trainerrepository.findAll();
	}

	@Override
	public Optional<trainer> getById(int trainer_id) {
		
		return trainerrepository.findByIdTrainer(trainer_id);
	}

	@Override
	public void addTrainer(trainer t) {
		trainerrepository.save(t);
		
	}

	
}
