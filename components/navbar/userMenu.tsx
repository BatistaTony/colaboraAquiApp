import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { DivUser, UserName, MenuUser } from "./navbarStyle";

export default function UserMenu() {
  const [menuUser, setMEnuUser] = useState<boolean>(false);

  return (
    <DivUser>
      <UserName onClick={() => setMEnuUser(!menuUser)}>
        <span></span>
        Batista Tony
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="arrow-downward">
              <rect
                width="24"
                height="24"
                transform="rotate(-90 12 12)"
                opacity="0"
              />
              <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z" />
            </g>
          </g>
        </svg>
      </UserName>
      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={menuUser}
        classNames="my-node"
      >
        <MenuUser>
          <li>
            <img src="/images/profile.png" alt="" /> Meu perfil
          </li>
          <li>
            <img src="/images/logout.png" alt="" /> Sair
          </li>
        </MenuUser>
      </CSSTransition>
    </DivUser>
  );
}
