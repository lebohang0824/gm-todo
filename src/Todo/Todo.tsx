import React from 'react';
import './Todo.scss';

// Components
import TodoHeader from './TodoHeader/TodoHeader';
import TodoItems from './TodoItems/TodoItems';

export default class Todo extends React.Component {
    
    state = { items: [] }

    constructor(props: any) {
        super(props);

        this.addHandler    = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    addHandler(e: any) {
        e.preventDefault();

        const title = e.target[0].value;
        const id = this.state.items.length + 1;

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
    }

    updateHandler() {

    }

    deleteHandler() {

    }

    render() {
        return (
            <div className="todo">
                <TodoHeader onAddItem={this.addHandler} />
                <TodoItems items={this.state.items} />
            </div>
        );
    }
}