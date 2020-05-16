import React from 'react';

type TodoHeaderProps = {
    onAddItem: any
}

const TodoHeader = (props: TodoHeaderProps) => {
    return (
        <div className="todo-header">
            <form onSubmit={props.onAddItem}>
                <input type="text" placeholder="What would you like to do?" />
                <button>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoHeader;