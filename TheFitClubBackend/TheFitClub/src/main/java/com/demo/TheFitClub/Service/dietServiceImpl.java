package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.dietRepository;
import com.demo.TheFitClub.model.diet;

@Service
public class dietServiceImpl implements dietService{
	
	@Autowired
	private dietRepository dietrepository;

	@Override
	public Optional<List<diet>> getDietByUser(int user_id) {
		Optional<List<diet>> dlist=dietrepository.getUserDietById(user_id);
		
		if(dlist.isEmpty()) {
		 return	Optional.empty();
		}
		else	
		return dlist;
	}

	@Override
	public void addDiet(diet d) {
		dietrepository.save(d);
		
	}

	@Override
	public void updateDiet(diet d) {
		dietrepository.save(d);
		
	}

	@Override
	public void deleteByDid(int diet_id) {
		dietrepository.deleteById(diet_id);
		
	}
}
