import Link from "next/link";
import { connect } from "react-redux";

import Counter from "../organisms/counter";
import Clock from "../organisms/clock";

export interface IPageProps {
  error?: Error;
  lastUpdate: string | number;
  light?: boolean;
  linkTo: string;
  NavigateTo: string;
  title: string;
}

function Page({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  title,
}: IPageProps) {
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

export default connect((state) => state)(Page);
