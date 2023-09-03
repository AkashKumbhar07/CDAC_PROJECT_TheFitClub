package com.demo.TheFitClub.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class subs_details {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int subsDetails_id;
	private String detail;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="subscription_id")
	private subscription subscription;

	public subs_details() {
		super();
	}

	public subs_details(int subsDetails_id, String detail, com.demo.TheFitClub.model.subscription subscription) {
		super();
		this.subsDetails_id = subsDetails_id;
		this.detail = detail;
		this.subscription = subscription;
	}

	public int getSubsDetails_id() {
		return subsDetails_id;
	}

	public void setSubsDetails_id(int subsDetails_id) {
		this.subsDetails_id = subsDetails_id;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public subscription getSubscription() {
		return subscription;
	}

	public void setSubscription(subscription subscription) {
		this.subscription = subscription;
	}

	@Override
	public String toString() {
		return "subs_details [subsDetails_id=" + subsDetails_id + ", detail=" + detail + ", subscription="
				+ subscription + "]";
	}
	
	
	
}
