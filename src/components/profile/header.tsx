import {
  ActionTitleProfile,
  HeaderProfileStyle,
  InfoWorning,
  NumbersOfUserRates,
  RatesMadeByUser,
  SimpleTxtOfRates,
  UserAvatarProfile,
  UserInfoContainer,
  UserNameProfile,
} from "./profileStyle";

export default function HeaderProfile() {
  return (
    <HeaderProfileStyle>
      <div className="divOne">
        <UserAvatarProfile name="HelioAlves">A</UserAvatarProfile>

        <UserInfoContainer>
          <div className="name_div_and_sgdry_THfdhf">
            <UserNameProfile>AndersonKennedy</UserNameProfile>
            <ActionTitleProfile>
              <span></span> Editar Perfil
            </ActionTitleProfile>
          </div>
          <InfoWorning>
            Todas as tuas informações estão protegidas, apenas tu tens acesso.
          </InfoWorning>
        </UserInfoContainer>
      </div>

      <div className="divSecond">
        <RatesMadeByUser>
          <NumbersOfUserRates>
            <img src="/images/icons8-star.png" alt="" />
            <p className="btnLabel_hsd_d">
              <span>03</span> Avaliações
            </p>
          </NumbersOfUserRates>
          <SimpleTxtOfRates>realizadas até o momento</SimpleTxtOfRates>
        </RatesMadeByUser>
      </div>
    </HeaderProfileStyle>
  );
}
