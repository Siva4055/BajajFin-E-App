package com.bajfin.st.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bajfin.st.app.entity.BfLoanEntity;
import com.bajfin.st.app.repo.BfLoanRepo;

@Service
public class BfLoanService {

	@Autowired
	BfLoanRepo bfLoanRepo;
	
	
public String saveNewBfLoanUser(BfLoanEntity bfLoanUser) {
		
		String res =""; 
		try {
		bfLoanRepo.save(bfLoanUser);
		res="Successfully added new user     " + "  " +bfLoanUser.getPan()+" into DB";	
		}catch(Exception e) {
			res="not able to insert new user..." +bfLoanUser.getPan();
		}
		return res;
	}

	public  List<BfLoanEntity> getAllUsers() {
		// TODO Auto-generated method stub
		return bfLoanRepo.findAll();
	}
	
	
	
	
}
