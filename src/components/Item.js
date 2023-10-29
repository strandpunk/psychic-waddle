import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"./img/" + this.props.item.img}
          style={{ width: "50px" }}
          alt="img"
        ></img>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.category}</b>
      </div>
    );
  }
}

export default Item;
