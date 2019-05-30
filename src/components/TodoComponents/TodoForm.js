import React from "react";

class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addNewItem}>
        <input
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
      </form>
    );
  }
}

export default ItemForm;
