package com.bajfin.st.app.service;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bajfin.st.app.entity.BfEntity;
import com.bajfin.st.app.repo.BfRepo;

@Service
public class BfService {
	
	
    @Autowired
	BfRepo bfRepo;
	
	
	public String saveNewBfUser(BfEntity bfUser) {
		
		String res =""; 
		try {
		bfRepo.save(bfUser);
		res="Successfully added new user" +bfUser.getEmail()+" into DB";	
		}catch(Exception e) {
			res="not able to insert new user..." +bfUser.getEmail();
		}
		return res;
	}

	public  List<BfEntity> getAllUsers() {
		// TODO Auto-generated method stub
		return bfRepo.findAll();
	}
	
	public boolean searchBfUser(String email, String password) {

		boolean res = false;
		
		try {
			BfEntity oldStu = bfRepo.findById(email).get();
			if( 
					(oldStu.getEmail().contentEquals(email))
				&&(oldStu.getPassword().contentEquals(password)
						)){
			 
				res = true;
			}
		} catch (Exception e) {
			
		
		}


		
		return res;
	
	}
}
