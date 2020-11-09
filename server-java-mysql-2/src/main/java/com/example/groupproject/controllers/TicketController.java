package com.example.groupproject.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Area where we import model and repository
import com.example.groupproject.models.Ticket;
import com.example.groupproject.models.TicketRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/tickets")
public class TicketController {

	  @Autowired
	  TicketRepository ticketRepository;
	
//	  Get all
	  @GetMapping()
	  public List<Ticket> getTickets() {
	    return ticketRepository.findAll();
	  }
	  
//	  Get one ticket by id
	  @GetMapping("/{id}")
	  public ResponseEntity<Ticket> getTicket(@PathVariable(value="id") Long id) {
	  Ticket foundTicket = ticketRepository.findById(id).orElse(null);
	  if(foundTicket == null) {
		  return ResponseEntity.notFound().header("Post", "Nothing found with that id").build();
		  }
		  return ResponseEntity.ok(foundTicket);
	  }
	
//	  Post ticket
	  @PostMapping()
	  public Ticket addTicket(@RequestBody Ticket ticket) {
		  return ticketRepository.save(ticket);
	  }
	
//	  Delete Ticket by id
	  @DeleteMapping("/{id}")
	  public void deleteTicket(@PathVariable Long id) {
		  ticketRepository.deleteById(id);
	  }
	
//	  Update ticket complete status
	  @PutMapping("/{id}")
	  public Ticket updateProject(@PathVariable Long id, @RequestBody Ticket ticket) {
		  Ticket foundTicket = ticketRepository.findById(id).orElse(null);
		  if (foundTicket != null) {
			  foundTicket.setComplete(ticket.getComplete());
			  ticketRepository.save(foundTicket);
			  return foundTicket;
		  }
		  return null;
	  }
}
