import React from 'react';
import './Todo.scss';

// Components
import TodoHeader from './TodoHeader/TodoHeader';
import TodoItems from './TodoItems/TodoItems';

export default class Todo extends React.Component {
    
    state = { items: [] }
    counter = 0;

    constructor(props: any) {
        super(props);

        this.addHandler    = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.saveUpdateHandler = this.saveUpdateHandler.bind(this);
    }

    addHandler(e: any) {
        e.preventDefault();

        const title = e.target[0].value;
        const id = this.counter++;

        // Validate 
        if (title.trim().length < 1) {
            alert("Title required!");
        } else {
            this.setState({
                items: [{ id, title }, ...this.state.items]
            });
        }

        // Clear
        e.target[0].value = null
        e.target[0].focus();
    }

    saveUpdateHandler(item: any) {
        const tasks: any = this.state.items;
        const index: number = tasks.findIndex((task: any) => task.id === item.id);

        // New value
        let task: any = tasks[index];
        task.title = item.title;

        // update
        this.setState({ items: tasks })
    }

    updateHandler(e: any) {
        const parent = e.target.parentNode;
        const grandParent = parent.parentNode;
        parent.style.display = 'none';
        grandParent.getElementsByClassName('todo-update-item')[0].style.display = 'block';
        
        const form = grandParent.querySelector('form');
        form[0].focus();
    }

    deleteHandler(id: number) {
        const items = this.state.items.filter((item: any) => item.id !== id);
        this.setState({ items });
    }

    render() {
        return (
            <div className="todo">
                <TodoHeader onAddItem={this.addHandler} />
                <TodoItems 
                    items={this.state.items} 
                    onDelete={this.deleteHandler} 
                    onUpdate={this.updateHandler} 
                    onSave={this.saveUpdateHandler} 
                />
            </div>
        );
    }
}