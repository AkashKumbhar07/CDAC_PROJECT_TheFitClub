package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.nutritionRepository;
import com.demo.TheFitClub.model.nutrition;

@Service
public class nutritionServiceImpl implements nutritionService{
		
	@Autowired
	private nutritionRepository nutritionrepository;

	@Override
	public List<nutrition> findAll() {
		
		return nutritionrepository.findAll();
	}

	@Override
	public Optional<nutrition> getNutritionById(String nutri_name) {
		
		return nutritionrepository.getNutritionById(nutri_name);
	}

	@Override
	public List<nutrition> searchNutritionByName(String nutri_name) {
	
		return nutritionrepository.findByNutritionName(nutri_name);
	}
	
	 
}
