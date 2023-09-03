package com.demo.TheFitClub.Service;

import java.util.List;
import java.util.Optional;

import com.demo.TheFitClub.model.measurements;

public interface measurementService {

	Optional<List<measurements>> getById(int user_id);

	measurements updateMeasurement(int user_id, measurements m);

}
