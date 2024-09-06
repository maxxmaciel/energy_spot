
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom"
import { axiosPost } from "../../Ajax"
import { handleLogin } from "../../components/Authentication"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Input from "../../components/Input/Input"
import Modal from "../../components/Modal/Modal"
import { dev, std } from "../../std"
import LoginBananasStyled from "../LoginBananas/LoginBananasStyled"
import Logo from "../images/Logo1.png"


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [needShowModal, setNeedShowModal] = useState(false)
  const [needModal, setNeedModal] = useState("Loading")
  const [messageModal, setMessageModal] = useState("")

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

      Data = std.formatEval(response.data);

      if (Data.success) {
        handleLogin(Data);
        navigate("/Home");
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
      <LoginBananasStyled TESTE="TESTE" >
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
        < ModalsLogin type={needModal} onClose={closeModal} show={needShowModal} setNeedModal={setNeedModal} MessageBox={messageModal} setMessageModal={setMessageModal} />
      </LoginBananasStyled>
      <Footer />
    </>
  )
}

export default Login;

type Props = {
  type: string;
  onClose: () => void;
  show?: boolean;
  setNeedModal?: any
  MessageBox: string
  setMessageModal: Dispatch<SetStateAction<string>>;
}

const ModalsLogin = ({ type, onClose, show = false, setNeedModal, MessageBox, setMessageModal }: Props) => {

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmitRememberPassword = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    try {
      const response = await axiosPost(`/Login.vtt?action=lembrar_senha&TxLogin=${usuario}&TxEmail=${email}`);
      let Data;

      if (typeof response.data === 'string') {
        Data = eval("(" + response.data + ")");
      } else {
        Data = response.data;
      }
      if (Data.success) {
        dev.log(Data.message)
        onClose();
      } else {
        dev.log(Data.message)
        setMessageModal(Data.message)
        setNeedModal("MessageBox")
      }

    } catch (error: unknown) {
      if (error instanceof Error) {
        dev.log(error.message);
      }
    }
  }

  const Modals: Record<string, JSX.Element> = {
    MessageBox: <Modal title="Erro" show={show} onClose={onClose} type="MessageBox" message={MessageBox} />,
    Loading: <Modal title="Validando Usuário" show={show} onClose={onClose} type="Loading" overlay="" />,
    SubmitForm: <Modal
      buttons={[{
        text: "OK"
      }]}
      show={show}
      inputs={[
        { Label: "Usuário", onChange: (event) => { setUsuario(event.target.value) } },
        { Label: "E-Mail", onChange: (event) => { setEmail(event.target.value) } }
      ]}
      title="Lembrar Senha"
      type="SubmitForm"
      onClose={onClose}
      handleSubmit={handleSubmitRememberPassword}
    />

  }
  return Modals[type]
}
