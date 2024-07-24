package com.sme.backend.util;


import com.sme.backend.repository.EmployeeRepository;
import com.sme.backend.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmailUtility {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private VendorRepository vendorRepository;

    public boolean isEmailUnique(String email) {
        return !employeeRepository.existsById(email) && !vendorRepository.existsById(email);
    }
}
