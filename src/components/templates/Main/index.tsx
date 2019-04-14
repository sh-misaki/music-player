import {
  Wrapper,
  SideMenu,
  SideMenuLink,
} from "./style";

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

export default ({ children }) => (
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
