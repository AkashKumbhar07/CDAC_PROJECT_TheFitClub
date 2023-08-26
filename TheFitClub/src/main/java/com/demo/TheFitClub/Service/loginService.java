package com.demo.TheFitClub.Service;

import java.util.Optional;

import com.demo.TheFitClub.model.login;

public interface loginService {

	Optional<login> authenticate(String userName, String password);

}
