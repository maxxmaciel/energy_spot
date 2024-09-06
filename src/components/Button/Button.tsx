import React from "react";
import { ButtonStyled } from "./ButtonStyled";


type Props = {
    text?: string;
    style?: React.CSSProperties;
    icone?: string;
    event?: () => void;
    className?: string;
}

const Button = ({ text, style, icone, event, className }: Props) =>
    <ButtonStyled style={style} onClick={event} className={className}>
        {icone && <div className="c_img"><img src={icone} alt="Minha Imagem" /></div>}
        {text}
    </ButtonStyled>


export default Button;