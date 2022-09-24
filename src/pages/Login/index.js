import { Page } from "../../components/Page";
import {
  Button,
  FormControl,
  FormControLabel,
  FormControlAction,
  FormControlInput,
} from "../../globalStyles";

export const Login = () => (
  <Page>
    <h1>Iniciar Sesión</h1>
    <form>
      <FormControl>
        <FormControLabel>Correo electrónico</FormControLabel>
        <FormControlInput type="email" />
      </FormControl>

      <FormControl>
        <FormControLabel>Contraseña</FormControLabel>
        <FormControlInput type="password" />
      </FormControl>

      <FormControlAction>
        <Button>Ingresar</Button>
      </FormControlAction>
    </form>
  </Page>
);
