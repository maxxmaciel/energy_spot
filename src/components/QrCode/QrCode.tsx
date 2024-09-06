import WindowComponent from "../WindowComponent/WindowComponent"
import { QrCodeStyled } from "./QrCodeStyled"

type Props = {
  show?: boolean
}

export const QrCode = ({ show }: Props) => {
  return (
    <WindowComponent.Root title="QR CODE" show={show}>
      <QrCodeStyled>

      </QrCodeStyled>
    </WindowComponent.Root>
  )
}