package com.bajfin.st.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bajfin.st.app.entity.BfEntity;

public interface BfRepo extends JpaRepository<BfEntity, String>  {

}
