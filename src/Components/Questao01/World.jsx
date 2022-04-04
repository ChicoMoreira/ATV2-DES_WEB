import React, { Component } from "react";
import { render } from "react-dom";

class World extends Component {
  render() {
    const { world } = this.props;
    return (
      <div>
        <h1>{this.props.show}</h1>
        {React.Children.map(this.props.children, (arena) => {
          return React.cloneElement(arena, {
            world: this.props.world
          });
        })}
      </div>
    );
  }
}

export default World;
