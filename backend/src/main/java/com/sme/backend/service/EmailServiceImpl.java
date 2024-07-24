package com.sme.backend.service;

import com.sme.backend.model.Email;
import com.sme.backend.model.Vendor;
import com.sme.backend.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmailServiceImpl implements EmailService{
    @Autowired
    private EmailRepository emailRepository;
    @Override
    public Email sendEmail(Vendor vendor) {
        String subject = "Payment Notification";
        String body = String.format("Sending payments to vendor %s at UPI %s", vendor.getName(), vendor.getUPI());

        Email email = new Email(vendor.getEmail(), subject, body);
        emailRepository.save(email);

        System.out.println("Email sent: " + email);
        return email;
    }

    @Override
    public List<Email> getAllSentEmails() {
        return emailRepository.findAll();
    }


}
