import { useState } from "react";
import { IProfile } from "../../types";
import Layout from "../components/layout/layout";
import InformationData from "../components/profile/dataInformation";
import HeaderProfile from "../components/profile/header";
import PasswordSettings from "../components/profile/passwordSettings";
import {
  ProfileContent,
  ProfileContainerGrid,
  MenuProfile,
  MenuItemProfile,
  FormSenha,
  MenuSelectProfile,
} from "../components/profile/profileStyle";
import CustomSelectRating from "../components/rateCompany/custonSelectRatings";

export default function ConsumerProfile() {
  const [menu, setMenu] = useState<number>(0);

  const menus = ["Informações da conta", "Senha"];

  const handleChange = (value: string | number) => {
    menus.filter((state, index) => {
      if (state === value) setMenu(index);
    });
  };

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

          <MenuSelectProfile>
            <CustomSelectRating
              values={menus}
              handleChange={(value: string | number) => handleChange(value)}
              whatToDo=""
              defaultValueSelect={menus[menu]}
              classNames="select1 selectProfile"
            />
          </MenuSelectProfile>

          <div className="divSecond">
            {menu === 0 && <InformationData />}

            {menu === 1 && <PasswordSettings />}
          </div>
        </ProfileContainerGrid>
      </ProfileContent>
    </Layout>
  );
}