import { useEffect, useState } from "react";
import {
  ItemMenu,
  Logo,
  Menu,
  MyNavbar,
  ButtonLogin,
  ButtonMobile,
  Overlay,
  UserName,
  DivUser,
  MenuUser,
} from "./navbarStyle";
import Link from "next/link";

import { CSSTransition } from "react-transition-group";
import UserMenu from "./userMenu";

export default function Navbar(props: any) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <MyNavbar>
      <Logo>{isLogged && <img src="/images/logo.png" alt="" />}</Logo>

      <Menu>
        <Link href="/">
          <ItemMenu active={props.title === "ColaboraAqui"}>Inicio</ItemMenu>
        </Link>
        <Link href="rate">
          <ItemMenu active={props.title === "Avaliar"}>Avaliar</ItemMenu>
        </Link>
        <Link href="ranking">
          <ItemMenu active={props.title === "Ranking"}>Ranking</ItemMenu>
        </Link>

        {!isLogged && <ButtonLogin>Entrar</ButtonLogin>}

        {isLogged && <UserMenu />}
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
              <Link href="/">
                <ItemMenu active={props.title === "ColaboraAqui"}>
                  Inicio
                </ItemMenu>
              </Link>
              <Link href="rate">
                <ItemMenu active={props.title === "Avaliar"}>Avaliar</ItemMenu>
              </Link>
              <Link href="ranking">
                <ItemMenu active={props.title === "Ranking"}>Ranking</ItemMenu>
              </Link>
              {isLogged && <UserMenu />}

              {!isLogged && <ButtonLogin>Entrar</ButtonLogin>}
            </Menu>
          </div>
        </Overlay>
      </CSSTransition>
    </MyNavbar>
  );
}
