package com.bajfin.st.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
import com.bajfin.st.app.entity.BfLoanEntity;
import com.bajfin.st.app.service.BfLoanService;

@RestController
@CrossOrigin("*")
public class BfLoanController {
	
	
    @Autowired
	BfLoanService bfLoanService;
    
    @PostMapping("/baj/loan/add/user")
    public String addNewBfLoanUser(@RequestBody BfLoanEntity bfLoanUser) {
    	 System.out.println("Successfully added new user--->" +bfLoanUser);
    	 return bfLoanService.saveNewBfLoanUser(bfLoanUser);
    }
    
    @GetMapping("/baj/loan/get/all")
    public List<BfLoanEntity> getAllUsers(){
    	 return bfLoanService.getAllUsers();
    }
   
	
}
