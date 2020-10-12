import { ModalIllustration } from "../signUp/signUpStyle";
import { ModalSignIn, OverlaySignIn } from "./signInStyle";

export default function SignInConsumer() {
  return (
    <OverlaySignIn>
      <ModalSignIn>
        <div></div>
        <ModalIllustration img={"/images/illust.png"} />
      </ModalSignIn>
    </OverlaySignIn>
  );
}
