package com.demo.TheFitClub.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.nutrition;

@Repository
public interface nutritionRepository extends JpaRepository<nutrition, String> {
	
	@Query(value="select * from nutrition where nutri_name =:nutri_name",nativeQuery=true)
	Optional<nutrition> getNutritionById(String nutri_name);
	
	@Query(value="select * from nutrition where nutri_name like %:nutri_name%",nativeQuery=true)
	List<nutrition> findByNutritionName(String nutri_name);

}
