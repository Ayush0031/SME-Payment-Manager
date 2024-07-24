package com.sme.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="employees")
public class Employee extends Person{
    private String designation;
    private double ctc;

    public Employee(String name, String email, String designation, double ctc) {
        super(name, email);
        this.designation = designation;
        this.ctc = ctc;
    }

}
