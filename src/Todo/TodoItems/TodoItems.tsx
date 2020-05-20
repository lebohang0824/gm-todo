import React from 'react';
import TodoUpdateItem from './TodoUpdateItem';

type TodoItemProps = {
    item: any
    onSave: any,
    onDelete: any,
    onUpdate: any,
    onDone: any
}

type TodoItemsProps = {
    items: any,
    onSave: any,
    onDelete: any,
    onUpdate: any,
    onDone: any
}

const TodoItem = ({ item, onDelete, onUpdate, onSave, onDone }: TodoItemProps) => {
    return (
        <div className="todo-item">
            <div className="info">
                <span onClick={onUpdate}>{item.title}</span>
                <span className="delete" onClick={() => onDelete(item.id)}>x</span>
            </div>
            <TodoUpdateItem item={item} onUpdate={onUpdate} onSave={onSave} onDone={onDone} />
        </div>
    );
}

const TodoItems = ({ items, onDelete, onUpdate, onSave, onDone }: TodoItemsProps) => {
    return (
        <div className="todo-items">
            {items.map((item: any) => (
                <TodoItem 
                    key={item.id} 
                    item={item} 
                    onDelete={onDelete} 
                    onUpdate={onUpdate} 
                    onSave={onSave} 
                    onDone={onDone} 
                />)
            )}
        </div>
    );
}

export default TodoItems;