import {ITipo} from "./tipo.model";

export interface IUsuario {
  id: string|number|null;
  usuario: string;
  contraseña: string;
  tipoDeUsuario: ITipo;
}
