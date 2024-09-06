import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import { checkAuthenticatedSession, isAuthenticated } from './components/Authentication';
import Footer from './components/Footer/Footer';
import ModalShouldLogin from './components/ModalShouldLogin/ModalShouldLogin';
import AccessDenied from './pages/AccessDenied';
import ChangePassword from './pages/ChangePassword';
import NewCondominioForm from './pages/Condominio/NewCondominioForm';
import Dashboard from './pages/Dashboard/Dashboard';
import GatewayForm from './pages/Gateway/GatewayForm';
import Login from './pages/Login/Login';
import EnergyStationForm from './pages/Station/NewStationForm';
import UserBlocked from './pages/UserBlocked';
import NewUserForm from './pages/Usuario/NewUserForm';
import Usuarios from './pages/Usuario/Usuarios';
import NewVeiculoForm from './pages/Veiculo/NewVeiculoForm';
import VerifyCode from './pages/VerifyCode';
import { dev } from './std';
import Apartamento from './pages/Apartamento/Apartamento';




interface ValidatedRouteProps {
  element: React.ReactElement;
}

export const allowedRoutes: { [key: string]: string[] } = {
  Analytics: ["General", "Demographics", "Devices", "Over Time", "Media"],
  Franqueado: ["Home", "Upload", "Arquivo"]
};

const ValidatedRoute: React.FC<ValidatedRouteProps> = ({ element }) => {
  const { navbar = "", section = "" } = useParams<{ navbar: string, section?: string }>();

  const allowedSections = allowedRoutes[navbar] || [];
  const isValidSection = section ? allowedSections.includes(section) : true;

  if (!allowedRoutes[navbar] || !isValidSection) {
    return <Navigate to="/" />;
  }

  return element;
};



const App: React.FC = () => {
  dev.log(isAuthenticated());
  dev.log(checkAuthenticatedSession());



  return (
    <>
    <div style={{paddingBottom:36}}>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Condominio" element={<NewCondominioForm />} />
          <Route path="/Veiculo" element={<NewVeiculoForm />} />
          <Route path="/Usuario" element={<NewUserForm />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/AcessoNegado" element={<AccessDenied />} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
          <Route path="/UsuarioBloqueado" element={<UserBlocked/>} />
          <Route path="/VerifyCode" element={<VerifyCode/>} />
          <Route path="/ShouldLogin" element={<ModalShouldLogin open={true} onClose={function (): void {
            throw new Error('Function not implemented.');
          }} />} />
            <Route path="/Station" element={<EnergyStationForm />} />
            <Route path="/Gateway" element={<GatewayForm />} />
            <Route path="/Apartamento" element={<Apartamento />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </div>  
    </>
  );
};

export default App;

export const PathsURL = {
  navbar: "/:navbar",
  navbarSection: "/:navbar/:section",
};

