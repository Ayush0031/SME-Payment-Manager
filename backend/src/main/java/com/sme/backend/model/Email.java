package com.sme.backend.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@Entity
public class Email {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String recipientEmail;
    private String subject;
    private String body;

    public Email(String recipientEmail, String subject, String body) {
        this.recipientEmail = recipientEmail;
        this.subject = subject;
        this.body = body;
    }
}
