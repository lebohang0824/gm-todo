import React from 'react';

type TodoItemProps = {
    item: any
}

type TodoItemsProps = {
    items: any
}

const TodoItem = ({ item }: TodoItemProps) => {
    return (
        <div className="todo-item">
            <div className="info">
                {item.title}
            </div>
            <div className="actions">
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

const TodoItems = ({ items }: TodoItemsProps) => {
    return (
        <div className="todo-items">
                {items.map((item: any) => <TodoItem key={item.id} item={item} />)}
        </div>
    );
}

export default TodoItems;