package com.crud.backend.service;

import com.crud.backend.exception.UserNotFoundExcpetion;
import com.crud.backend.model.Employee;
import com.crud.backend.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo ;

    @Autowired
    public EmployeeService( EmployeeRepo employeeRepo ) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee( Employee employee ) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees() {

        return employeeRepo.findAll();
    }

    public Employee updateEmployee( Employee employee ) {
        return employeeRepo.save(employee);
    }

    public void deleteEmployee( Long id ) {
        employeeRepo.deleteEmployeeById(id);
    }

    public Employee findEmployeeById( long id ) {
        return employeeRepo.findEmployeeById(id).orElseThrow(()->new UserNotFoundExcpetion("user at id " + id +" not found"));
    }
}
