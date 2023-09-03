package com.demo.TheFitClub.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.TheFitClub.Service.trainerService;
import com.demo.TheFitClub.Service.userService;
import com.demo.TheFitClub.model.trainer;
import com.demo.TheFitClub.model.users;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/trainer")
public class trainerController {

	@Autowired
	private trainerService trainerservice;

	@Autowired
	private userService userservice;

	

	// ADMIN CAN FETCH ALL TRAINERS
	@GetMapping("/getTrainers")
	public List<trainer> getAllTrainers() {
		return trainerservice.findAll();
	}

	// USERS DETAILS BY ID
	@GetMapping("/getTrainer/{trainer_id}")
	public ResponseEntity<Optional<trainer>> getTrainer(@PathVariable int trainer_id) {
		Optional<trainer> t = trainerservice.getById(trainer_id);
		if (t != null)
			// return successful return
			return ResponseEntity.ok(t);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping("/addTrainer")
	public ResponseEntity<String> createTrainer(@RequestBody trainer t) {
		trainerservice.addTrainer(t);
		return ResponseEntity.ok("Added Successfully");

	}

	// GET USERS BY TRAINER .... ADMIN CAN FETCH USERS BY TRAINER
	@GetMapping("/getUsersByTrainer/{trainer_id}")
	public ResponseEntity<Optional<List<users>>> getUsersByTrainer(@PathVariable int trainer_id) {
		Optional<List<users>> w = java.util.Optional.empty();
		try {
			w = userservice.getUserByTrainer(trainer_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (w != null)
			// return successful return
			return ResponseEntity.ok(w);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

}