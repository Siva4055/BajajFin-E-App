package com.bajfin.st.app.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bajfin.st.app.entity.BfEntity;
import com.bajfin.st.app.service.BfService;

@RestController
@CrossOrigin("*")
public class BfController {
	
	
	
    @Autowired
	BfService bfService;
	
    @PostMapping("/baj/reg/add/user")
    public String addNewBfUser(@RequestBody BfEntity bfUser) {
       System.out.println("Successfully added new user--->" +bfUser);
    	 return bfService.saveNewBfUser(bfUser);
    	
    }
    @GetMapping("/baj/reg/get/all")
    public List<BfEntity> getAllUsers(){
    	 return bfService.getAllUsers();
    }
   
    @GetMapping("/baj/reg/search/user")
	public boolean searchBfUser(@RequestParam String email,
			String password) {
		return  bfService.searchBfUser(email,password);
	}
	
	
	
	
}
