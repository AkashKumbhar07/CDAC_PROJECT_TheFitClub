package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.diet;

public interface dietService {

	Optional<List<diet>> getDietByUser(int user_id);

	void addDiet(diet d);

	void updateDiet(diet d);

	void deleteByDid(int diet_id);

}
