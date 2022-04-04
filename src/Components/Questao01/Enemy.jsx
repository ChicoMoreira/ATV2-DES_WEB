import React, { Component } from "react";

class Enemy extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>
          Inimigo {name} lutando na arena {this.props.arena}
        </h3>
      </div>
    );
  }
}

export default Enemy;
