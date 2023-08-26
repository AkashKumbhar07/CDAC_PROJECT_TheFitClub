package com.demo.TheFitClub.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class diet {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int diet_id;
	private float quantity;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="nutrition_id")
	private nutrition nutrition;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private users users;

	public diet() {
		super();
	}

	public diet(int diet_id, float quantity, com.demo.TheFitClub.model.nutrition nutrition,
			com.demo.TheFitClub.model.users users) {
		super();
		this.diet_id = diet_id;
		this.quantity = quantity;
		this.nutrition = nutrition;
		this.users = users;
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

	public nutrition getNutrition() {
		return nutrition;
	}

	public void setNutrition(nutrition nutrition) {
		this.nutrition = nutrition;
	}

	public users getUsers() {
		return users;
	}

	public void setUsers(users users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "diet [diet_id=" + diet_id + ", quantity=" + quantity + ", nutrition=" + nutrition + ", users=" + users
				+ "]";
	}
	
	
	
}
