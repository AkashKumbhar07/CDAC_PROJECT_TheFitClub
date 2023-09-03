package com.demo.TheFitClub.model;

import java.time.LocalDate;
import java.util.Arrays;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

@Entity
public class trainer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int trainer_id;
	private String name;
	private byte[] profile_pic;
	@Transient
	private String base64Image;
	private LocalDate DOB;
	private String gender;
	private String email;
	private String phoneNo;
	private String city;
	private String country;
	private int isActive;
	private String specialization;
	private int experience;
	private String bio;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="login_id")
	private login login;

	public trainer() {
		super();
	}

	public trainer(int trainer_id, String name, byte[] profile_pic, String base64Image, LocalDate dOB, String gender,
			String email, String phoneNo, String city, String country, int isActive, String specialization,
			int experience, String bio, com.demo.TheFitClub.model.login login) {
		super();
		this.trainer_id = trainer_id;
		this.name = name;
		this.profile_pic = profile_pic;
		this.base64Image = base64Image;
		DOB = dOB;
		this.gender = gender;
		this.email = email;
		this.phoneNo = phoneNo;
		this.city = city;
		this.country = country;
		this.isActive = isActive;
		this.specialization = specialization;
		this.experience = experience;
		this.bio = bio;
		this.login = login;
	}

	public int getTrainer_id() {
		return trainer_id;
	}

	public void setTrainer_id(int trainer_id) {
		this.trainer_id = trainer_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getProfile_pic() {
		return profile_pic;
	}

	public void setProfile_pic(byte[] profile_pic) {
		this.profile_pic = profile_pic;
	}

	public String getBase64Image() {
		return base64Image;
	}

	public void setBase64Image(String base64Image) {
		this.base64Image = base64Image;
	}

	public LocalDate getDOB() {
		return DOB;
	}

	public void setDOB(LocalDate dOB) {
		DOB = dOB;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public login getLogin() {
		return login;
	}

	public void setLogin(login login) {
		this.login = login;
	}

	@Override
	public String toString() {
		return "trainer [trainer_id=" + trainer_id + ", name=" + name + ", profile_pic=" + Arrays.toString(profile_pic)
				+ ", base64Image=" + base64Image + ", DOB=" + DOB + ", gender=" + gender + ", email=" + email
				+ ", phoneNo=" + phoneNo + ", city=" + city + ", country=" + country + ", isActive=" + isActive
				+ ", specialization=" + specialization + ", experience=" + experience + ", bio=" + bio + ", login="
				+ login + "]";
	}
	
	
	
	
}
