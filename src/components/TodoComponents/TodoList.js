// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";



//From Standup
class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map()}
            </div>
        )
    }
}