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


    @PutMapping("/api/todoitems/{id}")
    public ResponseEntity<?> updateTodoItem( @PathVariable Integer id, @RequestBody TodoItem body ) {
        TodoItem updatedTodoItem = todoService.updateTodoItem(id, body);

        return ResponseEntity.ok(updatedTodoItem);
    }

    @PostMapping("/api/todoitems")
    public ResponseEntity<?> createNewTodoItem( @RequestBody TodoItem item ) {

        TodoItem todoItem = todoService.createTodoItem();

        return ResponseEntity.status(HttpStatus.OK).body(todoItem);


    }

    @DeleteMapping("/api/todoitems/{id}")
    public ResponseEntity<?> deleteTodoItem( @PathVariable Integer id ) {

        todoService.deleteTodoItem(id);

        return ResponseEntity.ok("ok");

    }


}
