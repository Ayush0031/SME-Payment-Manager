package com.sme.backend.controller;


import com.sme.backend.model.Email;
import com.sme.backend.model.Vendor;
import com.sme.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emails")
@CrossOrigin("http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Email> sendEmail(@RequestBody Vendor vendor) {
        return ResponseEntity.ok(emailService.sendEmail(vendor));
    }

    @GetMapping
    public ResponseEntity<List<Email>> getAllSentEmails() {
        return ResponseEntity.ok(emailService.getAllSentEmails());
    }
}
