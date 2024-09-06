import { FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { axiosGet, axiosPost } from "../../Ajax";
import iconSair from "../../images/icons-sair.png";
import iconSenha from "../../images/icons-senha.png";
import logoDefault from "../../logo.png";
import { checkAuthenticatedSession } from "../Authentication";
import Modal from "../Modal/Modal";
import { NavBar } from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyle";


type Props = {
    logo?: string;
}


const logout = async (n: NavigateFunction) => {
    await axiosGet(`/Login.vtt?action=logout`);
    n("/")
}

const Header = ({ logo }: Props) => {
    var session = checkAuthenticatedSession();
    const [ShowModalAltPass, setShowModalAltPass] = useState(false);
    const [Password, setPassword] = useState("");
    const [NewPassword, setNewPassword] = useState("");
    const [CfPassword, setCfPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmitAltPass = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        try {

            const response = await axiosPost(`/Login.vtt?action=alterar_senha&SenhaAtual=${Password}&NovaSenha=${NewPassword}&ConfirmSenha=${CfPassword}`);
            let Data;

            if (typeof response.data === 'string') {
                Data = eval("(" + response.data + ")");
            } else {
                Data = response.data;
            }
            if (Data.success) {
                console.log(Data.message)

            } else {
                console.log(Data.message)
            }

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }


    return (
        <HeaderStyled>
            <header>
                <div className="c1">
                    <div>
                        <img src={logo ?? logoDefault} className="logo" alt="" />
                    </div>

                    <div className="c1">
                        <div className="c1 c">
                            <p>
                                {session?.data?.NmUsuario} -
                            </p>
                        </div>
                        <div className="c2 c">
                            <div className="c1 c">
                                <img src={iconSenha} alt="" onClick={() => { setShowModalAltPass(true) }} />
                            </div>
                            <div className="c2 c" >
                                <img src={iconSair} alt="" onClick={() => { logout(navigate) }} />
                            </div>
                        </div>

                    </div>
                </div>



                <NavBar />
            </header>
            <Modal handleSubmit={handleSubmitAltPass} buttons={[{
                text: "Salvar",
            }]} onClose={() => { setShowModalAltPass(false) }}
                type="SubmitForm"
                show={ShowModalAltPass}
                title="Alterar Senha"
                inputs={[
                    { Label: "Senha Atual", onChange: (event) => { setPassword(event.target.value) }, type: "password" },
                    { Label: "Nova Senha", onChange: (event) => { setNewPassword(event.target.value) }, type: "password" },
                    { Label: "Confirmar Senha", onChange: (event) => { setCfPassword(event.target.value) }, type: "password" }
                ]} />





        </HeaderStyled>
    )
}


export default Header;


