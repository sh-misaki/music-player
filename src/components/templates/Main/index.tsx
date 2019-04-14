import {
  Wrapper,
  SideMenu,
  SideMenuLink,
} from "./style";
import { PropsWithChildren } from "react";

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
        sideMenuLinks.map((link) => {
          return (
            <SideMenuLink>
              { link.text }
            </SideMenuLink>
          );
        })
      }
    </SideMenu>
    { children }
  </Wrapper>
);
