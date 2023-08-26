package com.demo.TheFitClub.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.trainer;

@Repository
public interface trainerRepository extends JpaRepository<trainer, Integer> {
	
	@Query(value="select * from trainer where login_id =:trainer_id",nativeQuery=true)
	Optional<trainer> findByIdTrainer(int trainer_id);
	
	

}
