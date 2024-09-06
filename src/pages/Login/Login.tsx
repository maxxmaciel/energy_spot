import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ResponseSuccess } from "../../@types/types"
import { axiosPost } from "../../Ajax"
import { useAppContext } from "../../AppContext"
import { handleLogin } from "../../components/Authentication"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import Logo from "../../images/logo.png"
import { dev } from "../../std"
import LoginStyled from "./LoginStyled"



/*const target = event.target as HTMLElement
if (target.classList.contains("hide_modal")) {
 // setIsShow(false)
}*/

interface ResponseData extends ResponseSuccess {
  data: Record<string, any>;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {setShowModalRebemberPass, setUser, showModalRebemberPass, user, 
    setNeedShowModal, messageModal, needModal, needShowModal, setMessageModal, setNeedModal} = useAppContext();
//  const [needShowModal, setNeedShowModal] = useState(false)
//  const [needModal, setNeedModal] = useState("Loading")
//  const [messageModal, setMessageModal] = useState("")

  const closeModal = () => {
    setNeedShowModal(false);
  };

  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);

  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setNeedModal("Loading");
      setNeedShowModal(true);

      const response = await axiosPost(`/Login.vtt?action=login&TxLogin=${username}&TxSenha=${password}`);
      var Data: Record<string, object>;

      if (typeof response.data === 'string') {
        Data = eval("(" + response.data + ")");
      } else {
        Data = response.data;
      }

      if (Data.success) {
        handleLogin(Data);
        navigate("/Analytics");
        closeModal();
      } else {
        dev.log(Data.message)
        setNeedModal("MessageBox");
        setMessageModal(typeof Data.message == 'object' ? "" : Data.message)
      }

    } catch (error: unknown) {
      if (error instanceof Error) {
        dev.log(error.message);
      }
    }
  }

  return (
    <>
      <LoginStyled >
        <form className="c" onSubmit={handleSubmit}>
          <div className="c_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="c_inputs">
            <div className="c_input">
              <div className="c_field_name">
                LOGIN:
              </div>
              <Input
                onChange={handleUsernameChange}
                type="text"
                required={true}
                onInvalid={e => e.target.setCustomValidity("Campo Usuário não pode ser vazio.")}
                onInput={e => e.target.setCustomValidity('')}
                placeholder="Login" />

            </div>
            <div className="c_input">
              <div className="c_field_name">
                SENHA:
              </div>

              <Input onChange={handlePasswordChange}
                type="password"
                required={true}
                onInvalid={e => e.target.setCustomValidity("Campo Senha não pode ser vazio.")}
                onInput={e => e.target.setCustomValidity('')}
                placeholder="Senha"
              />

              <div className="c_esq_senha"
                onClick={() => {

                  setNeedModal("SubmitForm");
                  setNeedShowModal(true);
                }} >Esqueci minha senha</div>
            </div>
          </div>

          <Button text="ENTRAR" />
        </form>
        


      </LoginStyled>
    
   
    </>
  )
}

export default Login;

