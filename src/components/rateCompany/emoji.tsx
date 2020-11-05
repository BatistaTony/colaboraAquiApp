import { Bom, Horrible, MuitoBom, Normal, Pessima } from "./emojefaces";
import { EmojeStyle } from "./modalStyle";

interface IEmoje {
  face: number;
  clicked: boolean;
}

export default function Emoje({ face, clicked, ...props }: IEmoje) {
  const chooseFace = () => {
    switch (face) {
      case 1: {
        return <Horrible />;
      }

      case 2: {
        return <Pessima />;
      }

      case 3: {
        return <Normal />;
      }

      case 4: {
        return <Bom />;
      }

      case 5: {
        return <MuitoBom />;
      }
    }
  };

  return (
    <EmojeStyle {...props} clicked={clicked}>
      {chooseFace()}
    </EmojeStyle>
  );
}
