import React from "react";

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    onLabelClick = () => {
        console.log(`Click ${this.props.label}`);
    }

    render() {
        const { label, important = false } = this.props;
        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
        return (
            <span className="todo-list-item">
                <span className="todo-list-item-label" style={spanStyle} onClick={this.onLabelClick}>
                    {label}
                </span>

                <button type="button" className="btn btn-outline-success btn-sm float-end">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-end">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}