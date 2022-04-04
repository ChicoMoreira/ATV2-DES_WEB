import React, { Component } from "react";

class Arena extends Component {
  render() {
    const { arena } = this.props;
    return (
      <div>
        <h1>{this.props.show}</h1>
        {React.Children.map(this.props.children, (personagem) => {
          return React.cloneElement(personagem, {
            arena: this.props.arena
          });
        })}
      </div>
    );
  }
}

export default Arena;
