import React from 'react';

export default class App extends React.Component {

  handleSubmit(event) {
    let formParams = event.target.elements;

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="message" placeholder="Your message..."/>
          <button type="submit">Send!</button>
        </form>
      </div>
    );
  }
}
