package com.todo;

import com.todo.domain.TodoItem;
import com.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/api/todoitems")
    public ResponseEntity<?> fetchAllTodoItems() {
        List<TodoItem> todoItems = todoService.fetchAllTodoItems();
        return ResponseEntity.status(HttpStatus.OK).body(todoItems);
    }

    @RequestMapping("/test")
    public String test() {
        return "TESZT";
    }

    @PutMapping("/api/todoitems/{id}")
    public ResponseEntity<?> updateTodoItem( @PathVariable Integer id, @RequestBody TodoItem body ) {
        TodoItem updatedTodoItem = todoService.updateTodoItem(id, body);

        return ResponseEntity.ok(updatedTodoItem);
    }

}
