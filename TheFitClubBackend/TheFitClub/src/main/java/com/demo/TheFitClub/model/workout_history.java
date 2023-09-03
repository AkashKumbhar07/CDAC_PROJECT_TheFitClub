package com.demo.TheFitClub.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class workout_history {
	
	
	private int workout_id;
	private int sets;
	private int repetations;
	private int rest;
	private int phase;
	private int exercise_name;
	@Id
	private LocalDate wDate;
	private int user_id;
	public workout_history() {
		super();
	}
	public workout_history(int workout_id, int sets, int repetations, int rest, int phase, int exercise_name,
			LocalDate wDate, int user_id) {
		super();
		this.workout_id = workout_id;
		this.sets = sets;
		this.repetations = repetations;
		this.rest = rest;
		this.phase = phase;
		this.exercise_name = exercise_name;
		this.wDate = wDate;
		this.user_id = user_id;
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
	public int getExercise_name() {
		return exercise_name;
	}
	public void setExercise_name(int exercise_name) {
		this.exercise_name = exercise_name;
	}
	public LocalDate getwDate() {
		return wDate;
	}
	public void setwDate(LocalDate wDate) {
		this.wDate = wDate;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	@Override
	public String toString() {
		return "workout_history [workout_id=" + workout_id + ", sets=" + sets + ", repetations=" + repetations
				+ ", rest=" + rest + ", phase=" + phase + ", exercise_name=" + exercise_name + ", wDate=" + wDate
				+ ", user_id=" + user_id + "]";
	}
	
	
	
	
}
