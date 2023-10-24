package com.demo.TheFitClub.model;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class certificates {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int certificate_id;
	private String name;
	private byte[] certificate_img;

	private int trainer_id;

	public certificates() {
		super();
	}

	public certificates(int certificate_id, String name, byte[] certificate_img, int trainer_id) {
		super();
		this.certificate_id = certificate_id;
		this.name = name;
		this.certificate_img = certificate_img;
		this.trainer_id = trainer_id;
	}

	public int getCertificate_id() {
		return certificate_id;
	}

	public void setCertificate_id(int certificate_id) {
		this.certificate_id = certificate_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getCertificate_img() {
		return certificate_img;
	}

	public void setCertificate_img(byte[] certificate_img) {
		this.certificate_img = certificate_img;
	}

	public int getTrainer_id() {
		return trainer_id;
	}

	public void setTrainer_id(int trainer_id) {
		this.trainer_id = trainer_id;
	}

	@Override
	public String toString() {
		return "certificates [certificate_id=" + certificate_id + ", name=" + name + ", certificate_img="
				+ Arrays.toString(certificate_img) + ", trainer_id=" + trainer_id + "]";
	}

	
	
	

}