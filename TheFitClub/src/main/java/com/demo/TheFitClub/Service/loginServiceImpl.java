package com.demo.TheFitClub.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.TheFitClub.Repository.loginRepository;
import com.demo.TheFitClub.model.login;

@Service
public class loginServiceImpl implements loginService{

	@Autowired
	private loginRepository loginrepository;
	
	@Override
	public Optional<login> authenticate(String userName, String password) {
		
		return loginrepository.findByUserNameAndPassword(userName, password);
	}

}
