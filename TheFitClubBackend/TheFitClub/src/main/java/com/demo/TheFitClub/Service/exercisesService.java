package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.exercises;

public interface exercisesService {

	List<exercises> findAll();

	Optional<exercises> getById(String exercise_name);

}
