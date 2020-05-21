import React from 'react';

const TodoLanguages = () => {
    return (
        <div className="todo-languages">
            <h4>TODO APP with ReactJs, Sass and Typescript</h4>
            <p>
                Instructions. <br /><br />
                1. To <b>ADD</b> task, write on the textbox and click add button.<br />
                2. To <b>DELETE</b>, hover to the red cross on your right and click on it.<br />
                3. To <b>EDIT</b>, click on the task text.<br />
                4. To <b>SAVE CHANGES</b>, click on save button or click cancel to discard changes.<br />
                5. To <b>TOGGLE DONE</b>, click on the task text and click task done button<br />
                <a href="https://github.com/lebohang0824/gm-todo">Source code</a>
            </p>
            
            <ul>
                <li><img src={require("./sass.png")} alt="sass" /></li>
                <li><img src={require("./reactjs.png")} alt="reactjs" /></li>
                <li><img src={require("./typescript.png")} alt="typescript" /></li>
            </ul>
        </div>
    );
}

export default TodoLanguages;