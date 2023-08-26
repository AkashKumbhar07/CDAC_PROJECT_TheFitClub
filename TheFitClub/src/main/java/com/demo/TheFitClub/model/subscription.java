package com.demo.TheFitClub.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class subscription {
	
	@Id
	private int subscription_id;
	private String sname;
	private float price;

	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="trainer_id")
	private trainer trainer;


	public subscription() {
		super();
	}


	public subscription(int subscription_id, String sname, float price, com.demo.TheFitClub.model.trainer trainer) {
		super();
		this.subscription_id = subscription_id;
		this.sname = sname;
		this.price = price;
		this.trainer = trainer;
	}


	public int getSubscription_id() {
		return subscription_id;
	}


	public void setSubscription_id(int subscription_id) {
		this.subscription_id = subscription_id;
	}


	public String getSname() {
		return sname;
	}


	public void setSname(String sname) {
		this.sname = sname;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public trainer getTrainer() {
		return trainer;
	}


	public void setTrainer(trainer trainer) {
		this.trainer = trainer;
	}


	@Override
	public String toString() {
		return "subscription [subscription_id=" + subscription_id + ", sname=" + sname + ", price=" + price
				+ ", trainer=" + trainer + "]";
	}
	
	

}
