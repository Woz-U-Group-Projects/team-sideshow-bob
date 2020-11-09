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

import com.example.groupproject.models.Task;
import com.example.groupproject.models.TaskRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/tasks")
public class TaskController {

  @Autowired
  TaskRepository taskRepository;

  @GetMapping()
  public List<Task> getTasks() {
    return taskRepository.findAll();
  }
  
	@GetMapping("/{id}")
	public ResponseEntity<Task> getTask(@PathVariable(value="id") Long id) {
		Task foundTask = taskRepository.findById(id).orElse(null);
		if(foundTask == null) {
			return ResponseEntity.notFound().header("Post", "Nothing found with that id").build();
		}
		return ResponseEntity.ok(foundTask);
	}

  @PostMapping()
  public Task addTask(@RequestBody Task task) {
    return taskRepository.save(task);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    taskRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Task updateProject(@PathVariable Long id, @RequestBody Task task) {
    Task foundTask = taskRepository.findById(id).orElse(null);
    if (foundTask != null) {
    	foundTask.setName(task.getName());
    	foundTask.setComplete(task.getComplete());
      taskRepository.save(foundTask);
      return foundTask;
    }
    return null;
  }

}