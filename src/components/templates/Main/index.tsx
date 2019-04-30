import {
  Wrapper,
  SideMenu,
  SideMenuLink,
  BodyContainer,
} from "./style";
import { PropsWithChildren } from "react";

import Typography from "~/components/atoms/Typography";
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
            <Link
              route="index"
              key={i}
            >
              <SideMenuLink>
                <Typography>
                  { link.text }
                </Typography>
              </SideMenuLink>
            </Link>
          );
        })
      }
    </SideMenu>
    <BodyContainer>
      { children }
    </BodyContainer>
  </Wrapper>
);
