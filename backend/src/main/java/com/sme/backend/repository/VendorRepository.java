package com.sme.backend.repository;

import com.sme.backend.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor,String> {
    boolean existsById(String email);
}
