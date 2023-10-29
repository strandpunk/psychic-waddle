import Items from "./Items";
import "./Lessons.css";
import React from "react";

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Урок 1",
          img: "img1.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "Категория 1",
        },
        {
          id: 2,
          title: "Урок 2",
          img: "img2.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "Категория 2",
        },
        {
          id: 3,
          title: "Урок 3",
          img: "img3.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "Категория 3",
        },
        {
          id: 4,
          title: "Урок 4",
          img: "img4.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "Категория 4",
        },
      ],
    };
  }
  render() {
    return (
      <div className="lesson__wrapper">
        <div className="lesson__search">
          <input name="search" type="text" placeholder="Название курса..." />
          <button type="submit" className="searchbtn">
            Поиск
          </button>
        </div>
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default Lessons;
