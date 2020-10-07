package com.example.groupproject.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="ticket")

public class Ticket {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String content;
	private String category;
	private String urgency;
	
	
	@Column(columnDefinition = "boolean default false")
	  private boolean submit;
	
	public Integer getId() {
		    return this.id;
		    
		  }

	public void setId(Integer id) {
		    this.id = id;
		  }
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public boolean getSubmit() {
	    return this.submit;
	  }

	  public void setSubmit(boolean submit) {
	    this.submit = submit;
	  }

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getUrgency() {
		return urgency;
	}

	public void setUrgency(String urgency) {
		this.urgency = urgency;
	}
	
	

}
