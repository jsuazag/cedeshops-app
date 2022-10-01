import { Link } from "react-router-dom";
import { Page } from "../../components/Page";
import { Button } from "../../globalStyles";
import { Theme } from "../../themes/theme";

export const Profile = () => {
  const isAuth = false;
  const user = {
    name: "Jerson",
    phone: "555555",
    email: "jerson.suaza@cedesistemas.edu.co",
    avatar: "",
  };

  const UserInfo = () => (
    <div>
      <h3>{user.name}</h3>
      <h5>{user.phone}</h5>
      <p>{user.email}</p>
      <br />
      <br />
      <Button>Cerrar sesión</Button>
    </div>
  );

  const UserUnauhtorized = () => (
    <div>
      <p>Para acceder a tu perfil, inicia sesión</p>
      <Link to={"/login"}>
        <Button bgColor={Theme.alternative}>Iniciar Sesión</Button>
      </Link>
      <br /><br /><br />
      <p>¿No tienes una cuenta?, Regístrate acá</p>
      <Link to={"/signup"}>
        <Button bgColor={Theme.secoundary}>Registrarme</Button>
      </Link>
    </div>
  )

  return (
    <Page>
      <h1>Mi Cuenta</h1>
      { isAuth ? <UserInfo /> : <UserUnauhtorized /> }
    </Page>
  );
};
