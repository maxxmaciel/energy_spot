import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from './Modal/Modal';
import useFetchData from './useFetchData';

interface Props {
    loginRedirectPath: string
    children?: ReactNode
}

const isAuthenticated = () => {
    return checkAuthenticatedSession().success ?? false;
};

const handleLogin = (Data: Object) => {
    localStorage.setItem('Authenticated', JSON.stringify(Data));
};

const handleLogout = () => {
    localStorage.setItem('Authenticated', JSON.stringify({ success: false }));
};

const checkAuthenticatedSession = () => {
    return JSON.parse(localStorage.getItem('Authenticated') ?? "{}")
}


interface AuthenticationRouteProps {

    component: React.ComponentType<any>;
}

class ResponseData {
    data: Record<string, any>[] = [];
    error: string | null = null;
    foundRows: number | null = 0;
    message: string | null = "";
    metaData: string | null = "";
}


const AuthenticatedRoute: React.FC<AuthenticationRouteProps> = ({ component: Component }) => {
    const Clientes = useFetchData<ResponseData>('Crm/Site.vtt?action=load&type=get_clientes', 'get', undefined);
    const [show, setShow] = useState(true)
    const onClose = () => {
        setShow(false);
    };

    return (
        <>
            {Clientes.data && (
                Clientes.data?.data ? (
                    <Component data={Clientes.data.data} />
                ) : (
                    <Navigate to="/" replace={true} />
                )
            )
            }
            {
                Clientes.loading || Clientes.error &&
                <Modal title="Validando Usuário" show={show} onClose={onClose} type="Loading" overlay='' />
            }
        </>

    );
};



export { AuthenticatedRoute, checkAuthenticatedSession, handleLogin, handleLogout, isAuthenticated };

