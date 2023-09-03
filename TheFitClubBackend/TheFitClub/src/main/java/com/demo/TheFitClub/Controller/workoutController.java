package com.demo.TheFitClub.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.TheFitClub.Service.exercisesService;
import com.demo.TheFitClub.Service.userService;
import com.demo.TheFitClub.Service.workoutService;
import com.demo.TheFitClub.model.exercises;
import com.demo.TheFitClub.model.workout;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/workout")
public class workoutController {

	@Autowired
	private exercisesService exercisesservice;

	@Autowired
	private workoutService workoutservice;

	@Autowired
	private userService userservice;

	// GET ALL EXERCISES
	@GetMapping("/getExercise")
	public List<exercises> getAllExercises() {
		return exercisesservice.findAll();
	}

	// TRAINER CAN FETCH EXERCISE BY ID
	@GetMapping("/exercises/{exercise_name}")
	public ResponseEntity<Optional<exercises>> getExercise(@PathVariable String exercise_name) {
		Optional<exercises> w = java.util.Optional.empty();
		try {
			w = exercisesservice.getById(exercise_name);
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

	@GetMapping("/getWorkoutById/{user_id}")
	public ResponseEntity<Optional<List<workout>>> getWorkoutById(@PathVariable int user_id) {
		Optional<List<workout>> w = java.util.Optional.empty();
		try {
			w = workoutservice.getWorkoutById(user_id);
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

	// GET WORKOUT BY WORKOUT ID
	@GetMapping("/getWorkoutByWid/{workout_id}")
	public ResponseEntity<Optional<List<workout>>> getWorkoutByWid(@PathVariable int workout_id) {
		Optional<List<workout>> w = java.util.Optional.empty();
		try {
			w = workoutservice.getWorkoutByWid(workout_id);
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

	// TRAINER CAN ADD WORKOUT TO PERTICULAR USER
	@PostMapping("/addWorkout")
	public ResponseEntity<String> addWorkout(@RequestBody workout w) {

		workoutservice.addWorkout(w);
		return ResponseEntity.ok("Added Successfully");

	}

	// UPDATE WORKOUT OF USER BY TRAINER
	@PutMapping("/updateWorkout/{workout_id}")
	public ResponseEntity<String> updateWorkout(@PathVariable("workout_id") int workout_id, @RequestBody workout w) {
		Optional<workout> ur = workoutservice.getById(workout_id);

		if (ur.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else
			workoutservice.updateWorkout(workout_id, w);
		return ResponseEntity.ok("modified successfully");

	}

	// DELETE WORKOUT OF USER BY TRAINER
	@DeleteMapping("/deleteWorkout/{workout_id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int workout_id) {
		workoutservice.deleteByWid(workout_id);
		return ResponseEntity.ok("Deleted successfully");

	}

}
