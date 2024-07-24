package com.sme.backend.service;

import com.sme.backend.model.Vendor;

import java.util.List;

public interface VendorService {
    Vendor saveVendor(Vendor vendor);
    List<Vendor> getAllVendors();

    boolean existsById(String email);
}
