import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return !!this.props.name && <h1>Hello, {this.props.name}</h1>;
  }
}
