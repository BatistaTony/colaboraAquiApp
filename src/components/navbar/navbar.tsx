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
  const isLogged = consumerState.userName.length > 0;

  const checkActiveForRate = (title: string) => {
    if (title === "Avaliar") {
      return true;
    } else if (title !== "ColaboraAqui" && title !== "Ranking") {
      return true;
    } else {
      return false;
    }
  };

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
          <Link href="/companies">
            <ItemMenu active={checkActiveForRate(props.title)}>
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

      <ButtonMobile openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </ButtonMobile>

      {openMenu && (
        <Overlay
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          openMenu={openMenu}
        >
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
                <Link href="/companies">
                  <ItemMenu active={checkActiveForRate(props.title)}>
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
      )}
    </MyNavbar>
  );
}
