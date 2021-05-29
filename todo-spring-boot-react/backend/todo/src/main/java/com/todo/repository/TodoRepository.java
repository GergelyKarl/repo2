package com.todo.repository;

import com.todo.domain.TodoItem;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TodoRepository {
    private List<TodoItem> todoItems = new ArrayList<>();

    public List<TodoItem> fetchAllTodoItems() {
        if (todoItems.size() == 0) {
            TodoItem item1 = new TodoItem();
            item1.setDone(false);
            item1.setId(3234L);
            item1.setTask("Todo 1");
        }

        return todoItems;
    }
}
