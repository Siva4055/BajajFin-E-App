package com.bajfin.st.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bajfin.st.app.entity.BfLoanEntity;

public interface BfLoanRepo extends JpaRepository<BfLoanEntity, String> {

	
	
}
