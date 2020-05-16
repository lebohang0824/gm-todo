import React from 'react';

type TodoItemProps = {
    item: any
    onDelete: any,
    onUpdate: any
}

type TodoItemsProps = {
    items: any,
    onDelete: any,
    onUpdate: any
}

const TodoItem = ({ item, onDelete, onUpdate }: TodoItemProps) => {
    return (
        <div className="todo-item">
            <div className="info">
                <span>{item.title}</span>
                <span className="delete" onClick={() => onDelete(item.id)}>x</span>
            </div>
        </div>
    );
}

const TodoItems = ({ items, onDelete, onUpdate }: TodoItemsProps) => {
    return (
        <div className="todo-items">
            {items.map((item: any) => <TodoItem key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} />)}
        </div>
    );
}

export default TodoItems;