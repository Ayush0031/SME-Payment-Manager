package com.sme.backend.controller;

import com.sme.backend.model.Employee;
import com.sme.backend.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        return ResponseEntity.ok(employeeService.saveEmployee(employee));
    }
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

}
