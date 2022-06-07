import React from "react";

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'todo-list-item';
        if (done) classNames += ' done';
        if (important) classNames += ' important';

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm float-end">
                    <i className="fa fa-exclamation" />
                </button>

                <button onClick={onDeleted} type="button" className="btn btn-outline-danger btn-sm float-end">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}