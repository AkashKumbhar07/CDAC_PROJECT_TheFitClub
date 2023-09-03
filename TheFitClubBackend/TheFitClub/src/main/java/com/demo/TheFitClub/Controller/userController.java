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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.TheFitClub.Service.measurementService;
import com.demo.TheFitClub.Service.userService;
import com.demo.TheFitClub.model.measurements;
import com.demo.TheFitClub.model.users;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class userController {

	@Autowired
	private userService userservice;

	@Autowired
	private measurementService measurementservice;

	// ADMIN CAN GET ALL USERS
	@GetMapping("/getUsers")
	public List<users> getAllUsers() {
		return userservice.findAll();
	}

	// USERS DETAILS BY ID
	@GetMapping("/getUser/{login_id}")
	public ResponseEntity<Optional<users>> getUser(@PathVariable int login_id) {
		Optional<users> u = userservice.getById(login_id);
		if (u != null)
			// return successful return
			return ResponseEntity.ok(u);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	// USER REGISTRATION
	@PostMapping("/addUser")
	public ResponseEntity<?> createUser(@RequestBody users u) {
		userservice.addUser(u);
		return ResponseEntity.ok("Added Successfully");
	}

	@PutMapping("/updateUser/{user_id}/{trainer_id}")
	public ResponseEntity<String> updateUserTrainerId(@PathVariable("user_id") int user_id,
			@PathVariable("trainer_id") int trainer_id) {
		Optional<users> ur = userservice.getById(user_id);
		if (ur.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else
			userservice.updateTrainerId(user_id, trainer_id);
		return ResponseEntity.ok("modified successfully");
	}

	// TRAINER WILL GET USERS MESUREMENTS FOR ASSESSMENT.
	@GetMapping("/getUserMeasurements/{user_id}")
	public ResponseEntity<Optional<List<measurements>>> getUserMeasurements(@PathVariable int user_id) {
		Optional<List<measurements>> m = java.util.Optional.empty();
		try {
			m = measurementservice.getById(user_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (m != null)
			// return successful return
			return ResponseEntity.ok(m);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	// USER WILL UPDATE HIS MEASUREMENTS
	@PutMapping("/updateMeasurement/{user_id}")
	public ResponseEntity<String> updateMeasurement(@PathVariable("user_id") int user_id, @RequestBody measurements m) {
		Optional<users> ur = userservice.getByUserId(user_id);

		if (ur.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else
			measurementservice.updateMeasurement(user_id, m);
		return ResponseEntity.ok("modified successfully");

	}
}
