import React, { createContext, Dispatch, FormEvent, ReactNode, SetStateAction, useContext, useState } from 'react';
import { axiosPost } from './Ajax';
import Modal from './components/Modal/Modal';

interface AppContextType {
    user: string | null;
    setUser: (user: string | null) => void;
    showModalRebemberPass: boolean;
    setShowModalRebemberPass: (user: boolean) => void;
    needShowModal: boolean;
    setNeedShowModal: (user: boolean) => void;
    needModal: string;
    setNeedModal:Dispatch<SetStateAction<string>>;
    messageModal:string;
    setMessageModal: Dispatch<SetStateAction<string>>;

}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [showModalRebemberPass, setShowModalRebemberPass] = useState<boolean>(false)
    const [needShowModal, setNeedShowModal] = useState(false)
    const [needModal, setNeedModal] = useState("Loading")
    const [messageModal, setMessageModal] = useState("")
    const closeModal = () => {
        setNeedShowModal(false);
    };

    return (
        <AppContext.Provider value={{ user, setUser, showModalRebemberPass, setShowModalRebemberPass, 
        needShowModal, needModal, messageModal,
        setNeedShowModal, setNeedModal, setMessageModal}}>
            {children}
            < ModalsLogin type={needModal} onClose={closeModal} show={needShowModal} setNeedModal={setNeedModal} MessageBox={messageModal} setMessageModal={setMessageModal} />

        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

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
                console.log(Data.message)
                onClose();
            } else {
                console.log(Data.message)
                setMessageModal(Data.message)
                setNeedModal("MessageBox")
            }

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const Modals: Record<string, JSX.Element> = {
        MessageBox: <Modal title="Erro" show={show} onClose={onClose} type="Error" message={MessageBox} />,
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
