import React from 'react';

const TodoLanguages = () => {
    return (
        <div className="todo-languages">
            <ul>
                <li><img src={require("./sass.png")} alt="sass" /></li>
                <li><img src={require("./reactjs.png")} alt="reactjs" /></li>
                <li><img src={require("./typescript.png")} alt="typescript" /></li>
            </ul>
        </div>
    );
}

export default TodoLanguages;