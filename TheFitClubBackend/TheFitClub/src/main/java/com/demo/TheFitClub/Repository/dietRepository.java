package com.demo.TheFitClub.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.diet;

@Repository
public interface dietRepository extends JpaRepository<diet, Integer>{
	
	
	@Query(value="select * from diet where user_id =:user_id",nativeQuery=true)
	Optional<List<diet>> getUserDietById(int user_id);

}
