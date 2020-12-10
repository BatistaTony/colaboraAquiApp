import { useState } from "react";
import { DivUser, UserName, MenuUser } from "./navbarStyle";
import { useSelector } from "react-redux";
import { IConsumer } from "../../../types";
import { useDispatch } from "react-redux";
import { signOutConsumer } from "./.././../store/actions/consumer";
import { useEffect } from "react";
import Link from "next/link";
import Consumer from "../../store/reducers/consumer";

interface IProps {
  title: string;
}

export default function UserMenu({ title }: IProps) {
  const consumerState: IConsumer = useSelector((state) => state.Consumer);
  const [menuUser, setMEnuUser] = useState<boolean>(false);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutConsumer());
  };

  useEffect(() => {
    document.addEventListener("click", HideOpenedDiv, true);

    const regex = RegExp("menu_user_name", "gi");

    function HideOpenedDiv(event: MouseEvent) {
      if (event.target) {
        if ((event.target as Element).className) {
          if (!(event.target as Element).className.match(regex)) {
            setMEnuUser(false);
          }
        }
      }
    }
  });

  return (
    <DivUser>
      <UserName
        className="menu_user_name"
        onClick={() => setMEnuUser(!menuUser)}
        active={title === consumerState.phone}
      >
        <span className="menu_user_name"></span>
        {consumerState.userName ? consumerState.userName : consumerState.phone}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          className="menu_user_name"
        >
          <path
            id="Polígono_4"
            data-name="Polígono 4"
            d="M9,0l9,14H0Z"
            transform="translate(18 14) rotate(180)"
            fill="#fcbe0a"
            className="menu_user_name"
          />
        </svg>
      </UserName>

      {menuUser && (
        <MenuUser
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="menu_user_name menu_desk_T"
          nameLength={consumerState.phone.length}
        >
          <Link href="/profile">
            <li className="menu_user_name">
              <img src="/images/profile.png" alt="" /> Meu perfil
            </li>
          </Link>
          <li className="menu_user_name" onClick={signOut}>
            <img src="/images/logout.png" alt="" /> Sair
          </li>
        </MenuUser>
      )}

      <MenuUser
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="menu_user_name menu_mobile_"
        nameLength={consumerState.phone.length}
      >
        <Link href="/profile">
          <li className="menu_user_name">
            <img src="/images/profile.png" alt="" /> Meu perfil
          </li>
        </Link>
        <li className="menu_user_name" onClick={signOut}>
          <img src="/images/logout.png" alt="" /> Sair
        </li>
      </MenuUser>
    </DivUser>
  );
}
