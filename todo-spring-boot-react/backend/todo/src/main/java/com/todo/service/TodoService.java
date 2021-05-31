package com.todo.service;

import com.todo.domain.TodoItem;
import com.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepo;

    public List<TodoItem> fetchAllTodoItems() {
        return todoRepo.fetchAllTodoItems();
    }

    public TodoItem updateTodoItem( Integer id, TodoItem body ) {
        Optional<TodoItem> todoOpt = todoRepo.fetchAllTodoItems().stream().filter(item -> item.getId().equals(id)).findAny();

        if (todoOpt.isPresent()) {
            TodoItem item = todoOpt.get();
            item.setDone(body.getDone());
            item.setTask(body.getTask());
            return item;
        }
        return null;
    }

}
