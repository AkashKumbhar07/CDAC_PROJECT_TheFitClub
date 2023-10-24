package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.trainerRepository;
import com.demo.TheFitClub.model.trainer;

@Service
public class trainerServiceImpl implements trainerService{
	
	@Autowired
	private trainerRepository trainerrepository;

	@Override
	public List<trainer> findAll() {
		return trainerrepository.findAll();
	}

	@Override
	public Optional<trainer> getById(int trainer_id) {
		
		return trainerrepository.findByIdTrainer(trainer_id);
	}

	@Override
	public void addTrainer(trainer t) {
		trainerrepository.save(t);
		
	}

	@Override
	public trainer savetr(trainer tr) {
		
		return trainerrepository.save(tr);
	}

	@Override
	public Optional<trainer> getBytrid(int trainer_id) {
	
		return trainerrepository.findById(trainer_id);
	}
	
	
	public trainer acceptTrainerRegistration(int trainer_id) {
        trainer trainer = trainerrepository.findById(trainer_id)
            .orElseThrow(() -> new EntityNotFoundException("Trainer not found"));

        trainer.setIsActive(1);
        return trainerrepository.save(trainer);
    }

    public void rejectTrainerRegistration(int trainer_id) {
        trainerrepository.deleteById(trainer_id);
    }

	@Override
	public List<trainer> findAllActive() {
		
		return trainerrepository.findAllActive();
	}

	
}
