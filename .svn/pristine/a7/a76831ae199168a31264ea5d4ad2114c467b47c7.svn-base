import ErrorIcon from '@mui/icons-material/Error';
import { ChangeEventHandler } from 'react';
import spinner from '../../images/spinner.gif';
import Button from "../Button/Button";
import Input from '../Input/Input';
import ModalStyled from "./ModalStyled";

type ModalPropsByType = {
    Loading: {
        type: "Loading";
        overlay: string;
    };
    MessageBox: {
        type: "MessageBox";
        message: string;
    };
    Error: {
        type: "Error";
        message: string;
    };
    SubmitForm: {
        type: "SubmitForm";
        buttons: Buttons[];
        inputs: Inputs[];
        handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    };
};

type ModalProps = ModalPropsByType[keyof ModalPropsByType] & {
    onClose?: () => void;
    message?: string;
    show: boolean;
    buttons?: Buttons[];
    inputs?: Inputs[];
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    title?: string;
    overlay?: string;
};

interface Buttons {
    text: string;
    event?: () => void;
}

interface Inputs {
    type?: string;
    Label?: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Types = {
    Loading: () =>
        <div className="c2"> <img src={spinner} alt="" /></div>
    ,
    MessageBox: ({ message = "" }: ModalPropsByType['MessageBox']) =>
        <div>
            <div style={{padding:"20px"}}> * {message}</div>
        </div>
        
    ,
    Error: ({ message = "" }: ModalPropsByType['Error']) =>
        <div>
            <div style={{padding:"20px"}}> * {message}</div>
            <div style={{ color: 'red', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent:"center" }}>
                    <ErrorIcon style={{ marginRight: '8px', fontSize: '78px' }}  />
                  
                </div>
        </div>
        
    ,
    SubmitForm: ({ buttons, inputs, handleSubmit }: ModalPropsByType['SubmitForm']) => {
        return (
            <form onSubmit={handleSubmit}>
                <div className='c2'>
                    {inputs &&
                        inputs.map((input, idx) =>
                            <Input key={idx} placeholder={input.Label}
                                type={input.type || 'text'}
                                onChange={input.onChange}
                                width="290px"
                                height="38px"
                                onInvalid={e => e.target.setCustomValidity(`Campo ${input.Label} não pode ser vazio.`)}
                                required={true} onInput={e => e.target.setCustomValidity('')} />
                        )
                    }
                </div>
                <div className='c3'>
                    {buttons &&
                        <div className="c_buttons"> {

                            buttons.map((button, idx) =>
                                <Button key={idx} text={button.text} />
                            )
                        }
                        </div>
                    }
                </div>
            </form>
        )
    }
}

const Modal = ({ onClose, show, title, type, message, buttons, handleSubmit, overlay = "hide_modal", inputs }: ModalProps) => {

    var onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement
        if (target.classList.contains("hide_modal")) {
            onClose?.();
        }
    }
    return (
        <ModalStyled display={show ? "flex" : "none"} className={overlay} onMouseDown={onMouseDown}>
            <div className="c">
                {title && <div className="t"> <p>{title}</p></div>}
                < ButtonX />
                {type === "Loading" && <Types.Loading />}
                {type === "MessageBox" && <Types.MessageBox message={message} type={type} />}
                {type === "Error" && <Types.Error message={message} type={type} />}
                {type === "SubmitForm" && <Types.SubmitForm buttons={buttons} handleSubmit={handleSubmit} inputs={inputs} type={type} />}
            </div>
        </ModalStyled>
    )
}
//{ Types[type]({ buttons: buttons, inputs: inputs, onClose: onClose, handleSubmit: handleSubmit, message: message })}

const ButtonX = () => <div className="button-x buttons-x hide_modal">
    <div className="deg45-r hide_modal"></div>
    <div className="deg135-r hide_modal"></div>
</div>

export default Modal;