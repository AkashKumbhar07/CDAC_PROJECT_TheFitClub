package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.workoutRepository;
import com.demo.TheFitClub.model.workout;

@Service
public class workoutServiceImpl implements workoutService {
	
	@Autowired
	private workoutRepository workoutrepository;

	@Override
	public Optional<List<workout>> getWorkoutById(int user_id) {
		Optional<List<workout>> wlist=workoutrepository.getWorkoutByUserId(user_id);
		
		if(wlist.isEmpty()) {
			return Optional.empty();
		}
		else
		return wlist;
	}

	@Override
	public void addWorkout(workout w) {
		System.out.println(w);
		workoutrepository.save(w);
		
	}


	@Override
	public Optional<workout> getById(int workout_id) {
		
		return workoutrepository.findById(workout_id);
	}

	@Override
	public workout updateWorkout(int workout_id, workout w) {
		Optional<workout> existingWorkout = workoutrepository.findById(workout_id);
		
		if(existingWorkout.isPresent()) {
			workout existingWork = existingWorkout.get();
			
			existingWork.setExercise_name(w.getExercise_name());
			existingWork.setSets(w.getSets());
			existingWork.setRepetations(w.getRepetations());
			existingWork.setRest(w.getRest());
			existingWork.setPhase(w.getPhase());
		
			
			return workoutrepository.save(existingWork);
		}else
		return null;
		
	}

	@Override
	public Optional<List<workout>> getWorkoutByWid(int workout_id) {
		Optional<List<workout>> wlist= workoutrepository.getWorkoutByWid(workout_id);
		
		if(wlist.isEmpty()) {
			return Optional.empty();
		}else
		return wlist;
	}

	@Override
	public void deleteByWid(int workout_id) {
		workoutrepository.deleteById(workout_id);
		
	}
}
