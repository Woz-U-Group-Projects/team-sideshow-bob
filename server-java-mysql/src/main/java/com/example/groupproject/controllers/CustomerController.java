package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Customer;
import com.example.groupproject.models.CustomerRepository;




@RestController
@RequestMapping("/customer")
public class CustomerController {

  @Autowired
  CustomerRepository customerRepository;

  @GetMapping()
  public List<Customer> getCustomer() {
    return customerRepository.findAll();
  }
  
  @GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomer(@PathVariable(value="id") Long id) {
		Customer foundCustomer = customerRepository.findById(id).orElse(null);
		if(foundCustomer == null) {
			return ResponseEntity.notFound().header("Post", "Nothing found with that id").build();
		}
		return ResponseEntity.ok(foundCustomer);
	}

  @PostMapping()
  public Customer addCustomer(@RequestBody Customer customer) {
    return customerRepository.save(customer);
  }

  @DeleteMapping("/{id}")
  public void deleteCustomer(@PathVariable Long id) {
    customerRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Customer updateProject(@PathVariable Long id, @RequestBody Customer customer) {
    Customer foundCustomer = customerRepository.findById(id).orElse(null);
    if (foundCustomer != null) {
    	foundCustomer.setFirstName(customer.getFirstName());
    	foundCustomer.setLastName(customer.getLastName());
    	foundCustomer.setEmail(customer.getEmail());
      customerRepository.save(foundCustomer);
      return foundCustomer;
    }
    return null;
  }

}