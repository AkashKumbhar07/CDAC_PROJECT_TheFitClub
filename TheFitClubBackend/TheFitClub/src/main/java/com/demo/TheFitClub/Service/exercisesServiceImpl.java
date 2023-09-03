package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.exercisesRepository;
import com.demo.TheFitClub.model.exercises;

@Service
public class exercisesServiceImpl implements exercisesService {
	
	@Autowired
	private exercisesRepository exercisesrepository;

	@Override
	public List<exercises> findAll() {
		return exercisesrepository.findAll();
	}

	@Override
	public Optional<exercises> getById(String exercise_name) {
		return exercisesrepository.findById(exercise_name);
	}
}
