import { useState } from "react";
import {
  ItemMenu,
  Logo,
  Menu,
  MyNavbar,
  ButtonLogin,
  ButtonMobile,
  Overlay,
} from "./navbarStyle";
import Link from "next/link";
import { useSelector } from "react-redux";

import { CSSTransition } from "react-transition-group";
import UserMenu from "./userMenu";
import { IConsumer } from "../../../types";

interface IItemMenu {
  page: string;
  title: string;
  link: string;
}

export default function Navbar(props: any) {
  const consumerState: IConsumer = useSelector((state) => state.Consumer);

  const menu: Array<IItemMenu> = [
    { page: "Inicio", title: "ColaboraAqui", link: "/" },
    { page: "Ranking", title: "Ranking", link: "ranking" },
  ];

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
        {menu.map((value, index) => (
          <Link key={index} href={value.link}>
            <ItemMenu active={props.title === value.title}>
              {value.page}
            </ItemMenu>
          </Link>
        ))}

        {isLogged && (
          <Link href="/rate">
            <ItemMenu active={props.title === "Avaliar"}>Avaliar</ItemMenu>
          </Link>
        )}

        {!isLogged ? (
          <Link href="/signin">
            <ButtonLogin>Entrar</ButtonLogin>
          </Link>
        ) : (
          <UserMenu />
        )}
      </Menu>

      <ButtonMobile openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div className="line"></div>
        <div className="line"></div>
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
              {menu.map((value, index) => (
                <Link key={index} href={value.link}>
                  <ItemMenu active={props.title === value.title}>
                    {value.page}
                  </ItemMenu>
                </Link>
              ))}

              {isLogged && (
                <Link href="/rate">
                  <ItemMenu active={props.title === "Avaliar"}>
                    Avaliar
                  </ItemMenu>
                </Link>
              )}

              {!isLogged ? (
                <Link href="/signin">
                  <ButtonLogin>Entrar</ButtonLogin>
                </Link>
              ) : (
                <UserMenu />
              )}
            </Menu>
          </div>
        </Overlay>
      </CSSTransition>
    </MyNavbar>
  );
}
