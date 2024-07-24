package com.sme.backend.service;

import com.sme.backend.model.Employee;
import com.sme.backend.repository.EmployeeRepository;
import com.sme.backend.util.EmailUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmailUtility emailUtility;

    @Override
    public Employee saveEmployee(Employee employee) {
        if (!emailUtility.isEmailUnique(employee.getEmail())) {
            throw new IllegalArgumentException("Email must be unique across employees and vendors");
        }
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    public boolean existsById(String email) {
        return employeeRepository.existsById(email);
    }
}
