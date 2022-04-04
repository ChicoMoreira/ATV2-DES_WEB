import React, { Component } from "react";

class Hero extends Component {
  render() {
    const { name, imagem } = this.props;
    return (
      <div>
        <h3>
          Herói {name} lutando na arena {this.props.arena}
          <img src={imagem} />
        </h3>
      </div>
    );
  }
}

export default Hero;
