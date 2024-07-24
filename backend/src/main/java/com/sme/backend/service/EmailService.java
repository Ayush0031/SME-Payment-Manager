package com.sme.backend.service;

import com.sme.backend.model.Email;
import com.sme.backend.model.Vendor;

import java.util.List;

public interface EmailService {
    Email sendEmail(Vendor vendor);
    List<Email> getAllSentEmails();
}
