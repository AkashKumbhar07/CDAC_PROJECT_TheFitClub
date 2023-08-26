package com.demo.TheFitClub.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class measurements {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int mesurement_id;
	private float chest;
	private float arm;
	private float waist;
	private float  thigh;
	private float calf;
	private LocalDate mdate;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private users users;

	public measurements() {
		super();
	}

	public measurements(int mesurement_id, float chest, float arm, float waist, float thigh, float calf,
			LocalDate mdate, com.demo.TheFitClub.model.users users) {
		super();
		this.mesurement_id = mesurement_id;
		this.chest = chest;
		this.arm = arm;
		this.waist = waist;
		this.thigh = thigh;
		this.calf = calf;
		this.mdate = mdate;
		this.users = users;
	}

	public int getMesurement_id() {
		return mesurement_id;
	}

	public void setMesurement_id(int mesurement_id) {
		this.mesurement_id = mesurement_id;
	}

	public float getChest() {
		return chest;
	}

	public void setChest(float chest) {
		this.chest = chest;
	}

	public float getArm() {
		return arm;
	}

	public void setArm(float arm) {
		this.arm = arm;
	}

	public float getWaist() {
		return waist;
	}

	public void setWaist(float waist) {
		this.waist = waist;
	}

	public float getThigh() {
		return thigh;
	}

	public void setThigh(float thigh) {
		this.thigh = thigh;
	}

	public float getCalf() {
		return calf;
	}

	public void setCalf(float calf) {
		this.calf = calf;
	}

	public LocalDate getMdate() {
		return mdate;
	}

	public void setMdate(LocalDate mdate) {
		this.mdate = mdate;
	}

	public users getUsers() {
		return users;
	}

	public void setUsers(users users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "measurements [mesurement_id=" + mesurement_id + ", chest=" + chest + ", arm=" + arm + ", waist=" + waist
				+ ", thigh=" + thigh + ", calf=" + calf + ", mdate=" + mdate + ", users=" + users + "]";
	}
	
	
}
