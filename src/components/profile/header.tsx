import {
  ActionTitleProfile,
  HeaderProfileStyle,
  InfoWorning,
  NumbersOfUserRates,
  RatesMadeByUser,
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

      <div>
        <RatesMadeByUser>
          <NumbersOfUserRates>
            <img src="/images/icons-star.png" />
            <span>03</span> Avaliações
          </NumbersOfUserRates>
        </RatesMadeByUser>
      </div>
    </HeaderProfileStyle>
  );
}
