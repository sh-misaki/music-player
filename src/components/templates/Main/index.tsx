import {
  Wrapper,
  SideMenu,
  SideMenuLink,
} from "./style";
import { PropsWithChildren } from "react";

const { Link } = require("~/../routes");

const sideMenuLinks = [
  {
    text: "Home",
  },
  {
    text: "Playlists",
  },
  {
    text: "Artists",
  },
];

interface IProps {
  sample?: string;
}

export default ({ children }: PropsWithChildren<IProps>) => (
  <Wrapper>
    <SideMenu>
      {
        sideMenuLinks.map((link, i) => {
          return (
            <Link route="index">
              <SideMenuLink key={i}>
                { link.text }
              </SideMenuLink>
            </Link>
          );
        })
      }
    </SideMenu>
    { children }
  </Wrapper>
);
