package com.demo.TheFitClub.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.login;

@Repository
public interface loginRepository extends JpaRepository<login, Integer>{
	
	@Query(value="select * from login where user_name= :userName and password= :password",nativeQuery=true)
	Optional<login> findByUserNameAndPassword(String userName, String password);

}
