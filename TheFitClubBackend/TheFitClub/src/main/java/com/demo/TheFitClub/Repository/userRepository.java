package com.demo.TheFitClub.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.TheFitClub.model.users;

@Repository
public interface userRepository extends JpaRepository<users,Integer> {
	
	@Modifying
	@Query(value="update users set trainer_id= :trainer_id where login_id= :user_id",nativeQuery=true)
	void updateTrainerId(@Param("user_id")int user_id,@Param("trainer_id") int trainer_id);

	@Query(value="select * from users where trainer_id =:trainer_id",nativeQuery=true)
	Optional<List<users>> getUserByTrainerId(int trainer_id);
	
	@Query(value="select * from users where login_id =:login_id",nativeQuery=true)
	Optional<users> findUserById(int login_id);
	
	
}
