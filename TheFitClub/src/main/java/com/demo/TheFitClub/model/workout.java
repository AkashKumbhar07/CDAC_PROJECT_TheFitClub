package com.demo.TheFitClub.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class workout {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int workout_id;
	private int sets;
	private int repetations;
	private int rest;
	private int month;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="exercise_id")
	private exercises exercises;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private users users;

	public workout() {
		super();
	}

	public workout(int workout_id, int sets, int repetations, int rest, int month,
			com.demo.TheFitClub.model.exercises exercises, com.demo.TheFitClub.model.users users) {
		super();
		this.workout_id = workout_id;
		this.sets = sets;
		this.repetations = repetations;
		this.rest = rest;
		this.month = month;
		this.exercises = exercises;
		this.users = users;
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

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public exercises getExercises() {
		return exercises;
	}

	public void setExercises(exercises exercises) {
		this.exercises = exercises;
	}

	public users getUsers() {
		return users;
	}

	public void setUsers(users users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "workout [workout_id=" + workout_id + ", sets=" + sets + ", repetations=" + repetations + ", rest="
				+ rest + ", month=" + month + ", exercises=" + exercises + ", users=" + users + "]";
	}
	
	
	
	
}
