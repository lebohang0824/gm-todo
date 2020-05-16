import React from 'react';

declare type TodoUpdateItemProps = {
    item: any,
    onSave: any,
    onUpdate: any,
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
        const item = { id: this.props.item.id, title: this.state.title }
        this.props.onSave(item);
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
                    <button className="cancel">Cancel</button>
                </div>
            </form>
        );
    }
}