package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.nutrition;

public interface nutritionService {

	List<nutrition> findAll();

	Optional<nutrition> getNutritionById(String nutri_name);

	List<nutrition> searchNutritionByName(String nutri_name);

}
