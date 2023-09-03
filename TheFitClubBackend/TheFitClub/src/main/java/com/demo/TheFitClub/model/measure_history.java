package com.demo.TheFitClub.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class measure_history {
	
	private int mesurement_id;
	private String chest;
	private String arm;
	private String waist;
	private String thigh;
	private String calf;
	@Id
	private LocalDate mdate;
	private int user_id;
	public measure_history() {
		super();
	}
	public measure_history(int mesurement_id, String chest, String arm, String waist, String thigh, String calf,
			LocalDate mdate, int user_id) {
		super();
		this.mesurement_id = mesurement_id;
		this.chest = chest;
		this.arm = arm;
		this.waist = waist;
		this.thigh = thigh;
		this.calf = calf;
		this.mdate = mdate;
		this.user_id = user_id;
	}
	public int getMesurement_id() {
		return mesurement_id;
	}
	public void setMesurement_id(int mesurement_id) {
		this.mesurement_id = mesurement_id;
	}
	public String getChest() {
		return chest;
	}
	public void setChest(String chest) {
		this.chest = chest;
	}
	public String getArm() {
		return arm;
	}
	public void setArm(String arm) {
		this.arm = arm;
	}
	public String getWaist() {
		return waist;
	}
	public void setWaist(String waist) {
		this.waist = waist;
	}
	public String getThigh() {
		return thigh;
	}
	public void setThigh(String thigh) {
		this.thigh = thigh;
	}
	public String getCalf() {
		return calf;
	}
	public void setCalf(String calf) {
		this.calf = calf;
	}
	public LocalDate getMdate() {
		return mdate;
	}
	public void setMdate(LocalDate mdate) {
		this.mdate = mdate;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	@Override
	public String toString() {
		return "measure_history [mesurement_id=" + mesurement_id + ", chest=" + chest + ", arm=" + arm + ", waist="
				+ waist + ", thigh=" + thigh + ", calf=" + calf + ", mdate=" + mdate + ", user_id=" + user_id + "]";
	}
	
	
}
