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
                {item.title}
            </div>
            <div className="actions">
                <button className="update" onClick={() => onUpdate(item.id)}>Update</button>
                <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
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