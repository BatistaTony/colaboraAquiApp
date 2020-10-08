import { useEffect, useState } from "react";
import {
  ItemMenu,
  Logo,
  Menu,
  MyNavbar,
  ButtonLogin,
  ButtonMobile,
  Overlay,
} from "./navbarStyle";

import { CSSTransition } from "react-transition-group";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <MyNavbar>
      <Logo>
        <img src="/images/logo.png" alt="" />
      </Logo>

      <Menu>
        <ItemMenu active>Inicio</ItemMenu>
        <ItemMenu>Avaliar</ItemMenu>
        <ItemMenu>Ranking</ItemMenu>

        <ButtonLogin>Entrar</ButtonLogin>
      </Menu>

      <ButtonMobile openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div className="line"></div>
        <div className="line line2"></div>
        <div className="line"></div>
      </ButtonMobile>

      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={openMenu}
        classNames="my-node"
      >
        <Overlay>
          <div className="container">
            <Menu mobile={true}>
              <ItemMenu active>Inicio</ItemMenu>
              <ItemMenu>Avaliar</ItemMenu>
              <ItemMenu>Ranking</ItemMenu>

              <ButtonLogin>Entrar</ButtonLogin>
            </Menu>
          </div>
        </Overlay>
      </CSSTransition>
    </MyNavbar>
  );
}
