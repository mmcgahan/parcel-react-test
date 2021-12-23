import * as React from "react";

class App extends React.Component {
  onClick = async () => {
    const props = this.props;
    console.log("clicked", props);
  };
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onClick={this.onClick}>Click me</button>
      </div>
    );
  }
}

export default App;
