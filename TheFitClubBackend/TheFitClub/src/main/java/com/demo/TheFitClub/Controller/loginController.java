package com.demo.TheFitClub.Controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.TheFitClub.Service.loginService;
import com.demo.TheFitClub.model.login;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/login")
public class loginController {

	@Autowired
	private loginService loginservice;

	@GetMapping("/{userName}/{password}")
	public ResponseEntity<Optional<login>> getVerifiedUser(@PathVariable String userName,
			@PathVariable String password) {
		Optional<login> u = loginservice.authenticate(userName, password);

		if (u != null)
			// return successful return
			return ResponseEntity.ok(u);
		else
			// returns the message that the data not found
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

//	@PostMapping("/login")
//    public String login(@RequestBody login loginRequest, HttpServletRequest request) throws ServletException, IOException{
//       login user = loginservice.authenticate(loginRequest.getUserName(), loginRequest.getPassword());
//        if (user != null) {
//            HttpSession session = request.getSession();
//            session.setAttribute("user", user);
//            return "Login successful";
//        }
//        return "Login failed";
//    }

	@GetMapping("/logout")
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate();
			return "Logout successful";
		} else {
			return "No active session found";
		}
	}

}
