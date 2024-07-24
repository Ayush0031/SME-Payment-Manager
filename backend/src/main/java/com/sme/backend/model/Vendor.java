package com.sme.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
@Table(name = "vendors")
public class Vendor extends Person{
    private String UPI;

    public Vendor(String name, String email, String UPI) {
        super(name, email);
        this.UPI = UPI;
    }
}
