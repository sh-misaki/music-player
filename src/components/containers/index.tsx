import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";

import Counter from "~/components/organisms/counter";
import Clock from "~/components/organisms/clock";

export interface IPageProps {
  title: string;
  linkTo: string;
  NavigateTo: string;
  lastUpdate: string | number;
  error?: Error;
  light?: boolean;
}

class Top extends Component<IPageProps> {
  public render() {
    const {
      error,
      lastUpdate,
      light,
      linkTo,
      NavigateTo,
      title,
    } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <Clock
          lastUpdate={lastUpdate}
          light={light}
        />
        <Counter />
        <nav>
          <Link href={linkTo}>
            <a>Navigate: {NavigateTo}</a>
          </Link>
        </nav>
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      </div>
    );
  }
}

export default connect((state) => state)(Top);
