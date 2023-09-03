package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.workout;

public interface workoutService {

	Optional<List<workout>> getWorkoutById(int user_id);

	void addWorkout(workout w);



	Optional<workout> getById(int workout_id);

	workout updateWorkout(int workout_id, workout w);

	Optional<List<workout>> getWorkoutByWid(int workout_id);

	void deleteByWid(int workout_id);

}
