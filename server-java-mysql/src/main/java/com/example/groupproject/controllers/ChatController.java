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

import com.example.groupproject.models.Chat;
import com.example.groupproject.models.ChatRepository;

@RestController
@RequestMapping("/chat")
public class ChatController {

  @Autowired
  ChatRepository ChatRepository;

  @GetMapping()
  public List<Chat> getChat() {
    return ChatRepository.findAll();
  }
  
 /* @GetMapping("/{id}")
	public ResponseEntity<Chat> getChat(@PathVariable(value="id") Long id) {
		Chat foundChat = ChatRepository.findById(id).orElse(null);
		if(foundChat == null) {
			return ResponseEntity.notFound().header("Post", "Nothing found with that id").build();
		}
		return ResponseEntity.ok(foundChat);
	}*/

  @PostMapping()
  public Chat addChat(@RequestBody Chat chat) {
    return ChatRepository.save(chat);
  }

  /*@DeleteMapping("/{id}")
  public void deleteChat(@PathVariable Long id) {
    ChatRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Chat updateChat(@PathVariable Long id, @RequestBody Chat chat) {
    Chat foundChat = ChatRepository.findById(id).orElse(null);
    if (foundChat != null) {
    	foundChat.setContent(chat.getContent());
    	foundChat.setSubmit(chat.getSubmit());
      ChatRepository.save(foundChat);
      return foundChat;
    }
    return null;
  }*/

}
