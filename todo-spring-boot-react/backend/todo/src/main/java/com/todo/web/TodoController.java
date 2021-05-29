package com.todo.web;

import com.todo.domain.TodoItem;
import com.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/api/todoItems")
    public ResponseEntity<?> fetchAllTodoItems() {
        List<TodoItem> todoItems = todoService.fetchAllTodoItems();
        return ResponseEntity.ok(todoItems);
    }


}
