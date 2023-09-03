package com.demo.TheFitClub.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class diet_history {
	
	private int diet_id;
	private float quantity;
	private String nutri_name;
	private float calories;
	private float fat;
	private float protein;
	private float carbohydrates;
	private int phase;
	private int meal; 
	private int user_id;
	@Id
	private LocalDate dDate;
	
	
	public diet_history() {
		super();
	}


	public diet_history(int diet_id, float quantity, String nutri_name, float calories, float fat, float protein,
			float carbohydrates, int phase, int meal, int user_id, LocalDate dDate) {
		super();
		this.diet_id = diet_id;
		this.quantity = quantity;
		this.nutri_name = nutri_name;
		this.calories = calories;
		this.fat = fat;
		this.protein = protein;
		this.carbohydrates = carbohydrates;
		this.phase = phase;
		this.meal = meal;
		this.user_id = user_id;
		this.dDate = dDate;
	}


	public int getDiet_id() {
		return diet_id;
	}


	public void setDiet_id(int diet_id) {
		this.diet_id = diet_id;
	}


	public float getQuantity() {
		return quantity;
	}


	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}


	public String getNutri_name() {
		return nutri_name;
	}


	public void setNutri_name(String nutri_name) {
		this.nutri_name = nutri_name;
	}


	public float getCalories() {
		return calories;
	}


	public void setCalories(float calories) {
		this.calories = calories;
	}


	public float getFat() {
		return fat;
	}


	public void setFat(float fat) {
		this.fat = fat;
	}


	public float getProtein() {
		return protein;
	}


	public void setProtein(float protein) {
		this.protein = protein;
	}


	public float getCarbohydrates() {
		return carbohydrates;
	}


	public void setCarbohydrates(float carbohydrates) {
		this.carbohydrates = carbohydrates;
	}


	public int getPhase() {
		return phase;
	}


	public void setPhase(int phase) {
		this.phase = phase;
	}


	public int getMeal() {
		return meal;
	}


	public void setMeal(int meal) {
		this.meal = meal;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public LocalDate getdDate() {
		return dDate;
	}


	public void setdDate(LocalDate dDate) {
		this.dDate = dDate;
	}


	@Override
	public String toString() {
		return "diet_history [diet_id=" + diet_id + ", quantity=" + quantity + ", nutri_name=" + nutri_name
				+ ", calories=" + calories + ", fat=" + fat + ", protein=" + protein + ", carbohydrates="
				+ carbohydrates + ", phase=" + phase + ", meal=" + meal + ", user_id=" + user_id + ", dDate=" + dDate
				+ "]";
	}


	
	
	
	
}
