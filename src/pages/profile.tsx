import { useState } from "react";
import Layout from "../components/layout/layout";
import HeaderProfile from "../components/profile/header";
import {
  ProfileContent,
  ProfileContainerGrid,
  MenuProfile,
  MenuItemProfile,
  FormDataInfo,
  FormSenha,
} from "../components/profile/profileStyle";

export default function ConsumerProfile() {
  const [menu, setMenu] = useState<number>(0);

  const menus = ["Informações da conta", "Senha"];

  return (
    <Layout title="BatistaThony">
      <ProfileContent>
        <HeaderProfile />
        <ProfileContainerGrid>
          <div className="divOne">
            <MenuProfile>
              {menus.map((value, index) => (
                <MenuItemProfile
                  key={index}
                  active={menu === index}
                  onClick={() => setMenu(index)}
                >
                  {value}
                </MenuItemProfile>
              ))}
            </MenuProfile>
          </div>
          <div className="divSecond">
            {menu === 0 && <FormDataInfo> data informations </FormDataInfo>}

            {menu === 1 && <FormSenha>Senha configurations</FormSenha>}
          </div>
        </ProfileContainerGrid>
      </ProfileContent>
    </Layout>
  );
}
