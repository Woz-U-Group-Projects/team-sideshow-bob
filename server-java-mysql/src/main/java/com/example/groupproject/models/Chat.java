package com.example.groupproject.models;

import javax.persistence.*;

@Entity
@Table(name="chat")

public class Chat {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String content;
	
	@Column(columnDefinition = "boolean default false")
	  private boolean submit;
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public boolean getSubmit() {
	    return this.submit;
	  }

	  public void setSubmit(boolean complete) {
	    this.submit = submit;
	  }

}
