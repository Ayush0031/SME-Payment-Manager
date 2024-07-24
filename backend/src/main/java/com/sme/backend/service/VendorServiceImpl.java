package com.sme.backend.service;

import com.sme.backend.model.Vendor;
import com.sme.backend.repository.VendorRepository;
import com.sme.backend.util.EmailUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class VendorServiceImpl implements VendorService{
    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private EmailUtility emailUtility;

    @Override
    public Vendor saveVendor(Vendor vendor) {
        if (!emailUtility.isEmailUnique(vendor.getEmail())) {
            throw new IllegalArgumentException("Email must be unique across employees and vendors");
        }
        return vendorRepository.save(vendor);
    }

    @Override
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    @Override
    public boolean existsById(String email) {
        return vendorRepository.existsById(email);
    }
}
