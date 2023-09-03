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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.TheFitClub.Service.dietService;
import com.demo.TheFitClub.Service.nutritionService;
import com.demo.TheFitClub.Service.userService;
import com.demo.TheFitClub.model.diet;
import com.demo.TheFitClub.model.nutrition;
import com.demo.TheFitClub.model.users;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/diet")
public class dietController {

	@Autowired
	private nutritionService nutritionservice;

	@Autowired
	private dietService dietservice;

	@Autowired
	private userService userservice;

	// TRAINER CAN GET NUTRITION FROM HERE
	@GetMapping("/getNutrition")
	public List<nutrition> getAllNutrition() {
		return nutritionservice.findAll();
	}

	// TRAINER CAN ADD NUTRITION TO DIET TABLE OF USER;
	@GetMapping("/getNutrition/{nutri_name}")
	public ResponseEntity<Optional<nutrition>> getNutritionById(@PathVariable String nutri_name) {
		Optional<nutrition> n = java.util.Optional.empty();
		try {
			n = nutritionservice.getNutritionById(nutri_name);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (n != null)
			// return successful return
			return ResponseEntity.ok(n);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	// TRAINER CAN FETCH DIET BY USER
	@GetMapping("/getDiet/{user_id}")
	public ResponseEntity<Optional<List<diet>>> getDietByUser(@PathVariable int user_id) {
		Optional<List<diet>> d = java.util.Optional.empty();
		try {
			d = dietservice.getDietByUser(user_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (d != null)
			// return successful return
			return ResponseEntity.ok(d);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	// TRAINER CAN ADD DIET TO CLIENT
	@PostMapping("/addDiet/{user_id}")
	public ResponseEntity<String> addDiet(@PathVariable("user_id") int user_id, @RequestBody diet d) {
		Optional<users> u = userservice.getByUserId(user_id);

		if (u.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else

			dietservice.addDiet(d);
		return ResponseEntity.ok("Added Successfully");

	}

	// DELETE DIET OF USER BY TRAINER
	@DeleteMapping("/deleteDiet/{diet_id}")
	public ResponseEntity<String> deleteDiet(@PathVariable int diet_id) {
		dietservice.deleteByDid(diet_id);
		return ResponseEntity.ok("Deleted successfully");

	}

	// SEARCH BY NAME NUTRITION
	@GetMapping("/dietSearch/{nutri_name}")
	public ResponseEntity<List<nutrition>> searchNutritionByName(@PathVariable("nutri_name") String nutri_name) {
		System.out.println(nutri_name);
		List<nutrition> nutrition = nutritionservice.searchNutritionByName(nutri_name);
		return ResponseEntity.ok(nutrition);
	}
}
