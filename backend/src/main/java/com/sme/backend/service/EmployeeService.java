package com.sme.backend.service;

import com.sme.backend.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    List<Employee> getAllEmployees();

    boolean existsById(String email);
}
