package com.demo.TheFitClub.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.workout;

@Repository
public interface workoutRepository extends JpaRepository<workout, Integer> {
	
	@Query(value="select * from workout where user_id =:user_id",nativeQuery=true)
	Optional<List<workout>> getWorkoutByUserId(int user_id);
	
	@Query(value="select * from workout where workout_id =:workout_id",nativeQuery=true)
	Optional<List<workout>> getWorkoutByWid(int workout_id);
	
	

}
