import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";
import kompany1 from "../images/kompany1.jpg";
import kompany2 from "../images/kompany2.jpg";
import kompany3 from "../images/kompany3.jpg";
import kompany4 from "../images/kompany4.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      playerName: [
        { id: 1, image: kompany1, name: "kompany1", cost: "100000 $" },
        { id: 2, image: kompany2, name: "kompany2", cost: "200000 $" },
        { id: 3, image: kompany3, name: "kompany3", cost: "300000 $" },
        { id: 4, image: kompany4, name: "kompany4", cost: "400000 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={kompany1} name='kompany1' cost='1000 $' />
                <Card image={kompany2} name='kompany2' cost='2000 $' />
                <Card image={kompany3} name='kompany3' cost='3000 $' />
                <Card image={kompany4} name='kompany4' cost='4999 $' /> */}
        {this.state.playerName.map((player) => (
          <Card
            key={player.id}
            image={player.image}
            name={player.name}
            cost={player.cost}
            id={player.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
