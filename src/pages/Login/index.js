import { useForm } from "react-hook-form";
import { Page } from "../../components/Page";
import {
  Button,
  FormControl,
  FormControLabel,
  FormControlAction,
  FormControlInput,
} from "../../globalStyles";

export const Login = () => {
  
  const {register, handleSubmit, 
      formState: {errors, isValid}
  } = useForm({ mode: "onChange" });

  const onSubmitLogin = (data) => {
    console.log('data', data);
  }

  return (
    <Page>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <FormControl>
          <FormControLabel>Correo electrónico</FormControLabel>
          <FormControlInput 
            type="email"
            {...register("email", {required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          { errors.email?.type === "required" &&
            (<span>Este campo es obligatorio</span>) 
          }
          { errors.email?.type === "pattern" &&
            (<span>Ingrese un correo válido</span>) 
          }
        </FormControl>

        <FormControl>
          <FormControLabel>Contraseña</FormControLabel>
          <FormControlInput 
            type="password"
            {...register("password", {required: true})}
          />
          { errors.password?.type === "required" &&
            (<span>La contraseña es obligatoria</span>) 
          }
        </FormControl>

        <FormControlAction>
          <Button disabled={!isValid} type="submit">Ingresar</Button>
        </FormControlAction>
      </form>
    </Page>
  );
};
