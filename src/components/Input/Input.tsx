import { ChangeEventHandler } from "react";
import InputStyled from "./InputStyled";

type Props = {
    onChange: ChangeEventHandler<HTMLInputElement>
    type: string
    required?: boolean
    id?: string
    onInvalid?: ChangeEventHandler<HTMLInputElement>
    onInput?: ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    width?: number | string
    height?: number | string
}

const Input = ({ onChange, type, required, onInvalid, onInput, id, placeholder, height, width }: Props) => {
    return (
        <InputStyled height={height} width={width}>
            <input type={type} onChange={onChange} required={required} id={id} onInvalid={onInvalid} onInput={onInput} placeholder={placeholder} />
        </InputStyled>
    )
}

export default Input;