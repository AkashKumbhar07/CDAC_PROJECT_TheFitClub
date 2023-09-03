package com.demo.TheFitClub.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.measurements;

@Repository
public interface measurementRepository extends JpaRepository<measurements, Integer> {
	
    @Query(value="select * from measurements where user_id =:user_id ORDER BY mdate desc LIMIT 10 OFFSET 1;",nativeQuery=true)
	Optional<List<measurements>> getMeasurementByUserId(int user_id);
    
    @Query(value="SELECT * FROM measurements WHERE user_id = :user_id LIMIT 1",nativeQuery=true)
	Optional<measurements> getMeasureById(int user_id);
    
    
	
}
