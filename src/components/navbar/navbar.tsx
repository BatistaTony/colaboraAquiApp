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
import { useSelector } from "react-redux";

import { CSSTransition } from "react-transition-group";
import UserMenu from "./userMenu";
import { IConsumer } from "../../../types";

export default function Navbar(props: any) {
  const consumerState: IConsumer = useSelector((state) => state.Consumer);

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(
    consumerState.userName.length > 0
  );

  return (
    <MyNavbar>
      <Logo>
        {!(props.title === "ColaboraAqui") && (
          <img src="/images/logo.png" alt="" />
        )}
      </Logo>

      <Menu>
        <Link href="/">
          <ItemMenu active={props.title === "ColaboraAqui"}>Inicio</ItemMenu>
        </Link>
        {isLogged && (
          <Link href="rate">
            <ItemMenu active={props.title === "Avaliar"}>Avaliar</ItemMenu>
          </Link>
        )}
        <Link href="ranking">
          <ItemMenu active={props.title === "Ranking"}>Ranking</ItemMenu>
        </Link>

        {!isLogged && (
          <Link href="/signin">
            <ButtonLogin>Entrar</ButtonLogin>
          </Link>
        )}

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
              {isLogged && (
                <Link href="rate">
                  <ItemMenu active={props.title === "Avaliar"}>
                    Avaliar
                  </ItemMenu>
                </Link>
              )}
              <Link href="ranking">
                <ItemMenu active={props.title === "Ranking"}>Ranking</ItemMenu>
              </Link>
              {isLogged && <UserMenu />}

              {!isLogged && (
                <Link href="/signin">
                  <ButtonLogin>Entrar</ButtonLogin>
                </Link>
              )}
            </Menu>
          </div>
        </Overlay>
      </CSSTransition>
    </MyNavbar>
  );
}
