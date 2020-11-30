import { ITipo } from '../models/tipo.model';
import {IUsuario} from '../models/usuario.model';
export default class Profile implements IUsuario {
    id: string | number;
    usuario: string;
    contraseña: string;
    tipoDeUsuario: ITipo;
    name: string;

    constructor(id: string | number,
        usuario: string,
        contraseña: string,
        tipoDeUsuario: ITipo,
        name: string) {
        this.id = id;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.tipoDeUsuario = tipoDeUsuario;
        this.name = name;

    }
}
