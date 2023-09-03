package com.demo.TheFitClub.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class workout {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int workout_id;
	private int sets;
	private int repetations;
	private int rest;
	private int phase;
	private int user_id;
	private String exercise_name;

//	@ManyToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name="exercise_name")
//	private exercises exercises;

//	@ManyToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name="user_id")
//	private users users;

	public workout() {
		super();
	}

	public workout(int workout_id, int sets, int repetations, int rest, int phase, int user_id, String exercise_name) {
		super();
		this.workout_id = workout_id;
		this.sets = sets;
		this.repetations = repetations;
		this.rest = rest;
		this.phase = phase;
		this.user_id = user_id;
		this.exercise_name = exercise_name;
	}

	public int getWorkout_id() {
		return workout_id;
	}

	public void setWorkout_id(int workout_id) {
		this.workout_id = workout_id;
	}

	public int getSets() {
		return sets;
	}

	public void setSets(int sets) {
		this.sets = sets;
	}

	public int getRepetations() {
		return repetations;
	}

	public void setRepetations(int repetations) {
		this.repetations = repetations;
	}

	public int getRest() {
		return rest;
	}

	public void setRest(int rest) {
		this.rest = rest;
	}

	public int getPhase() {
		return phase;
	}

	public void setPhase(int phase) {
		this.phase = phase;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getExercise_name() {
		return exercise_name;
	}

	public void setExercise_name(String exercise_name) {
		this.exercise_name = exercise_name;
	}

	@Override
	public String toString() {
		return "workout [workout_id=" + workout_id + ", sets=" + sets + ", repetations=" + repetations + ", rest="
				+ rest + ", phase=" + phase + ", user_id=" + user_id + ", exercise_name=" + exercise_name + "]";
	}

}
