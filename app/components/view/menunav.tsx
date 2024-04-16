import {
  InnerContainer,
  MenuLeft,
  Nav,
  Logo,
  MenuRight,
  SecMenu,
} from "@/app/styles";

export const MenuNav = () => {
  return (
    <>
      <Nav>
        <InnerContainer>
          <MenuLeft>
            <Logo />
            <SecMenu>
              <a>Charging solutions</a>
              <a>Support</a>
              <a>Patners</a>
            </SecMenu>
          </MenuLeft>
          <MenuRight></MenuRight>
        </InnerContainer>
      </Nav>
    </>
  );
};
