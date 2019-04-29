import * as React from "react";
import { IProps, IState } from "../interfaces/IProps";

export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
        </nav>
      </div>
    );
  }
}
