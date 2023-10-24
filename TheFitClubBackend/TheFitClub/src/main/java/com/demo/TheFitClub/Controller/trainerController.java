package com.demo.TheFitClub.Controller;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.TheFitClub.Repository.certificatesRepository;
import com.demo.TheFitClub.Service.trainerService;
import com.demo.TheFitClub.Service.userService;
import com.demo.TheFitClub.model.certificates;
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

	@Autowired
	private certificatesRepository certificatesrepository;

	// ADMIN CAN FETCH ALL TRAINERS
	@GetMapping("/getTrainers")
	public List<trainer> getAllTrainers() {
		return trainerservice.findAll();
	}
	// 	FETCH ALL ACTIVE TRAINERS
	@GetMapping("/getTrainersActive")
	public List<trainer> getAllActiveTrainers() {
		return trainerservice.findAllActive();
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

	// TRAINER REGISTRATION
	@PostMapping("/addTrainer")
	public ResponseEntity<String> createTrainer(@RequestBody trainer t) {
		trainerservice.addTrainer(t);
		return ResponseEntity.ok("Added Successfully");

	}

	// TRAINER PROFILE UPDATE
	@PutMapping("/updateProfile/{trainer_id}")
	public ResponseEntity<?> uploadCertificateImage(@PathVariable int trainer_id,
			@RequestParam("profile_pic") MultipartFile profile_pic, @RequestParam("name") String name,
			@RequestParam("specialization") String specialization, @RequestParam("experience") int experience,
			@RequestParam("bio") String bio) {
		trainer tr = trainerservice.getBytrid(trainer_id).orElse(null);

		if (tr == null) {
			return ResponseEntity.notFound().build();
		}

		try {
			// Handle the uploaded file here, e.g., save it to a location or convert it to a
			// byte array
			byte[] profileImage = profile_pic.getBytes();
			tr.setProfile_pic(profileImage);
			tr.setName(name);
			tr.setSpecialization(specialization);
			tr.setExperience(experience);
			tr.setBio(bio);

			trainer updatedTrainer = trainerservice.savetr(tr);
			return ResponseEntity.ok(updatedTrainer);
		} catch (IOException e) {
			return ResponseEntity.badRequest().body("Error uploading the image");
		}
	}
	
	@PutMapping("/accept/{trainer_id}")
    public trainer acceptTrainerRegistration(@PathVariable int trainer_id) {
        return trainerservice.acceptTrainerRegistration(trainer_id);
    }

    @DeleteMapping("/reject/{trainer_id}")
    public void rejectTrainerRegistration(@PathVariable int trainer_id) {
    	trainerservice.rejectTrainerRegistration(trainer_id);
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

	// METHOD TO ADD THE CERTIFICATE FOR TRAINER
	@PostMapping("/certificate")
	public ResponseEntity<?> addCertificate(@RequestParam("name") String name,
			@RequestParam("certificate_img") MultipartFile certificate_img,
			@RequestParam("trainer_id") int trainer_id) {

		try {
			certificates certi = new certificates();
			certi.setName(name);
			certi.setTrainer_id(trainer_id);

			if (certificate_img != null) {
				byte[] certificateImage = certificate_img.getBytes();
				certi.setCertificate_img(certificateImage);
			}

			certificates addcerti = certificatesrepository.save(certi);
			return ResponseEntity.ok(addcerti);
		} catch (IOException e) {
			return ResponseEntity.badRequest().body("Error uploading the image");
		}
	}

	// GET CERTIFICATE BY TRAINER ID
	@GetMapping("/certificates/{trainer_id}")
	public ResponseEntity<List<certificates>> getCertificatesByTrainerId(@PathVariable int trainer_id) {
		List<certificates> certificatesList = certificatesrepository.findByTrainerId(trainer_id);

		if (certificatesList.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(certificatesList);
	}

}