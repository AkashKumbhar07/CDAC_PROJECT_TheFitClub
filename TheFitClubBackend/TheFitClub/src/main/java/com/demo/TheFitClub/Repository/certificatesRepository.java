package com.demo.TheFitClub.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.certificates;

@Repository
public interface certificatesRepository extends JpaRepository<certificates, Integer>{
	
	@Query(value="select * from certificates where trainer_id =:trainer_id",nativeQuery=true)
	List<certificates> findByTrainerId(int trainer_id);

}
