package com.sme.backend.controller;
import com.sme.backend.model.Vendor;
import com.sme.backend.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {
    @Autowired
    private VendorService vendorService;

    @PostMapping
    public ResponseEntity<Vendor> createVendor(@RequestBody Vendor vendor){
        return ResponseEntity.ok(vendorService.saveVendor(vendor));
    }
    @GetMapping
    public ResponseEntity<List<Vendor>> getAllVendors(){
        return ResponseEntity.ok(vendorService.getAllVendors());
    }

}
