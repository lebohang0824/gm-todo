import React from 'react';

declare type TodoUpdateItemProps = {
    item: any,
    onSave: any,
    onUpdate: any,
    onDone: any
}

declare type TodoUpdateItemState = {
    title: string
}

export default class TodoUpdateItem  extends React.Component<TodoUpdateItemProps, TodoUpdateItemState> {
    
    state: TodoUpdateItemState = {
        title: ''
    }

    constructor(props: any) {
        super(props);

        this.onSave = this.onSave.bind(this);
        this.onDone = this.onDone.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);
    }

    componentDidMount() {
        this.setState({ title: this.props.item.title });
    }

    onTextUpdate({ target }: any) {
        this.setState({ title: target.value });
    }

    onSave(e: any) {
        e.preventDefault();
        const item = { 
            id: this.props.item.id, 
            title: this.state.title, 
            done: this.props.item.done 
        }

        this.props.onSave(item);

        const parent = e.target.parentNode;
        parent.getElementsByClassName('info')[0].style.display = 'block';
        parent.getElementsByClassName('todo-update-item')[0].style.display = 'none';
    }

    onCancel(e: any) {
        const parent = e.target.parentNode;
        const grandParent = parent.parentNode;
        const superGrandParent = grandParent.parentNode;
        superGrandParent.getElementsByClassName('info')[0].style.display = 'block';
        superGrandParent.getElementsByClassName('todo-update-item')[0].style.display = 'none';
        this.setState({ title: this.props.item.title });
    }

    onDone(e: any) {
        this.props.onDone(this.props.item);

        const parent = e.target.parentNode;
        const grandParent = parent.parentNode;
        const superGrandParent = grandParent.parentNode;
        superGrandParent.getElementsByClassName('info')[0].style.display = 'block';
        superGrandParent.getElementsByClassName('todo-update-item')[0].style.display = 'none';
        // Add or remove line-through
        superGrandParent.getElementsByTagName('span')[0].classList.toggle('done');
        this.setState({ title: this.props.item.title });
    }

    render() {
        return (
            <form className="todo-update-item" onSubmit={this.onSave}>
                <div className="input">
                    <input 
                        type="text" 
                        onChange={(e: any) => this.onTextUpdate(e)} 
                        placeholder="Task Title" value={this.state.title} />
                </div>
                <div className="actions">
                    <button className="save">Save</button>
                    <button type="button" onClick={this.onCancel} className="cancel">Cancel</button>
                    <button type="button" onClick={this.onDone} className="btn-done">Mark as Done</button>
                </div>
            </form>
        );
    }
}