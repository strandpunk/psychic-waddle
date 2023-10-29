import React, { Component } from "react";
import Item from "./Item";
import "./Items.css";

export class Items extends Component {
  render() {
    return (
      <div className="items__wrapper">
        {this.props.items.map((elem) => (
          <Item key={elem.id} item={elem} />
        ))}
      </div>
    );
  }
}

export default Items;
