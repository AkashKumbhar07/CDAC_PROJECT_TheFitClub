package com.demo.TheFitClub.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.exercises;

@Repository
public interface exercisesRepository extends JpaRepository<exercises, String> {

}
