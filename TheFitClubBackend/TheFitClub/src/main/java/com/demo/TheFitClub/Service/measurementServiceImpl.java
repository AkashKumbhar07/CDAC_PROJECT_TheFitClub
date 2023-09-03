package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.measurementRepository;
import com.demo.TheFitClub.model.measurements;

@Service
public class measurementServiceImpl implements measurementService {

	@Autowired
	private measurementRepository measurementrepository;

	

	@Override
	public measurements updateMeasurement(int user_id, measurements m) {
		Optional<measurements> exsitingMeasurement = measurementrepository.getMeasureById(user_id);

		if (exsitingMeasurement.isPresent()) {
			measurements measure = exsitingMeasurement.get();

			measure.setArm(m.getArm());
			measure.setCalf(m.getCalf());
			measure.setChest(m.getChest());
			measure.setMdate(m.getMdate());
			measure.setThigh(m.getThigh());
			measure.setWaist(m.getWaist());
			measure.setUser_id(m.getUser_id());
			return measurementrepository.save(m);
		} else
			return measurementrepository.save(m);
	}



	@Override
	public Optional<List<measurements>> getById(int user_id) {
		Optional<List<measurements>> mlist= measurementrepository.getMeasurementByUserId(user_id);
		if(mlist.isEmpty()) {
	     return Optional.empty();
		}else
		return mlist;
	}

}
