package com.todo.domain;

public class TodoItem {

    private Long id;
    private String task;
    private Boolean isDone;

    public Long getId() {
        return id;
    }

    public void setId( Long id ) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask( String task ) {
        this.task = task;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone( Boolean done ) {
        isDone = done;
    }
}
