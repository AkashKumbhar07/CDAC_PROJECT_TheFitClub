package com.demo.TheFitClub.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class nutrition {
		
	@Id
	private String nutri_name;
	private String food_group;
	private float calories;
	private float fat;
	private float protein;
	private float carbohydrates;
	private float fiber;
	private int quantity;
	public nutrition() {
		super();
	}
	public nutrition(String nutri_name, String food_group, float calories, float fat, float protein,
			float carbohydrates, float fiber, int quantity) {
		super();
		this.nutri_name = nutri_name;
		this.food_group = food_group;
		this.calories = calories;
		this.fat = fat;
		this.protein = protein;
		this.carbohydrates = carbohydrates;
		this.fiber = fiber;
		this.quantity = quantity;
	}
	public String getNutri_name() {
		return nutri_name;
	}
	public void setNutri_name(String nutri_name) {
		this.nutri_name = nutri_name;
	}
	public String getFood_group() {
		return food_group;
	}
	public void setFood_group(String food_group) {
		this.food_group = food_group;
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
	public float getFiber() {
		return fiber;
	}
	public void setFiber(float fiber) {
		this.fiber = fiber;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "nutrition [nutri_name=" + nutri_name + ", food_group=" + food_group + ", calories=" + calories
				+ ", fat=" + fat + ", protein=" + protein + ", carbohydrates=" + carbohydrates + ", fiber=" + fiber
				+ ", quantity=" + quantity + "]";
	}
	
	
	
	
	
	
	
}
