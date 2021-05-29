package com.todo.service;

import com.todo.domain.TodoItem;
import com.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepo;

    public List<TodoItem> fetchAllTodoItems() {
        return todoRepo.fetchAllTodoItems();
    }

}
